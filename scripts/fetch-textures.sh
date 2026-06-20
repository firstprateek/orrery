#!/usr/bin/env sh
# Vendors the Solar System Scope texture set (CC BY 4.0) into public/textures/.
# These must be served same-origin — WebGL refuses to texture from a cross-origin
# image without CORS headers, so we cannot hotlink them at runtime.
#
# Attribution (see CREDITS.md): Textures by Solar System Scope
# (solarsystemscope.com), developed by INOVE, CC BY 4.0.
set -eu

DIR="$(CDPATH= cd -- "$(dirname -- "$0")/../public/textures" 2>/dev/null && pwd || (mkdir -p "$(dirname -- "$0")/../public/textures" && cd -- "$(dirname -- "$0")/../public/textures" && pwd))"
BASE="https://www.solarsystemscope.com/textures/download"

for f in \
  2k_mercury.jpg \
  2k_venus_surface.jpg \
  2k_venus_atmosphere.jpg \
  2k_earth_daymap.jpg \
  2k_earth_nightmap.jpg \
  2k_earth_clouds.jpg \
  2k_mars.jpg \
  2k_jupiter.jpg \
  2k_saturn.jpg \
  2k_saturn_ring_alpha.png \
  2k_uranus.jpg \
  2k_neptune.jpg \
  2k_moon.jpg \
  2k_sun.jpg \
  8k_stars_milky_way.jpg
do
  echo "fetching $f"
  curl -fsSL "$BASE/$f" -o "$DIR/$f"
done

echo "done -> $DIR"
