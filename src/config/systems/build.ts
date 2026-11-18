import { AU_KM } from '../constants'
import type { BodyDef } from '../bodies'

// Small builders so each system file lists only what is actually measured.

export const SUN_RADIUS_KM = 695_700
export const EARTH_RADIUS_KM = 6371
export const JUPITER_RADIUS_KM = 69_911

/** Ecliptic north in equatorial coordinates: a spin pole square to the reference plane. */
const ECLIPTIC_POLE = { raDeg: 270, decDeg: 66.5607 }

/** Semi-major axis (AU) from Kepler's third law: a³ = M·P² (AU, solar masses, years). */
export function semiMajorAxisAu(periodDays: number, totalMassSun: number): number {
  const years = periodDays / 365.25
  return Math.cbrt(totalMassSun * years * years)
}

/**
 * Rough radius (Earth radii) from a mass (Earth masses) for a planet with no
 * measured size: rocky below ~2 M⊕ (R ∝ M^0.27), volatile-rich up to Saturn's
 * mass (R ∝ M^0.59), and about Jupiter's size above that.
 */
export function radiusFromMassEarth(massEarth: number): number {
  if (massEarth < 2) return Math.pow(massEarth, 0.27)
  if (massEarth < 130) return Math.min(11, 0.808 * Math.pow(massEarth, 0.59))
  return 11
}

export interface StarSpec {
  id: string
  name: string
  radiusSun: number
  /** Spin period (hours). Slow and unknown for most: a cosmetic default is fine. */
  rotationHours?: number
  facts: string
  /** Orbit around the binary primary (secondary star only). */
  orbit?: { aAu: number; e: number; periodDays: number; maDeg?: number; wDeg?: number }
  parent?: string
  color?: number
}

export function star(s: StarSpec): BodyDef {
  return {
    id: s.id,
    name: s.name,
    type: 'star',
    parent: s.parent ?? null,
    radiusKm: s.radiusSun * SUN_RADIUS_KM,
    axialTiltDeg: 0,
    pole: ECLIPTIC_POLE,
    rotationPeriodHours: s.rotationHours ?? 600,
    orbitSource: s.orbit ? 'kepler' : 'none',
    kepler: s.orbit
      ? {
          aKm: s.orbit.aAu * AU_KM,
          e: s.orbit.e,
          iDeg: 0,
          omDeg: 0,
          wDeg: s.orbit.wDeg ?? 0,
          maDeg: s.orbit.maDeg ?? 0,
          periodDays: s.orbit.periodDays,
        }
      : undefined,
    color: s.color ?? 0xffffff,
    facts: s.facts,
  }
}

export interface PlanetSpec {
  id: string
  name: string
  parent: string
  periodDays: number
  /** Measured semi-major axis; otherwise derived from the period and `hostMassSun`. */
  aAu?: number
  /** Measured radius, Earth radii; otherwise estimated from `massEarth`. */
  radiusEarth?: number
  massEarth?: number
  e?: number
  /** Starting phase, degrees (unknown for most planets: spread them out). */
  maDeg: number
  color: number
  facts: string
}

export function planet(p: PlanetSpec, hostMassSun: number): BodyDef {
  const aAu = p.aAu ?? semiMajorAxisAu(p.periodDays, hostMassSun)
  const rEarth = p.radiusEarth ?? radiusFromMassEarth(p.massEarth ?? 1)
  // Planets this close in are tidally locked: one face always toward the star.
  const locked = p.periodDays < 40
  return {
    id: p.id,
    name: p.name,
    type: 'planet',
    parent: p.parent,
    radiusKm: rEarth * EARTH_RADIUS_KM,
    axialTiltDeg: 0,
    pole: ECLIPTIC_POLE,
    rotationPeriodHours: locked ? p.periodDays * 24 : 10,
    faceLocked: locked,
    orbitSource: 'kepler',
    kepler: {
      aKm: aAu * AU_KM,
      e: p.e ?? 0,
      iDeg: 0,
      omDeg: 0,
      wDeg: 0,
      maDeg: p.maDeg,
      periodDays: p.periodDays,
    },
    color: p.color,
    facts: p.facts,
  }
}
