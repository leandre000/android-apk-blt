# PowerShell script to generate a keystore for APK signing
# Run this script to create a production keystore

param(
    [string]$KeystorePath = "./keystore/release.keystore",
    [string]$Alias = "release-key",
    [string]$Password = "",
    [string]$Validity = "10000"
)

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Keystore Setup Script" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if Java is available
try {
    $javaVersion = java -version 2>&1
    Write-Host "[+] Java found" -ForegroundColor Green
} catch {
    Write-Host "[-] Java not found. Please install Java JDK 8+" -ForegroundColor Red
    exit 1
}

# Create keystore directory if it doesn't exist
$keystoreDir = Split-Path -Parent $KeystorePath
if (-not (Test-Path $keystoreDir)) {
    New-Item -ItemType Directory -Path $keystoreDir -Force | Out-Null
    Write-Host "[+] Created keystore directory: $keystoreDir" -ForegroundColor Green
}

# Check if keystore already exists
if (Test-Path $KeystorePath) {
    $overwrite = Read-Host "[?] Keystore already exists. Overwrite? [y/N]"
    if ($overwrite -notmatch '^[yY]') {
        Write-Host "[*] Keystore setup cancelled" -ForegroundColor Yellow
        exit 0
    }
    Remove-Item $KeystorePath -Force
}

# Prompt for password if not provided
if ([string]::IsNullOrWhiteSpace($Password)) {
    Write-Host ""
    Write-Host "Enter keystore information:" -ForegroundColor Cyan
    $Password = Read-Host "[?] Enter keystore password (min 6 characters)" -AsSecureString
    $PasswordPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
        [Runtime.InteropServices.Marshal]::SecureStringToBSTR($Password)
    )
    $KeyPassword = Read-Host "[?] Enter key password (or press Enter to use same as keystore)" -AsSecureString
    $KeyPasswordPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
        [Runtime.InteropServices.Marshal]::SecureStringToBSTR($KeyPassword)
    )
    
    if ([string]::IsNullOrWhiteSpace($KeyPasswordPlain)) {
        $KeyPasswordPlain = $PasswordPlain
    }
} else {
    $PasswordPlain = $Password
    $KeyPasswordPlain = $Password
}

# Prompt for additional information
$Name = Read-Host "[?] Enter your name (CN)"
$OrgUnit = Read-Host "[?] Enter organizational unit (OU)"
$Org = Read-Host "[?] Enter organization (O)"
$City = Read-Host "[?] Enter city (L)"
$State = Read-Host "[?] Enter state (ST)"
$Country = Read-Host "[?] Enter country code (C, e.g., US)"

# Generate keystore
Write-Host ""
Write-Host "[*] Generating keystore..." -ForegroundColor Yellow

$dname = "CN=$Name, OU=$OrgUnit, O=$Org, L=$City, ST=$State, C=$Country"

$keytoolArgs = @(
    "-genkey",
    "-v",
    "-keystore", $KeystorePath,
    "-alias", $Alias,
    "-keyalg", "RSA",
    "-keysize", "2048",
    "-validity", $Validity,
    "-storepass", $PasswordPlain,
    "-keypass", $KeyPasswordPlain,
    "-dname", $dname
)

try {
    & keytool $keytoolArgs
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "[+] Keystore created successfully!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Keystore Details:" -ForegroundColor Cyan
        Write-Host "  Path: $KeystorePath" -ForegroundColor White
        Write-Host "  Alias: $Alias" -ForegroundColor White
        Write-Host "  Validity: $Validity days" -ForegroundColor White
        Write-Host ""
        Write-Host "IMPORTANT: Save these credentials securely!" -ForegroundColor Yellow
        Write-Host "  Keystore Password: $PasswordPlain" -ForegroundColor Yellow
        Write-Host "  Key Password: $KeyPasswordPlain" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Update your .env.local file with:" -ForegroundColor Cyan
        Write-Host "  KEYSTORE_PATH=$KeystorePath" -ForegroundColor White
        Write-Host "  KEYSTORE_ALIAS=$Alias" -ForegroundColor White
        Write-Host "  KEYSTORE_PASSWORD=$PasswordPlain" -ForegroundColor White
        Write-Host "  KEY_PASSWORD=$KeyPasswordPlain" -ForegroundColor White
    } else {
        Write-Host "[-] Failed to create keystore" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "[-] Error creating keystore: $_" -ForegroundColor Red
    exit 1
}

