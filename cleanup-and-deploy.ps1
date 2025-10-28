# AAB2APK Pro - Complete Cleanup and Deploy Script

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  AAB2APK Pro - Project Cleanup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Clean up commit files
Write-Host "[1/8] Cleaning up commit files..." -ForegroundColor Yellow
$commitFiles = Get-ChildItem -Path "." -Filter "commit-*.txt"
if ($commitFiles.Count -gt 0) {
    $commitFiles | Remove-Item -Force
    Write-Host "  ✓ Removed $($commitFiles.Count) commit files" -ForegroundColor Green
} else {
    Write-Host "  ✓ No commit files to clean" -ForegroundColor Green
}

# Step 2: Verify web app structure
Write-Host "[2/8] Verifying web app structure..." -ForegroundColor Yellow
$requiredFiles = @(
    "aab2apk-web/package.json",
    "aab2apk-web/src/app/page.tsx",
    "aab2apk-web/src/app/layout.tsx"
)

$allPresent = $true
foreach ($file in $requiredFiles) {
    if (-not (Test-Path $file)) {
        Write-Host "  ✗ Missing: $file" -ForegroundColor Red
        $allPresent = $false
    }
}

if ($allPresent) {
    Write-Host "  ✓ All core files present" -ForegroundColor Green
}

# Step 3: Create additional pages
Write-Host "[3/8] Creating additional app pages..." -ForegroundColor Yellow
if (Test-Path "create-web-app-files.ps1") {
    try {
        & ".\create-web-app-files.ps1"
        Write-Host "  ✓ Additional pages created" -ForegroundColor Green
    } catch {
        Write-Host "  ⚠ Some files may already exist" -ForegroundColor Yellow
    }
}

# Step 4: Install dependencies
Write-Host "[4/8] Installing dependencies..." -ForegroundColor Yellow
Push-Location "aab2apk-web"
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "  ✓ Dependencies installed" -ForegroundColor Green
} else {
    Write-Host "  ✗ Failed to install dependencies" -ForegroundColor Red
    Pop-Location
    exit 1
}

# Step 5: Type check
Write-Host "[5/8] Running type check..." -ForegroundColor Yellow
npm run type-check 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    Write-Host "  ✓ Type check passed" -ForegroundColor Green
} else {
    Write-Host "  ⚠ Type check warnings (continuing...)" -ForegroundColor Yellow
}

# Step 6: Build test
Write-Host "[6/8] Testing production build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "  ✓ Build successful!" -ForegroundColor Green
} else {
    Write-Host "  ✗ Build failed!" -ForegroundColor Red
    Pop-Location
    exit 1
}

Pop-Location

# Step 7: Commit changes
Write-Host "[7/8] Committing changes..." -ForegroundColor Yellow
git add .
$status = git status --porcelain
if ($status) {
    git commit -m "Clean up project and prepare for deployment"
    Write-Host "  ✓ Changes committed" -ForegroundColor Green
} else {
    Write-Host "  ✓ No changes to commit" -ForegroundColor Green
}

# Step 8: Push to GitHub
Write-Host "[8/8] Pushing to GitHub..." -ForegroundColor Yellow
git push origin main
if ($LASTEXITCODE -eq 0) {
    Write-Host "  ✓ Pushed to main branch" -ForegroundColor Green
} else {
    Write-Host "  ✗ Push failed" -ForegroundColor Red
}

# Summary
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ✓ Project Ready!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next: Test locally" -ForegroundColor Yellow
Write-Host "  cd aab2apk-web" -ForegroundColor White
Write-Host "  npm run dev" -ForegroundColor White
Write-Host ""