#!/bin/bash
# Script to download tool logos for the AI Artist Portfolio
# Run with: bash download-logos.sh

DIR="/Users/cheryl/Downloads/ai-artist-portfolio/client/public/images/tools"
mkdir -p "$DIR"

echo "Downloading tool logos to $DIR..."
echo "================================================"

# 1. Unreal Engine - Wikimedia Commons SVG rendered as PNG
echo "[1/18] Downloading Unreal Engine logo..."
curl -L -o "$DIR/unreal-engine.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Unreal_Engine_Logo.svg/512px-Unreal_Engine_Logo.svg.png"

# 2. Maya (Autodesk) - Wikimedia Commons
echo "[2/18] Downloading Maya logo..."
curl -L -o "$DIR/maya.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Autodesk_Maya_Logo.svg/512px-Autodesk_Maya_Logo.svg.png"

# 3. Runway ML - Wikimedia Commons
echo "[3/18] Downloading Runway logo..."
curl -L -o "$DIR/runway.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Runway_Black_Logo_SVG.svg/512px-Runway_Black_Logo_SVG.svg.png"

# 4. ComfyUI - LobeHub (open source icon set)
echo "[4/18] Downloading ComfyUI logo..."
curl -L -o "$DIR/comfyui.png" \
  "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/comfyui-color.png"

# 5. React - Wikimedia Commons
echo "[5/18] Downloading React logo..."
curl -L -o "$DIR/react.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"

# 6. Python - Wikimedia Commons
echo "[6/18] Downloading Python logo..."
curl -L -o "$DIR/python.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/512px-Python-logo-notext.svg.png"

# 7. OpenAI - Wikimedia Commons
echo "[7/18] Downloading OpenAI logo..."
curl -L -o "$DIR/openai.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png"

# 8. n8n - CDNLogo
echo "[8/18] Downloading n8n logo..."
curl -L -o "$DIR/n8n.png" \
  "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/n8n-color.png"

# 9. Slack - Wikimedia Commons
echo "[9/18] Downloading Slack logo..."
curl -L -o "$DIR/slack.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/512px-Slack_icon_2019.svg.png"

# 10. Gmail - Wikimedia Commons (2020 icon)
echo "[10/18] Downloading Gmail logo..."
curl -L -o "$DIR/gmail.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png"

# 11. Google Sheets - Wikimedia Commons (2020 logo)
echo "[11/18] Downloading Google Sheets logo..."
curl -L -o "$DIR/google-sheets.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Google_Sheets_2020_Logo.svg/512px-Google_Sheets_2020_Logo.svg.png"

# 12. Google AI Studio (Gemini) - Wikimedia Commons
echo "[12/18] Downloading Google AI Studio (Gemini) logo..."
curl -L -o "$DIR/google-ai-studio.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/512px-Google_Gemini_logo.svg.png"

# 13. JavaScript - Wikimedia Commons (unofficial standard logo)
echo "[13/18] Downloading JavaScript logo..."
curl -L -o "$DIR/javascript.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/512px-JavaScript-logo.png"

# 14. DaVinci Resolve - Wikimedia Commons
echo "[14/18] Downloading DaVinci Resolve logo..."
curl -L -o "$DIR/davinci-resolve.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/DaVinci_Resolve_17_logo.svg/512px-DaVinci_Resolve_17_logo.svg.png"

# 15. Premiere Pro - Wikimedia Commons
echo "[15/18] Downloading Premiere Pro logo..."
curl -L -o "$DIR/premiere-pro.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Adobe_Premiere_Pro_Logo.svg/512px-Adobe_Premiere_Pro_Logo.svg.png"

# 16. Illustrator - Wikimedia Commons
echo "[16/18] Downloading Illustrator logo..."
curl -L -o "$DIR/illustrator.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png"

# 17. Figma - Wikimedia Commons
echo "[17/18] Downloading Figma logo..."
curl -L -o "$DIR/figma.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/512px-Figma-logo.svg.png"

# 18. Epidemic Sound - LobeHub / alternative source
echo "[18/18] Downloading Epidemic Sound logo..."
curl -L -o "$DIR/epidemic-sound.png" \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Epidemic_Sound_Logo_-_Vertical.svg/512px-Epidemic_Sound_Logo_-_Vertical.svg.png"

echo ""
echo "================================================"
echo "Download complete! Verifying file sizes..."
echo "================================================"

# Verify all files
FAILED=0
for file in unreal-engine.png maya.png runway.png comfyui.png react.png python.png openai.png n8n.png slack.png gmail.png google-sheets.png google-ai-studio.png javascript.png davinci-resolve.png premiere-pro.png illustrator.png figma.png epidemic-sound.png; do
  if [ -f "$DIR/$file" ]; then
    SIZE=$(wc -c < "$DIR/$file")
    if [ "$SIZE" -gt 100 ]; then
      echo "  OK  $file ($SIZE bytes)"
    else
      echo "  FAIL $file (only $SIZE bytes - likely failed)"
      FAILED=$((FAILED + 1))
    fi
  else
    echo "  MISSING $file"
    FAILED=$((FAILED + 1))
  fi
done

echo ""
if [ "$FAILED" -eq 0 ]; then
  echo "All 18 logos downloaded successfully!"
else
  echo "$FAILED logo(s) may need manual download."
fi

echo ""
echo "Fallback URLs for any failed downloads:"
echo "  ComfyUI:        https://uxwing.com/comfyui-icon/ (download PNG from page)"
echo "  n8n:            https://n8n.io/brandguidelines/ (official brand page)"
echo "  Epidemic Sound:  https://corporate.epidemicsound.com/press-and-media/image-library/"
echo "  Runway:          https://runwayml.com/brand-guidelines"
