#!/usr/bin/env bash
# Example: Batch process multiple AAB files

for aab in *.aab; do
  echo "Processing $aab..."
  ../builder.sh --universal --optimize --output "./output/$(basename "$aab" .aab)" "$aab"
done
