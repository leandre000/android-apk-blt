#!/usr/bin/env bash
# Example: Generate signed APK

../builder.sh \
  --keystore ../release.keystore \
  --keystore-pass "my_keystore_password" \
  --alias "my_key_alias" \
  --key-pass "my_key_password" \
  --universal \
  --optimize \
  --output ./signed-output \
  myapp.aab
