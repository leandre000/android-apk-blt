import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir, unlink } from 'fs/promises'
import { join } from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'
import { existsSync } from 'fs'

const execAsync = promisify(exec)

const MAX_FILE_SIZE = 100 * 1024 * 1024 // 100MB
const UPLOAD_DIR = join(process.cwd(), 'uploads')

interface ValidateRequest {
  file: string // base64 encoded file
  fileName: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ValidateRequest = await request.json()
    
    if (!body.file || !body.fileName) {
      return NextResponse.json(
        { error: 'File and fileName are required' },
        { status: 400 }
      )
    }

    // Ensure directories exist
    await mkdir(UPLOAD_DIR, { recursive: true })

    // Decode base64 file
    const fileBuffer = Buffer.from(body.file, 'base64')
    
    if (fileBuffer.length > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size exceeds maximum limit of 100MB' },
        { status: 400 }
      )
    }

    // Save uploaded file
    const inputFileName = body.fileName.endsWith('.aab') 
      ? body.fileName 
      : `${body.fileName}.aab`
    const inputPath = join(UPLOAD_DIR, inputFileName)
    await writeFile(inputPath, fileBuffer)

    // Get bundletool path
    const bundletoolPath = await getBundletoolPath()

    // Validate AAB file
    const command = `java -jar "${bundletoolPath}" validate --bundle="${inputPath}"`

    try {
      const { stdout, stderr } = await execAsync(command, {
        maxBuffer: 10 * 1024 * 1024,
        timeout: 60000 // 1 minute timeout
      })

      // Cleanup
      await unlink(inputPath).catch(() => {})

      if (stderr && !stderr.includes('Warning')) {
        return NextResponse.json({
          valid: false,
          message: stderr || 'Validation failed',
          details: stdout
        })
      }

      return NextResponse.json({
        valid: true,
        message: 'AAB file is valid',
        details: stdout
      })
    } catch (error: any) {
      // Cleanup on error
      await unlink(inputPath).catch(() => {})
      
      return NextResponse.json({
        valid: false,
        message: 'Validation failed',
        details: error.message || 'Unknown error occurred'
      })
    }
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Server error', details: error.message },
      { status: 500 }
    )
  }
}

async function getBundletoolPath(): Promise<string> {
  const possiblePaths = [
    join(process.cwd(), 'bundletool-all.jar'),
    join(process.cwd(), 'bundletool', 'bundletool-all.jar'),
    join(process.cwd(), '..', 'bundletool-all.jar'),
  ]

  for (const path of possiblePaths) {
    if (existsSync(path)) {
      return path
    }
  }

  const bundletoolPath = join(process.cwd(), 'bundletool-all.jar')
  const bundletoolUrl = 'https://github.com/google/bundletool/releases/latest/download/bundletool-all.jar'
  
  try {
    const response = await fetch(bundletoolUrl)
    if (!response.ok) throw new Error('Failed to download bundletool')
    
    const buffer = Buffer.from(await response.arrayBuffer())
    await writeFile(bundletoolPath, buffer)
    
    return bundletoolPath
  } catch (error) {
    throw new Error('Bundletool not found and download failed.')
  }
}

