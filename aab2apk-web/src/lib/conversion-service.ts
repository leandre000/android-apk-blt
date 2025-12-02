/**
 * Conversion Service
 * Handles AAB to APK conversion via API
 */

export interface ConversionOptions {
  universal?: boolean
  optimize?: boolean
  sign?: boolean
  keystore?: {
    path?: string
    alias?: string
    password?: string
  }
}

export interface ConversionResult {
  success: boolean
  fileName?: string
  fileSize?: number
  file?: string // base64 encoded
  message?: string
  error?: string
  details?: string
}

export interface ValidationResult {
  valid: boolean
  message: string
  details?: string
}

export interface AABInfo {
  success: boolean
  info?: {
    packageName?: string
    versionCode?: string
    versionName?: string
    minSdkVersion?: string
    targetSdkVersion?: string
  }
  raw?: string
  error?: string
}

/**
 * Convert AAB file to APK
 */
export async function convertAABToAPK(
  file: File,
  options: ConversionOptions = {}
): Promise<ConversionResult> {
  try {
    // Convert file to base64
    const arrayBuffer = await file.arrayBuffer()
    const base64 = Buffer.from(arrayBuffer).toString('base64')

    // Call API
    const response = await fetch('/api/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        file: base64,
        fileName: file.name,
        options,
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Conversion failed',
        details: result.details,
      }
    }

    return result
  } catch (error: any) {
    return {
      success: false,
      error: 'Network error',
      details: error.message,
    }
  }
}

/**
 * Validate AAB file
 */
export async function validateAAB(file: File): Promise<ValidationResult> {
  try {
    // Convert file to base64
    const arrayBuffer = await file.arrayBuffer()
    const base64 = Buffer.from(arrayBuffer).toString('base64')

    // Call API
    const response = await fetch('/api/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        file: base64,
        fileName: file.name,
      }),
    })

    const result = await response.json()

    return {
      valid: result.valid || false,
      message: result.message || 'Validation completed',
      details: result.details,
    }
  } catch (error: any) {
    return {
      valid: false,
      message: 'Validation failed',
      details: error.message,
    }
  }
}

/**
 * Get AAB file information
 */
export async function getAABInfo(file: File): Promise<AABInfo> {
  try {
    // Convert file to base64
    const arrayBuffer = await file.arrayBuffer()
    const base64 = Buffer.from(arrayBuffer).toString('base64')

    // Call API
    const response = await fetch('/api/info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        file: base64,
        fileName: file.name,
      }),
    })

    const result = await response.json()

    return result
  } catch (error: any) {
    return {
      success: false,
      error: error.message || 'Failed to get AAB information',
    }
  }
}

/**
 * Download file from base64
 */
export function downloadFile(base64: string, fileName: string) {
  const byteCharacters = atob(base64)
  const byteNumbers = new Array(byteCharacters.length)
  
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }
  
  const byteArray = new Uint8Array(byteNumbers)
  const blob = new Blob([byteArray])
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

