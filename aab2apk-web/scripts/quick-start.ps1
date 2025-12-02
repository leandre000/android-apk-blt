# Quick Start Script
# This script helps you get started quickly

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  AAB2APK Backend Quick Start" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check Java
Write-Host "[*] Checking Java installation..." -ForegroundColor Yellow
try {
    $javaVersion = java -version 2>&1 | Select-String "version"
    Write-Host "[+] Java found: $javaVersion" -ForegroundColor Green
} catch {
    Write-Host "[-] Java not found. Please install Java JDK 8+" -ForegroundColor Red
    exit 1
}

# Check Node.js
Write-Host "[*] Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "[+] Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "[-] Node.js not found. Please install Node.js 18+" -ForegroundColor Red
    exit 1
}

# Check if .env.local exists
Write-Host "[*] Checking environment configuration..." -ForegroundColor Yellow
if (-not (Test-Path ".env.local")) {
    Write-Host "[*] Creating .env.local from .env.example..." -ForegroundColor Yellow
    if (Test-Path ".env.example") {
        Copy-Item ".env.example" ".env.local"
        Write-Host "[+] Created .env.local" -ForegroundColor Green
        Write-Host "[!] Please edit .env.local with your configuration" -ForegroundColor Yellow
    } else {
        Write-Host "[-] .env.example not found" -ForegroundColor Red
    }
} else {
    Write-Host "[+] .env.local exists" -ForegroundColor Green
}

# Check if dependencies are installed
Write-Host "[*] Checking dependencies..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "[*] Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -eq 0) {
        Write-Host "[+] Dependencies installed" -ForegroundColor Green
    } else {
        Write-Host "[-] Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "[+] Dependencies installed" -ForegroundColor Green
}

# Create necessary directories
Write-Host "[*] Creating necessary directories..." -ForegroundColor Yellow
$dirs = @("uploads", "output", "logs", "keystore")
foreach ($dir in $dirs) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "[+] Created directory: $dir" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Setup Complete!" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Edit .env.local with your configuration" -ForegroundColor White
Write-Host "2. (Optional) Run .\scripts\setup-keystore.ps1 to create a keystore" -ForegroundColor White
Write-Host "3. Start the development server: npm run dev" -ForegroundColor White
Write-Host "4. Test the API: .\scripts\test-api.ps1 -AABFile path\to\your\app.aab" -ForegroundColor White
Write-Host ""

