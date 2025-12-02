/**
 * Environment Configuration
 * Centralized access to environment variables
 */

export const env = {
  // Application
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'AAB2APK Pro',

  // API Configuration
  maxFileSize: parseInt(process.env.API_MAX_FILE_SIZE || '104857600', 10), // 100MB default
  apiTimeout: parseInt(process.env.API_TIMEOUT || '300000', 10), // 5 minutes default

  // Java Configuration
  javaHome: process.env.JAVA_HOME || '',
  javaPath: process.env.JAVA_PATH || 'java',

  // Bundletool Configuration
  bundletoolPath: process.env.BUNDLETOOL_PATH || '',
  bundletoolVersion: process.env.BUNDLETOOL_VERSION || 'latest',
  bundletoolAutoDownload: process.env.BUNDLETOOL_AUTO_DOWNLOAD !== 'false',

  // Keystore Configuration
  keystorePath: process.env.KEYSTORE_PATH || '',
  keystoreAlias: process.env.KEYSTORE_ALIAS || '',
  keystorePassword: process.env.KEYSTORE_PASSWORD || '',
  keyPassword: process.env.KEY_PASSWORD || '',

  // File Storage
  uploadDir: process.env.UPLOAD_DIR || './uploads',
  outputDir: process.env.OUTPUT_DIR || './output',
  cleanupInterval: parseInt(process.env.CLEANUP_INTERVAL || '3600000', 10), // 1 hour default
  fileRetentionHours: parseInt(process.env.FILE_RETENTION_HOURS || '24', 10),

  // Security
  allowedFileTypes: (process.env.ALLOWED_FILE_TYPES || '.aab').split(','),
  maxFilesPerUser: parseInt(process.env.MAX_FILES_PER_USER || '10', 10),

  // Logging
  logLevel: process.env.LOG_LEVEL || 'info',
  logFile: process.env.LOG_FILE || './logs/app.log',

  // Feature Flags
  enableValidation: process.env.ENABLE_VALIDATION !== 'false',
  enableOptimization: process.env.ENABLE_OPTIMIZATION !== 'false',
  enableSigning: process.env.ENABLE_SIGNING === 'true',
}

/**
 * Validate environment configuration
 */
export function validateEnv(): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  // Check Java
  if (!env.javaPath && !env.javaHome) {
    errors.push('Java path not configured. Set JAVA_HOME or JAVA_PATH')
  }

  // Check file size limits
  if (env.maxFileSize > 100 * 1024 * 1024) {
    errors.push('Maximum file size cannot exceed 100MB')
  }

  // Check keystore if signing is enabled
  if (env.enableSigning) {
    if (!env.keystorePath) {
      errors.push('Keystore path required when signing is enabled')
    }
    if (!env.keystoreAlias) {
      errors.push('Keystore alias required when signing is enabled')
    }
    if (!env.keystorePassword) {
      errors.push('Keystore password required when signing is enabled')
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

/**
 * Get Java executable path
 */
export function getJavaPath(): string {
  if (env.javaHome) {
    const javaExe = process.platform === 'win32' ? 'java.exe' : 'java'
    return `${env.javaHome}/bin/${javaExe}`
  }
  return env.javaPath
}

