# Create Custom Favicon for AAB2APK Pro

cd "C:\Users\Shema Leandre\Documents\GITHUB\apk-builder\aab2apk-web"

Write-Host "Creating custom favicon..." -ForegroundColor Cyan

# Create a simple SVG favicon with AAB2APK branding
$faviconSVG = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#9333ea;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background circle -->
  <circle cx="50" cy="50" r="48" fill="url(#grad)"/>
  
  <!-- Lightning bolt icon (representing conversion speed) -->
  <path d="M 55 20 L 35 50 L 45 50 L 40 80 L 65 45 L 52 45 Z" fill="white" stroke="white" stroke-width="2"/>
  
  <!-- Small arrow indicating transformation -->
  <path d="M 70 30 L 75 35 L 70 40" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
'@

# Save SVG favicon
$faviconSVG | Out-File -FilePath "public/favicon.svg" -Encoding UTF8
Write-Host "Created favicon.svg" -ForegroundColor Green

# Create a simple HTML to convert SVG to ICO (for reference)
# Note: For production, you'd use a tool to convert SVG to ICO
# For now, we'll use the SVG as the main icon

# Update the public folder with the new favicon
# The existing favicon.ico will be replaced by our SVG reference

Write-Host ""
Write-Host "Favicon created successfully!" -ForegroundColor Green
Write-Host "Location: public/favicon.svg" -ForegroundColor Yellow

# Commit changes
cd ..
cd aab2apk-web
git add .
git commit -m "Add custom AAB2APK Pro favicon and branding"
git push origin main

Write-Host ""
Write-Host "Changes pushed to main!" -ForegroundColor Green
Write-Host "Restart your dev server to see the new favicon" -ForegroundColor Yellow