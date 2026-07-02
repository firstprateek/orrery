#!/usr/bin/env sh
# Vendors moon + Pluto texture maps into public/textures/ (renamed to canonical
# 2k_<body>.jpg). Sources & licenses (see CREDITS.md):
# - Io/Europa/Ganymede/Callisto: Björn Jónsson (bjj.mmedia.is) — attribution required
# - Titan/Triton: USGS Astrogeology (public domain)
# - Pluto: NASA/JHUAPL/SwRI via Wikimedia (public domain)
# - Phobos/Rhea/Iapetus/Titania/Oberon: NASA/JPL/USGS via Wikimedia (public domain)
# Wikimedia requires a descriptive User-Agent for scripted downloads.
set -eu
DIR="$(cd -- "$(dirname -- "$0")/.." && pwd)/public/textures"
UA="orrery-texture-fetch/1.0 (github.com/firstprateek/orrery)"

get() { curl -fsSL -A "$UA" "$2" -o "$DIR/$1" && echo "ok  $1"; }

get 2k_io.jpg        "https://bjj.mmedia.is/data/io/io.jpg"
get 2k_europa.jpg    "https://bjj.mmedia.is/data/europa/europa.jpg"
get 2k_ganymede.jpg  "https://bjj.mmedia.is/data/ganymede/ganymede.jpg"
get 2k_callisto.jpg  "https://bjj.mmedia.is/data/callisto/callisto.jpg"
get 2k_titan.jpg     "https://astrogeology.usgs.gov/ckan/dataset/8ee17e4e-26c6-4e22-9c23-bc9a4c7ed35e/resource/c3f3006c-3174-4716-920f-44f5dc749a4a/download/titan_iss_p19658_mosaic_global_1024.jpg"
get 2k_triton.jpg    "https://astrogeology.usgs.gov/ckan/dataset/445b4c39-e87a-4e4d-88a8-e48d8e755c5c/resource/de0ba9f1-303e-4e5f-a99a-3201fba9a764/download/triton_voyager2_clrmosaic_1024.jpg"
get 2k_pluto.jpg     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pluto_color_mapmosaic.jpg/1920px-Pluto_color_mapmosaic.jpg"
get 2k_phobos.jpg    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Phobos_Viking_Mosaic_DLRcontrol_7200.jpg/1920px-Phobos_Viking_Mosaic_DLRcontrol_7200.jpg"
get 2k_rhea.jpg      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Rhea_Color_Map.jpg/1920px-Rhea_Color_Map.jpg"
get 2k_iapetus.jpg   "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Iapetus_Color_Map.jpg/1920px-Iapetus_Color_Map.jpg"
get 2k_titania.jpg   "https://upload.wikimedia.org/wikipedia/commons/8/85/Titania_map_JPL_USGS.jpg"
get 2k_oberon.jpg    "https://upload.wikimedia.org/wikipedia/commons/1/1d/Oberon_map_JPL_USGS.jpg"

echo "done -> $DIR"
