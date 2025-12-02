import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir, readFile, unlink } from 'fs/promises'
import { join } from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'
import { existsSync } from 'fs'

const execAsync = promisify(exec)

const MAX_FILE_SIZE = 100 * 1024 * 1024 // 100MB
const UPLOAD_DIR = join(process.cwd(), 'uploads')
const OUTPUT_DIR = join(process.cwd(), 'output')

interface ConvertRequest {
  file: string // base64 encoded file
  fileName: string
  options?: {
    universal?: boolean
    optimize?: boolean
    sign?: boolean
    keystore?: {
      path?: string
      alias?: string
      password?: string
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ConvertRequest = await request.json()
    
    if (!body.file || !body.fileName) {
      return NextResponse.json(
        { error: 'File and fileName are required' },
        { status: 400 }
      )
    }

    // Ensure directories exist
    await mkdir(UPLOAD_DIR, { recursive: true })
    await mkdir(OUTPUT_DIR, { recursive: true })

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

    // Generate output name
    const baseName = inputFileName.replace('.aab', '')
    const outputName = `${baseName}.apks`
    const outputPath = join(OUTPUT_DIR, outputName)

    // Get bundletool path
    const bundletoolPath = await getBundletoolPath()

    // Build conversion command
    const options = body.options || {}
    const mode = options.universal ? 'universal' : 'default'
    
    let command = `java -jar "${bundletoolPath}" build-apks --bundle="${inputPath}" --output="${outputPath}" --mode=${mode}`

    // Add signing if provided
    if (options.sign && options.keystore) {
      const keystore = options.keystore
      if (keystore.path && keystore.alias && keystore.password) {
        command += ` --ks="${keystore.path}" --ks-key-alias="${keystore.alias}" --ks-pass=pass:${keystore.password} --key-pass=pass:${keystore.password}`
      }
    }

    // Execute conversion
    try {
      const { stdout, stderr } = await execAsync(command, {
        maxBuffer: 10 * 1024 * 1024, // 10MB buffer
        timeout: 300000 // 5 minutes timeout
      })

      if (stderr && !stderr.includes('Warning')) {
        throw new Error(stderr)
      }

      // Check if output file exists
      if (!existsSync(outputPath)) {
        throw new Error('Conversion completed but output file not found')
      }

      // Read output file
      const outputBuffer = await readFile(outputPath)
      const outputBase64 = outputBuffer.toString('base64')

      // Cleanup
      await unlink(inputPath).catch(() => {})
      await unlink(outputPath).catch(() => {})

      return NextResponse.json({
        success: true,
        fileName: outputName,
        fileSize: outputBuffer.length,
        file: outputBase64,
        message: 'Conversion completed successfully'
      })
    } catch (error: any) {
      // Cleanup on error
      await unlink(inputPath).catch(() => {})
      await unlink(outputPath).catch(() => {})
      
      return NextResponse.json(
        { 
          error: 'Conversion failed', 
          details: error.message || 'Unknown error occurred' 
        },
        { status: 500 }
      )
    }
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Server error', details: error.message },
      { status: 500 }
    )
  }
}

async function getBundletoolPath(): Promise<string> {
  // Check common locations
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

  // Download bundletool if not found
  const bundletoolPath = join(process.cwd(), 'bundletool-all.jar')
  const bundletoolUrl = 'https://github.com/google/bundletool/releases/latest/download/bundletool-all.jar'
  
  try {
    const response = await fetch(bundletoolUrl)
    if (!response.ok) throw new Error('Failed to download bundletool')
    
    const buffer = Buffer.from(await response.arrayBuffer())
    await writeFile(bundletoolPath, buffer)
    
    return bundletoolPath
  } catch (error) {
    throw new Error('Bundletool not found and download failed. Please ensure bundletool is available.')
  }
}

