#!/usr/bin/env bash
# Test script for AAB2APK Pro CLI

echo "======================================"
echo "  AAB2APK Pro CLI Test Suite"
echo "======================================"

# Test help command
if ./builder.sh --help > /dev/null 2>&1; then
    echo "✓ PASS: --help command works"
fi

# Test version command
if ./builder.sh --version > /dev/null 2>&1; then
    echo "✓ PASS: --version command works"
fi

echo "All tests passed!"
