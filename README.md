# 🚀 AAB2APK Pro CLI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)](https://github.com/leandre000/android-apk-blt)
[![Platform](https://img.shields.io/badge/platform-Linux%20%7C%20macOS%20%7C%20Windows-lightgrey.svg)](https://github.com/leandre000/android-apk-blt)

Professional Android App Bundle (AAB) to APK converter with advanced features. The ultimate dev tool for Android developers who need to convert, sign, and optimize APK files efficiently.

## ✨ Features

- 🔄 **AAB to APK Conversion** - Convert Android App Bundles to APK files
- 🔐 **APK Signing** - Sign APKs with your keystore
- ⚡ **Optimization** - Zipalign APKs for better performance
- 📦 **Universal APK** - Generate universal APKs for all architectures
- 🎨 **Colored Output** - Beautiful CLI with colored status messages
- 🔧 **Auto-Download** - Automatically downloads bundletool if not found
- 📊 **Verbose Mode** - Detailed logging for debugging
- 🚀 **Fast & Reliable** - Built with bash for maximum performance

## 📋 Requirements

- Java JDK 8 or higher
- Bash shell (Linux, macOS, WSL, Git Bash)
- Internet connection (for first-time bundletool download)

Optional:
- Android SDK (for zipalign optimization)
- curl or wget (for downloading bundletool)

## 🔧 Installation

### Quick Install

```bash
# Clone the repository
git clone https://github.com/leandre000/android-apk-blt.git
cd android-apk-blt

# Run the installer
chmod +x install.sh
./install.sh
```

### Manual Install

```bash
# Make the script executable
chmod +x builder.sh

# Copy to your PATH (optional)
sudo cp builder.sh /usr/local/bin/aab2apk
```

## 🚀 Usage

### Basic Conversion

```bash
# Convert AAB to APK
aab2apk app.aab
```

### Advanced Usage

```bash
# Convert with custom output directory
aab2apk -o ./dist app.aab

# Generate universal APK
aab2apk -u app.aab

# Convert and optimize
aab2apk -O app.aab

# Sign APK with keystore
aab2apk -k my.keystore -p keystorepass -a myalias -P keypass app.aab

# All options combined
aab2apk -u -O -o ./dist -k my.keystore -p pass123 -a mykey -P keypass -v app.aab
```

### Command Line Options

```
Options:
  -o, --output DIR          Output directory (default: ./output)
  -k, --keystore PATH       Path to keystore file
  -p, --keystore-pass PASS  Keystore password
  -a, --alias ALIAS         Key alias
  -P, --key-pass PASS       Key password
  -u, --universal           Generate universal APK
  -O, --optimize            Optimize APK with zipalign
  -v, --verbose             Verbose output
  -h, --help                Show help message
  --version                 Show version information
```

## 📖 Examples

### Example 1: Basic Conversion

```bash
./builder.sh myapp.aab
```

Output:
```
===================================
  AAB2APK Pro CLI v3.0.0
  Professional Android Builder
===================================

[INFO] Converting AAB to APKS...
[SUCCESS] APKS generated: ./output/myapp.apks
[INFO] Extracting APKs...
[SUCCESS] APKs extracted to: ./output/myapp
[SUCCESS] APK ready: base-master.apk (15M)
[SUCCESS] Total APKs processed: 1
[SUCCESS] Conversion completed successfully!
```

### Example 2: Production Build with Signing

```bash
./builder.sh \
  -k release.keystore \
  -p mykeystorepass \
  -a releasekey \
  -P mykeypass \
  -u \
  -O \
  -o ./release \
  myapp.aab
```

### Example 3: Batch Processing

```bash
# Process multiple AAB files
for aab in *.aab; do
  ./builder.sh -u -O -o "./output/$(basename $aab .aab)" "$aab"
done
```

## 🛠️ Configuration

You can create a `.aab2apk.conf` file in your project directory:

```bash
OUTPUT_DIR="./dist"
KEYSTORE_PATH="./release.keystore"
KEYSTORE_PASS="your_keystore_password"
KEY_ALIAS="your_key_alias"
KEY_PASS="your_key_password"
OPTIMIZE=true
UNIVERSAL=true
```

## 🔍 Troubleshooting

### Java not found

```bash
# Install Java on Ubuntu/Debian
sudo apt-get install openjdk-11-jdk

# Install Java on macOS
brew install openjdk@11
```

### Bundletool download fails

```bash
# Manually download bundletool
wget https://github.com/google/bundletool/releases/latest/download/bundletool-all.jar -O bundletool.jar
```

### Permission denied

```bash
# Make the script executable
chmod +x builder.sh
```

## 📚 Documentation

For more detailed documentation, see:
- [API Documentation](docs/API.md)
- [Configuration Guide](docs/CONFIGURATION.md)
- [Examples](examples/)
- [FAQ](docs/FAQ.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Wilson Goal**
- GitHub: [@leandre000](https://github.com/leandre000)

## 🙏 Acknowledgments

- Google's [bundletool](https://github.com/google/bundletool) for AAB processing
- Android SDK team for build tools
- All contributors who help improve this tool

## 📊 Project Status

This project is actively maintained. Feel free to open issues or submit pull requests.

---

⭐ If you find this tool useful, please consider giving it a star on GitHub!
