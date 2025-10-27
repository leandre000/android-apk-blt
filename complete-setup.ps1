Write-Host "AAB2APK Pro - Complete Web App Setup" -ForegroundColor Cyan
Write-Host "This will create 200+ commits" -ForegroundColor Yellow
Write-Host ""

# Array of all files to create
$files = @()

# Add package.json
$files += @{Path="package.json"; Msg="Initialize Next.js project"; Content=@"
{
  "name": "aab2apk-pro-web",
  "version": "3.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.0.4",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "lucide-react": "0.294.0",
    "axios": "1.6.2"
  },
  "devDependencies": {
    "@types/node": "20.10.5",
    "@types/react": "18.2.45",
    "typescript": "5.3.3",
    "tailwindcss": "3.3.6",
    "autoprefixer": "10.4.16",
    "postcss": "8.4.32"
  }
}
"@}

# Create each file and commit
$count = 0
foreach ($file in $files) {
    $dir = Split-Path -Parent $file.Path
    if ($dir) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    $file.Content | Out-File -FilePath $file.Path -Encoding UTF8
    git add $file.Path
    git commit -m $file.Msg
    $count++
    Write-Host "✓ Commit $count : $($file.Msg)" -ForegroundColor Green
}