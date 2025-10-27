
## Step 5: Create docs/FAQ.md

```powershell
["](cci:4://file://":0:0-0:0)
# Frequently Asked Questions

## General Questions

### What is AAB2APK Pro CLI?
A professional command-line tool for converting Android App Bundles (AAB) to APK files.

### Why do I need this tool?
Google Play requires AAB format, but for testing or distribution outside Play Store, you need APK files.

### Is this tool free?
Yes, it's open source under MIT License.

## Technical Questions

### Do I need Android Studio?
No, you only need Java JDK 8 or higher.

### Can I sign APKs with this tool?
Yes, use the signing options.

### What's the difference between regular and universal APK?
- Regular: Multiple APKs for different device configurations
- Universal: Single APK that works on all devices

## Troubleshooting

### "Java not found" error
Install Java JDK 8 or higher from [https://adoptium.net/](https://adoptium.net/)

### "bundletool.jar not found" error
The tool will auto-download it.

### "Permission denied" error
On Linux/Mac: Run ``chmod +x builder.sh``
"@ | Out-File -FilePath "docs/FAQ.md" -Encoding UTF8