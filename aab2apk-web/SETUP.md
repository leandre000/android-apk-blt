# Setup Guide

This guide will help you set up the AAB2APK backend system for production use.

## Prerequisites

- **Java JDK 8+** (Java 22 detected and ready)
- **Node.js 18+**
- **npm** or **yarn**

## Step 1: Verify Java Installation

Java is already installed on your system:
```
Java version "22.0.2"
```

If you need to install Java on a different system:
- **Windows**: Download from [Oracle](https://www.oracle.com/java/technologies/downloads/) or [Adoptium](https://adoptium.net/)
- **Linux**: `sudo apt-get install openjdk-11-jdk`
- **macOS**: `brew install openjdk@11`

## Step 2: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your configuration:
   ```env
   # Java Configuration (Auto-detected)
   JAVA_HOME=C:\Program Files\Java\jdk-22
   JAVA_PATH=java

   # Keystore Configuration (for production signing)
   KEYSTORE_PATH=./keystore/release.keystore
   KEYSTORE_ALIAS=release-key
   KEYSTORE_PASSWORD=your_secure_password
   KEY_PASSWORD=your_secure_password
   ```

## Step 3: Set Up Keystore for Production Signing

### Option A: Use the Setup Script (Recommended)

Run the PowerShell script to generate a keystore:

```powershell
.\scripts\setup-keystore.ps1
```

The script will:
- Prompt for keystore information
- Generate a secure keystore file
- Provide the configuration values for your `.env.local`

### Option B: Manual Keystore Creation

```bash
keytool -genkey -v -keystore keystore/release.keystore \
  -alias release-key -keyalg RSA -keysize 2048 -validity 10000
```

**Important**: Save your keystore password and alias securely. You cannot recover them if lost!

## Step 4: Install Dependencies

```bash
npm install
```

## Step 5: Test the API Endpoints

### Option A: Use the Test Script

1. Start the development server:
   ```bash
   npm run dev
   ```

2. In another terminal, run the test script:
   ```powershell
   .\scripts\test-api.ps1 -AABFile "path\to\your\app.aab"
   ```

The script will test:
- ✅ AAB validation
- ✅ AAB information retrieval
- ✅ AAB to APK conversion

### Option B: Manual Testing with cURL

```bash
# Validate AAB
curl -X POST http://localhost:3000/api/validate \
  -H "Content-Type: application/json" \
  -d '{"file":"base64_encoded_file","fileName":"app.aab"}'

# Get AAB Info
curl -X POST http://localhost:3000/api/info \
  -H "Content-Type: application/json" \
  -d '{"file":"base64_encoded_file","fileName":"app.aab"}'

# Convert AAB to APK
curl -X POST http://localhost:3000/api/convert \
  -H "Content-Type: application/json" \
  -d '{"file":"base64_encoded_file","fileName":"app.aab","options":{"universal":true}}'
```

## Step 6: Production Deployment

### Environment Variables for Production

Update your production environment variables:

```env
# Application
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_APP_NAME=AAB2APK Pro

# Security
KEYSTORE_PATH=/secure/path/to/keystore/release.keystore
KEYSTORE_PASSWORD=your_secure_production_password
ENABLE_SIGNING=true

# File Storage
UPLOAD_DIR=/var/app/uploads
OUTPUT_DIR=/var/app/output
FILE_RETENTION_HOURS=1

# Logging
LOG_LEVEL=warn
LOG_FILE=/var/log/aab2apk/app.log
```

### Security Checklist

- [ ] Use strong keystore passwords
- [ ] Store keystore in secure location (not in repository)
- [ ] Set appropriate file retention periods
- [ ] Enable logging for production monitoring
- [ ] Configure proper CORS settings
- [ ] Set up rate limiting
- [ ] Use HTTPS in production
- [ ] Regularly update bundletool

## Troubleshooting

### Java Not Found

**Error**: `Java not found`

**Solution**:
1. Verify Java is installed: `java -version`
2. Set `JAVA_HOME` in `.env.local`:
   ```env
   JAVA_HOME=C:\Program Files\Java\jdk-22
   ```

### Bundletool Download Fails

**Error**: `Bundletool not found and download failed`

**Solution**:
1. Check internet connection
2. Manually download bundletool:
   ```bash
   wget https://github.com/google/bundletool/releases/latest/download/bundletool-all.jar
   ```
3. Set `BUNDLETOOL_PATH` in `.env.local`:
   ```env
   BUNDLETOOL_PATH=./bundletool-all.jar
   ```

### Keystore Errors

**Error**: `Keystore file not found`

**Solution**:
1. Verify keystore path in `.env.local`
2. Ensure keystore file exists
3. Check file permissions

**Error**: `Keystore password incorrect`

**Solution**:
1. Verify `KEYSTORE_PASSWORD` in `.env.local`
2. Ensure `KEY_PASSWORD` matches if different

### File Size Errors

**Error**: `File size exceeds maximum limit`

**Solution**:
1. Increase `API_MAX_FILE_SIZE` in `.env.local` (max 100MB)
2. Or compress your AAB file before upload

## Monitoring

### Check Logs

```bash
# View application logs
tail -f logs/app.log
```

### Health Check

The API endpoints will return appropriate error messages. Monitor:
- Conversion success rate
- Average conversion time
- Error rates
- File cleanup operations

## Support

For issues or questions:
- Check the [API Documentation](./API.md)
- Review error logs
- Open an issue on GitHub

---

**Setup Complete!** 🎉

Your backend is now configured and ready to handle AAB to APK conversions.

