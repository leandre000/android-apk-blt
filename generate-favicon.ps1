# Generate Custom Favicon for AAB2APK Pro

cd "C:\Users\Shema Leandre\Documents\GITHUB\apk-builder\aab2apk-web"

Write-Host "Generating custom favicon..." -ForegroundColor Cyan

# Create a Python script to generate the favicon using PIL
$pythonScript = @'
from PIL import Image, ImageDraw, ImageFont
import os

def create_favicon():
    # Create different sizes
    sizes = [16, 32, 48, 64, 128, 256, 512]
    
    for size in sizes:
        # Create image with gradient background
        img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Draw gradient circle background
        for i in range(size):
            for j in range(size):
                # Calculate distance from center
                dx = i - size/2
                dy = j - size/2
                distance = (dx*dx + dy*dy) ** 0.5
                
                if distance < size/2 - 2:
                    # Gradient from blue to purple
                    ratio = distance / (size/2)
                    r = int(37 + (147 - 37) * ratio)
                    g = int(99 + (51 - 99) * ratio)
                    b = int(235 + (234 - 235) * ratio)
                    img.putpixel((i, j), (r, g, b, 255))
        
        # Draw lightning bolt
        bolt_points = [
            (size * 0.55, size * 0.2),
            (size * 0.35, size * 0.5),
            (size * 0.45, size * 0.5),
            (size * 0.4, size * 0.8),
            (size * 0.65, size * 0.45),
            (size * 0.52, size * 0.45),
        ]
        
        draw.polygon(bolt_points, fill=(255, 255, 255, 255))
        
        # Save
        if size == 16 or size == 32 or size == 48:
            img.save(f'public/favicon-{size}x{size}.png')
        
        if size == 512:
            img.save('public/icon-512.png')
            img.save('public/apple-touch-icon.png')
        
        if size == 192:
            img.save('public/icon-192.png')
    
    # Create ICO file with multiple sizes
    images = []
    for size in [16, 32, 48]:
        img = Image.open(f'public/favicon-{size}x{size}.png')
        images.append(img)
    
    images[0].save('public/favicon.ico', format='ICO', sizes=[(16,16), (32,32), (48,48)])
    
    print("Favicons generated successfully!")

if __name__ == '__main__':
    create_favicon()
'@

# Save Python script
$pythonScript | Out-File -FilePath "generate_favicon.py" -Encoding UTF8

# Try to run with Python
try {
    Write-Host "Attempting to generate favicon with Python..." -ForegroundColor Yellow
    python generate_favicon.py
    Write-Host "Favicon generated with Python!" -ForegroundColor Green
} catch {
    Write-Host "Python not available, using alternative method..." -ForegroundColor Yellow
    
    # Alternative: Create a simple HTML canvas-based generator
    $htmlGenerator = @'
<!DOCTYPE html>
<html>
<head>
    <title>Favicon Generator</title>
</head>
<body>
    <canvas id="canvas" width="512" height="512"></canvas>
    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 512, 512);
        gradient.addColorStop(0, '#2563eb');
        gradient.addColorStop(1, '#9333ea');
        
        // Draw circle
        ctx.beginPath();
        ctx.arc(256, 256, 240, 0, 2 * Math.PI);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw lightning bolt
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(280, 100);
        ctx.lineTo(180, 256);
        ctx.lineTo(230, 256);
        ctx.lineTo(200, 410);
        ctx.lineTo(330, 230);
        ctx.lineTo(265, 230);
        ctx.closePath();
        ctx.fill();
        
        // Download
        canvas.toBlob(function(blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'favicon.png';
            a.click();
        });
    </script>
</body>
</html>
'@
    
    $htmlGenerator | Out-File -FilePath "public/favicon-generator.html" -Encoding UTF8
    Write-Host "Created HTML favicon generator at public/favicon-generator.html" -ForegroundColor Yellow
    Write-Host "Open it in a browser to download the favicon" -ForegroundColor Yellow
}

# Create a better SVG favicon as fallback
$svgFavicon = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#9333ea;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Background circle with gradient -->
  <circle cx="256" cy="256" r="240" fill="url(#grad)" filter="url(#shadow)"/>
  
  <!-- Lightning bolt -->
  <path d="M 280 100 L 180 256 L 230 256 L 200 410 L 330 230 L 265 230 Z" 
        fill="white" 
        stroke="white" 
        stroke-width="4"
        stroke-linejoin="round"/>
  
  <!-- Small accent -->
  <circle cx="350" cy="150" r="12" fill="white" opacity="0.6"/>
  <circle cx="370" cy="170" r="8" fill="white" opacity="0.4"/>
</svg>
'@

$svgFavicon | Out-File -FilePath "public/favicon.svg" -Encoding UTF8
Write-Host "Created enhanced SVG favicon" -ForegroundColor Green

# Create web manifest for PWA
$manifest = @'
{
  "name": "AAB2APK Pro",
  "short_name": "AAB2APK",
  "description": "Professional Android App Bundle to APK Converter",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
'@

$manifest | Out-File -FilePath "public/manifest.json" -Encoding UTF8
Write-Host "Created PWA manifest" -ForegroundColor Green

Write-Host ""
Write-Host "Favicon files created!" -ForegroundColor Green
Write-Host "Files:" -ForegroundColor Cyan
Write-Host "  - public/favicon.svg (Enhanced SVG)" -ForegroundColor Yellow
Write-Host "  - public/manifest.json (PWA support)" -ForegroundColor Yellow
Write-Host ""
Write-Host "Note: For best results, install Pillow and run:" -ForegroundColor Cyan
Write-Host "  pip install Pillow" -ForegroundColor Yellow
Write-Host "  python generate_favicon.py" -ForegroundColor Yellow

