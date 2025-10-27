
## Step 4: Create docs/CONFIGURATION.md

```powershell
["](cci:4://file://":0:0-0:0)
# Configuration Guide

## Configuration File

Create a ``.aab2apk.conf`` file in your project directory.

### Example Configuration

``````bash
OUTPUT_DIR="./release"
KEYSTORE_PATH="./my-release.keystore"
KEYSTORE_PASS="my_keystore_password"
KEY_ALIAS="my_key_alias"
KEY_PASS="my_key_password"
OPTIMIZE=true
UNIVERSAL=true