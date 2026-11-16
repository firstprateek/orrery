import type { Vec3 } from './vec3'

/** Default swing from the sunward direction: a lit limb plus some night side. */
export const DEFAULT_SIDE = 0.55

/**
 * Height above the ecliptic of the arrival viewpoint (z per unit of horizontal
 * distance). The camera's up is ecliptic north, so this sets how far the
 * orbital plane is tilted towards the viewer: 0.5 (~27°) shows a planet's
 * poles and Saturn's rings opened out. The Sun, i.e. the whole system, gets a
 * higher ~35° view so the orbits read as ellipses rather than lines.
 */
export const ARRIVAL_LIFT = 0.5
export const SYSTEM_LIFT = 0.7

/**
 * Direction (focus-relative, unnormalised) to view a body at heliocentric
 * position `p` from. `side` swings the viewpoint round from the Sun's
 * direction (radians about ecliptic north) so a planet shows a lit limb and
 * some night side instead of a flat, fully lit disc; the lift raises it above
 * the ecliptic. The Sun itself has no sunward direction, so it gets a fixed
 * one (+X, the vernal equinox, before the swing).
 */
export function arrivalDirFrom(p: Vec3, side = DEFAULT_SIDE): Vec3 {
  const len = Math.hypot(p.x, p.y, p.z)
  const sunward =
    len < 1e-9 ? { x: 1, y: 0, z: SYSTEM_LIFT } : { x: -p.x / len, y: -p.y / len, z: -p.z / len + ARRIVAL_LIFT }
  const cs = Math.cos(side)
  const sn = Math.sin(side)
  return { x: sunward.x * cs - sunward.y * sn, y: sunward.x * sn + sunward.y * cs, z: sunward.z }
}
