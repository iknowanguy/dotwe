#!/bin/bash

# Script to calculate SHA-256 checksum of APK file
# Usage: ./scripts/calculate-checksum.sh path/to/your.apk

if [ $# -eq 0 ]; then
    echo "❌ Error: No APK file specified"
    echo ""
    echo "Usage: ./scripts/calculate-checksum.sh path/to/your.apk"
    echo ""
    echo "Example:"
    echo "  ./scripts/calculate-checksum.sh ~/Downloads/dotwe-early-access.apk"
    exit 1
fi

APK_FILE="$1"

if [ ! -f "$APK_FILE" ]; then
    echo "❌ Error: File not found: $APK_FILE"
    exit 1
fi

echo "📱 Calculating SHA-256 checksum for: $APK_FILE"
echo ""

# Try different commands based on OS
if command -v shasum &> /dev/null; then
    # macOS/Linux with shasum
    CHECKSUM=$(shasum -a 256 "$APK_FILE" | awk '{print $1}')
elif command -v sha256sum &> /dev/null; then
    # Linux with sha256sum
    CHECKSUM=$(sha256sum "$APK_FILE" | awk '{print $1}')
elif command -v openssl &> /dev/null; then
    # Fallback to openssl
    CHECKSUM=$(openssl dgst -sha256 "$APK_FILE" | awk '{print $2}')
else
    echo "❌ Error: No suitable SHA-256 tool found"
    echo "Please install shasum, sha256sum, or openssl"
    exit 1
fi

echo "✅ SHA-256 Checksum:"
echo ""
echo "  $CHECKSUM"
echo ""
echo "📋 Add this to your .env.local file:"
echo ""
echo "  APK_SHA256_CHECKSUM=$CHECKSUM"
echo ""

# Get file size
FILE_SIZE=$(ls -lh "$APK_FILE" | awk '{print $5}')
echo "📊 File Size: $FILE_SIZE"
echo ""
echo "✨ Done!"
