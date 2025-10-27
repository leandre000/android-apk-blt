#!/usr/bin/env bash
# AAB to APK Converter Tool - Professional CLI Edition
# Created by Wilson Goal
# Version 3.0 - 2025
# Advanced Android App Bundle to APK Converter

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Version
VERSION="3.0.0"

# Default configuration
OUTPUT_DIR="./output"
KEYSTORE_PATH=""
KEYSTORE_PASS=""
KEY_ALIAS=""
KEY_PASS=""
OPTIMIZE=false
VERBOSE=false
UNIVERSAL=false

# Function to print colored messages
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to display banner
show_banner() {
    if [ -f "assets/banner.txt" ]; then
        cat assets/banner.txt
    else
        echo "====================================="
        echo "  AAB2APK Pro CLI v${VERSION}"
        echo "  Professional Android Builder"
        echo "====================================="
    fi
    echo ""
}

# Function to display help
show_help() {
    show_banner
    cat << EOF
Usage: aab2apk [OPTIONS] <input.aab>

Options:
  -o, --output DIR          Output directory (default: ./output)
  -k, --keystore PATH       Path to keystore file
  -p, --keystore-pass PASS  Keystore password
  -a, --alias ALIAS         Key alias
  -P, --key-pass PASS       Key password
  -u, --universal           Generate universal APK
  -O, --optimize            Optimize APK with zipalign
  -v, --verbose             Verbose output
  -h, --help                Show this help message
  --version                 Show version information

Examples:
  # Basic conversion
  aab2apk app.aab

  # Convert with signing
  aab2apk -k my.keystore -p pass123 -a mykey -P keypass app.aab

  # Generate universal APK with optimization
  aab2apk -u -O -o ./dist app.aab

EOF
}

# Function to check dependencies
check_dependencies() {
    local missing_deps=()
    
    if ! command -v java &> /dev/null; then
        missing_deps+=("java")
    fi
    
    if [ ${#missing_deps[@]} -ne 0 ]; then
        print_error "Missing dependencies: ${missing_deps[*]}"
        print_info "Please install Java JDK 8 or higher"
        exit 1
    fi
    
    # Check for bundletool
    if [ ! -f "./bundletool.jar" ] && [ ! -f "/usr/local/lib/bundletool.jar" ]; then
        print_warning "bundletool.jar not found. Attempting to download..."
        download_bundletool
    fi
}

# Function to download bundletool
download_bundletool() {
    local bundletool_url="https://github.com/google/bundletool/releases/latest/download/bundletool-all.jar"
    print_info "Downloading bundletool..."
    
    if command -v curl &> /dev/null; then
        curl -L -o bundletool.jar "$bundletool_url"
    elif command -v wget &> /dev/null; then
        wget -O bundletool.jar "$bundletool_url"
    else
        print_error "Neither curl nor wget found. Please install one of them."
        exit 1
    fi
    
    if [ -f "bundletool.jar" ]; then
        print_success "bundletool downloaded successfully"
    else
        print_error "Failed to download bundletool"
        exit 1
    fi
}

# Function to get bundletool path
get_bundletool_path() {
    if [ -f "./bundletool.jar" ]; then
        echo "./bundletool.jar"
    elif [ -f "/usr/local/lib/bundletool.jar" ]; then
        echo "/usr/local/lib/bundletool.jar"
    else
        print_error "bundletool.jar not found"
        exit 1
    fi
}

# Function to convert AAB to APKS
convert_aab_to_apks() {
    local input_aab="$1"
    local output_apks="$2"
    local bundletool=$(get_bundletool_path)
    
    print_info "Converting AAB to APKS..."
    
    local cmd="java -jar $bundletool build-apks --bundle=$input_aab --output=$output_apks"
    
    if [ "$UNIVERSAL" = true ]; then
        cmd="$cmd --mode=universal"
    fi
    
    if [ -n "$KEYSTORE_PATH" ]; then
        cmd="$cmd --ks=$KEYSTORE_PATH --ks-pass=pass:$KEYSTORE_PASS --ks-key-alias=$KEY_ALIAS --key-pass=pass:$KEY_PASS"
    fi
    
    if [ "$VERBOSE" = true ]; then
        print_info "Executing: $cmd"
    fi
    
    eval "$cmd"
    
    if [ $? -eq 0 ]; then
        print_success "APKS generated: $output_apks"
    else
        print_error "Failed to generate APKS"
        exit 1
    fi
}

# Function to extract APKs from APKS
extract_apks() {
    local apks_file="$1"
    local extract_dir="$2"
    
    print_info "Extracting APKs..."
    
    mkdir -p "$extract_dir"
    unzip -q -o "$apks_file" -d "$extract_dir"
    
    if [ $? -eq 0 ]; then
        print_success "APKs extracted to: $extract_dir"
    else
        print_error "Failed to extract APKs"
        exit 1
    fi
}

# Function to optimize APK
optimize_apk() {
    local apk_file="$1"
    
    if ! command -v zipalign &> /dev/null; then
        print_warning "zipalign not found. Skipping optimization."
        return
    fi
    
    print_info "Optimizing APK: $(basename $apk_file)"
    
    local temp_apk="${apk_file}.temp"
    zipalign -f -v 4 "$apk_file" "$temp_apk"
    
    if [ $? -eq 0 ]; then
        mv "$temp_apk" "$apk_file"
        print_success "APK optimized"
    else
        print_warning "Failed to optimize APK"
        rm -f "$temp_apk"
    fi
}

# Function to process APKs
process_apks() {
    local extract_dir="$1"
    
    local apk_count=0
    for apk in "$extract_dir"/*.apk; do
        if [ -f "$apk" ]; then
            apk_count=$((apk_count + 1))
            
            if [ "$OPTIMIZE" = true ]; then
                optimize_apk "$apk"
            fi
            
            print_success "APK ready: $(basename $apk) ($(du -h $apk | cut -f1))"
        fi
    done
    
    if [ $apk_count -eq 0 ]; then
        print_warning "No APK files found in extracted directory"
    else
        print_success "Total APKs processed: $apk_count"
    fi
}

# Main function
main() {
    local input_aab=""
    
    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            -h|--help)
                show_help
                exit 0
                ;;
            --version)
                echo "AAB2APK Pro CLI v${VERSION}"
                exit 0
                ;;
            -o|--output)
                OUTPUT_DIR="$2"
                shift 2
                ;;
            -k|--keystore)
                KEYSTORE_PATH="$2"
                shift 2
                ;;
            -p|--keystore-pass)
                KEYSTORE_PASS="$2"
                shift 2
                ;;
            -a|--alias)
                KEY_ALIAS="$2"
                shift 2
                ;;
            -P|--key-pass)
                KEY_PASS="$2"
                shift 2
                ;;
            -u|--universal)
                UNIVERSAL=true
                shift
                ;;
            -O|--optimize)
                OPTIMIZE=true
                shift
                ;;
            -v|--verbose)
                VERBOSE=true
                shift
                ;;
            -*)
                print_error "Unknown option: $1"
                show_help
                exit 1
                ;;
            *)
                input_aab="$1"
                shift
                ;;
        esac
    done
    
    # Validate input
    if [ -z "$input_aab" ]; then
        print_error "No input AAB file specified"
        show_help
        exit 1
    fi
    
    if [ ! -f "$input_aab" ]; then
        print_error "Input file not found: $input_aab"
        exit 1
    fi
    
    show_banner
    
    # Check dependencies
    check_dependencies
    
    # Create output directory
    mkdir -p "$OUTPUT_DIR"
    
    # Get base name without extension
    local base_name=$(basename "$input_aab" .aab)
    local output_apks="$OUTPUT_DIR/${base_name}.apks"
    local extract_dir="$OUTPUT_DIR/${base_name}"
    
    # Convert AAB to APKS
    convert_aab_to_apks "$input_aab" "$output_apks"
    
    # Extract APKs
    extract_apks "$output_apks" "$extract_dir"
    
    # Process APKs
    process_apks "$extract_dir"
    
    print_success "\nConversion completed successfully!"
    print_info "Output directory: $OUTPUT_DIR"
}

# Run main function
main "$@"
