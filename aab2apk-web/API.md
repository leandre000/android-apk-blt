# Backend API Documentation

## Overview

The AAB2APK backend provides RESTful API endpoints for converting Android App Bundle (AAB) files to APK format, validating AAB files, and retrieving bundle information.

## Base URL

```
/api
```

## Endpoints

### 1. Convert AAB to APK

**POST** `/api/convert`

Converts an Android App Bundle (.aab) file to APK format.

#### Request Body

```json
{
  "file": "base64_encoded_file_content",
  "fileName": "app-release.aab",
  "options": {
    "universal": true,
    "optimize": false,
    "sign": false,
    "keystore": {
      "path": "path/to/keystore.keystore",
      "alias": "key-alias",
      "password": "keystore-password"
    }
  }
}
```

#### Response (Success)

```json
{
  "success": true,
  "fileName": "app-release.apks",
  "fileSize": 12345678,
  "file": "base64_encoded_apk_content",
  "message": "Conversion completed successfully"
}
```

#### Response (Error)

```json
{
  "error": "Conversion failed",
  "details": "Error message details"
}
```

#### Status Codes

- `200` - Success
- `400` - Bad Request (missing file or invalid options)
- `500` - Server Error

---

### 2. Validate AAB File

**POST** `/api/validate`

Validates an Android App Bundle file for integrity and correctness.

#### Request Body

```json
{
  "file": "base64_encoded_file_content",
  "fileName": "app-release.aab"
}
```

#### Response (Valid)

```json
{
  "valid": true,
  "message": "AAB file is valid",
  "details": "Validation output details"
}
```

#### Response (Invalid)

```json
{
  "valid": false,
  "message": "Validation failed",
  "details": "Error details"
}
```

#### Status Codes

- `200` - Success (validation completed)
- `400` - Bad Request
- `500` - Server Error

---

### 3. Get AAB Information

**POST** `/api/info`

Retrieves detailed information about an Android App Bundle file.

#### Request Body

```json
{
  "file": "base64_encoded_file_content",
  "fileName": "app-release.aab"
}
```

#### Response (Success)

```json
{
  "success": true,
  "info": {
    "packageName": "com.example.app",
    "versionCode": "1",
    "versionName": "1.0.0",
    "minSdkVersion": "21",
    "targetSdkVersion": "33"
  },
  "raw": "Raw manifest output"
}
```

#### Response (Error)

```json
{
  "success": false,
  "error": "Failed to get AAB information",
  "details": "Error details"
}
```

#### Status Codes

- `200` - Success
- `400` - Bad Request
- `500` - Server Error

---

## File Size Limits

- Maximum file size: **100MB**
- Files exceeding this limit will return a `400 Bad Request` error

## Conversion Options

### Universal APK

When `universal: true`, generates a single APK file that works on all device architectures. This is the default mode.

### Optimization

When `optimize: true`, the APK is optimized using zipalign for better performance. Note: This requires Android SDK tools.

### Signing

When `sign: true`, the APK is signed with the provided keystore. You must provide:
- `keystore.path` - Path to the keystore file
- `keystore.alias` - Key alias
- `keystore.password` - Keystore password

## Error Handling

All endpoints return appropriate HTTP status codes and error messages in JSON format:

```json
{
  "error": "Error type",
  "details": "Detailed error message"
}
```

## Rate Limiting

Currently, there are no rate limits. However, large files may take several minutes to process.

## Security Notes

- All uploaded files are automatically deleted after processing
- Files are stored temporarily in the `uploads/` directory
- Output files are stored temporarily in the `output/` directory
- Base64 encoding is used for file transfer

## Dependencies

The backend requires:
- Java JDK 8 or higher
- Bundletool (automatically downloaded if not found)
- Node.js 18+ (for the API server)

## Example Usage

### JavaScript/TypeScript

```typescript
import { convertAABToAPK, validateAAB, getAABInfo } from '@/lib/conversion-service'

// Convert AAB to APK
const file = // File object from input
const result = await convertAABToAPK(file, {
  universal: true,
  optimize: true,
  sign: false
})

if (result.success) {
  // Download the file
  downloadFile(result.file!, result.fileName!)
}

// Validate AAB
const validation = await validateAAB(file)
console.log('Valid:', validation.valid)

// Get AAB info
const info = await getAABInfo(file)
console.log('Package:', info.info?.packageName)
```

### cURL

```bash
# Convert AAB to APK
curl -X POST http://localhost:3000/api/convert \
  -H "Content-Type: application/json" \
  -d '{
    "file": "base64_encoded_file",
    "fileName": "app.aab",
    "options": {
      "universal": true
    }
  }'
```

## Troubleshooting

### Java Not Found

Ensure Java JDK 8+ is installed and available in your PATH:
```bash
java -version
```

### Bundletool Download Fails

The API will attempt to download bundletool automatically. If this fails:
1. Check your internet connection
2. Manually download bundletool and place it in the project root
3. Ensure the file is named `bundletool-all.jar`

### File Size Errors

If you encounter file size errors:
- Check that the file is under 100MB
- Verify the base64 encoding is correct
- Ensure the file is a valid .aab file

