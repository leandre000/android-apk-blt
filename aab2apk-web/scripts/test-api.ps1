# PowerShell script to test API endpoints
# This script tests the conversion, validation, and info endpoints

param(
    [string]$AABFile = "",
    [string]$BaseUrl = "http://localhost:3000"
)

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  API Endpoint Test Script" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if AAB file is provided
if ([string]::IsNullOrWhiteSpace($AABFile)) {
    Write-Host "[?] Enter path to AAB file:" -ForegroundColor Yellow
    $AABFile = Read-Host
    
    if (-not (Test-Path $AABFile)) {
        Write-Host "[-] File not found: $AABFile" -ForegroundColor Red
        exit 1
    }
}

if (-not (Test-Path $AABFile)) {
    Write-Host "[-] File not found: $AABFile" -ForegroundColor Red
    exit 1
}

Write-Host "[+] Testing with file: $AABFile" -ForegroundColor Green
Write-Host ""

# Read and encode file to base64
Write-Host "[*] Reading file..." -ForegroundColor Yellow
$fileBytes = [System.IO.File]::ReadAllBytes($AABFile)
$base64 = [Convert]::ToBase64String($fileBytes)
$fileName = Split-Path -Leaf $AABFile

Write-Host "[+] File encoded (Size: $($fileBytes.Length) bytes)" -ForegroundColor Green
Write-Host ""

# Test 1: Validate AAB
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Test 1: Validate AAB" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

$validateBody = @{
    file = $base64
    fileName = $fileName
} | ConvertTo-Json

try {
    $validateResponse = Invoke-RestMethod -Uri "$BaseUrl/api/validate" -Method Post -Body $validateBody -ContentType "application/json"
    
    if ($validateResponse.valid) {
        Write-Host "[+] Validation: PASSED" -ForegroundColor Green
        Write-Host "   Message: $($validateResponse.message)" -ForegroundColor White
    } else {
        Write-Host "[-] Validation: FAILED" -ForegroundColor Red
        Write-Host "   Message: $($validateResponse.message)" -ForegroundColor White
    }
} catch {
    Write-Host "[-] Validation request failed: $_" -ForegroundColor Red
}

Write-Host ""

# Test 2: Get AAB Info
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Test 2: Get AAB Info" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

$infoBody = @{
    file = $base64
    fileName = $fileName
} | ConvertTo-Json

try {
    $infoResponse = Invoke-RestMethod -Uri "$BaseUrl/api/info" -Method Post -Body $infoBody -ContentType "application/json"
    
    if ($infoResponse.success) {
        Write-Host "[+] Info retrieval: SUCCESS" -ForegroundColor Green
        if ($infoResponse.info) {
            Write-Host "   Package Name: $($infoResponse.info.packageName)" -ForegroundColor White
            Write-Host "   Version Code: $($infoResponse.info.versionCode)" -ForegroundColor White
            Write-Host "   Version Name: $($infoResponse.info.versionName)" -ForegroundColor White
            Write-Host "   Min SDK: $($infoResponse.info.minSdkVersion)" -ForegroundColor White
            Write-Host "   Target SDK: $($infoResponse.info.targetSdkVersion)" -ForegroundColor White
        }
    } else {
        Write-Host "[-] Info retrieval: FAILED" -ForegroundColor Red
        Write-Host "   Error: $($infoResponse.error)" -ForegroundColor White
    }
} catch {
    Write-Host "[-] Info request failed: $_" -ForegroundColor Red
}

Write-Host ""

# Test 3: Convert AAB to APK
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Test 3: Convert AAB to APK" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "[*] This may take a few minutes..." -ForegroundColor Yellow

$convertBody = @{
    file = $base64
    fileName = $fileName
    options = @{
        universal = $true
        optimize = $false
        sign = $false
    }
} | ConvertTo-Json -Depth 3

try {
    $convertResponse = Invoke-RestMethod -Uri "$BaseUrl/api/convert" -Method Post -Body $convertBody -ContentType "application/json" -TimeoutSec 300
    
    if ($convertResponse.success) {
        Write-Host "[+] Conversion: SUCCESS" -ForegroundColor Green
        Write-Host "   File Name: $($convertResponse.fileName)" -ForegroundColor White
        Write-Host "   File Size: $($convertResponse.fileSize) bytes" -ForegroundColor White
        Write-Host "   Message: $($convertResponse.message)" -ForegroundColor White
        
        # Optionally save the file
        if ($convertResponse.file) {
            $saveChoice = Read-Host "[?] Save converted APK? [y/N]"
            if ($saveChoice -match '^[yY]') {
                $outputPath = Join-Path (Get-Location) $convertResponse.fileName
                $outputBytes = [Convert]::FromBase64String($convertResponse.file)
                [System.IO.File]::WriteAllBytes($outputPath, $outputBytes)
                Write-Host "[+] APK saved to: $outputPath" -ForegroundColor Green
            }
        }
    } else {
        Write-Host "[-] Conversion: FAILED" -ForegroundColor Red
        Write-Host "   Error: $($convertResponse.error)" -ForegroundColor White
        if ($convertResponse.details) {
            Write-Host "   Details: $($convertResponse.details)" -ForegroundColor White
        }
    }
} catch {
    Write-Host "[-] Conversion request failed: $_" -ForegroundColor Red
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "   Response: $responseBody" -ForegroundColor White
    }
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Testing Complete" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

