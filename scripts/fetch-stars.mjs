// Bakes the Yale Bright Star Catalog (~9,000 naked-eye stars) into a compact
// binary the app loads at runtime: Float32Array of [raRad, decRad, magnitude,
// tempKelvin] per star. The catalog data is public; we vendor a derived binary
// so the app is self-contained (no runtime cross-origin fetch).
import { writeFileSync, mkdirSync } from 'node:fs'

const URL = 'https://raw.githubusercontent.com/brettonw/YaleBrightStarCatalog/master/bsc5-short.json'

const res = await fetch(URL)
if (!res.ok) throw new Error(`fetch failed: ${res.status}`)
const data = await res.json()

const out = []
let kept = 0
for (const e of data) {
  if (!e.RA || !e.Dec || !e.V) continue
  const ra = e.RA.match(/(\d+)\D+(\d+)\D+([\d.]+)/)
  const dec = e.Dec.match(/([+-]?)(\d+)\D+(\d+)\D+(\d+)/)
  if (!ra || !dec) continue
  const raHours = +ra[1] + +ra[2] / 60 + +ra[3] / 3600
  const raRad = (raHours * 15 * Math.PI) / 180
  const sign = dec[1] === '-' ? -1 : 1
  const decDeg = sign * (+dec[2] + +dec[3] / 60 + +dec[4] / 3600)
  const decRad = (decDeg * Math.PI) / 180
  const mag = parseFloat(e.V)
  const temp = e.K ? parseFloat(e.K) : 6000
  if (![raRad, decRad, mag].every(Number.isFinite)) continue
  out.push(raRad, decRad, mag, Number.isFinite(temp) ? temp : 6000)
  kept++
}

const buf = Float32Array.from(out)
mkdirSync('public/data', { recursive: true })
writeFileSync('public/data/stars.bin', Buffer.from(buf.buffer))
console.log(`stars: ${kept}, bytes: ${buf.byteLength}`)
