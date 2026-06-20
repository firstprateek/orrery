// Blackbody colour temperature → linear-ish sRGB, via the widely-used Tanner
// Helland approximation. Hot stars trend blue, cool stars red, ~6500 K ≈ white.
// Returns each channel in 0..1.

const clamp01 = (v: number) => (v < 0 ? 0 : v > 255 ? 255 : v) / 255

export function tempToRgb(kelvin: number): [number, number, number] {
  const t = Math.max(1000, Math.min(40000, kelvin)) / 100

  let r: number
  if (t <= 66) r = 255
  else r = 329.698727446 * Math.pow(t - 60, -0.1332047592)

  let g: number
  if (t <= 66) g = 99.4708025861 * Math.log(t) - 161.1195681661
  else g = 288.1221695283 * Math.pow(t - 60, -0.0755148492)

  let b: number
  if (t >= 66) b = 255
  else if (t <= 19) b = 0
  else b = 138.5177312231 * Math.log(t - 10) - 305.0447927307

  return [clamp01(r), clamp01(g), clamp01(b)]
}
