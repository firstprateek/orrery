import type { BodyDef } from '../bodies'

/** Procedural surface style for a body that has no texture map. */
export type SurfaceLook = 'star' | 'rocky' | 'lava' | 'ocean' | 'ice' | 'gas' | 'desert'

/**
 * Another star system, loaded on demand (one module per system, see
 * systems/index.ts) and drawn by scene/ExoSystem. Every body moves on a Kepler
 * orbit around its parent; stars are `type: 'star'`.
 *
 * Exoplanet orbits are known only partly: periods and sizes are measured, but
 * the orbit's orientation in space and where each planet is today mostly are
 * not. Orbits here lie in the scene's reference plane and start at spread-out
 * phases, so the layout is illustrative while the periods, distances and sizes
 * are real (sizes of non-transiting planets are estimated from their mass).
 */
export interface StarSystemDef {
  /** Matches the sky catalogue id (config/starCatalog.ts). */
  id: string
  name: string
  /** Bodies, parents before children. The first star is the primary. */
  bodies: BodyDef[]
  /** Overview centre and the target of the Overview button. */
  primaryId: string
  /** Where the camera settles on arrival after the overview. */
  defaultFocusId: string
  /** Effective temperature per star id, kelvin (colour and light). */
  starTempK: Record<string, number>
  /** Surface style per body id. */
  looks: Record<string, SurfaceLook>
  /**
   * A binary pair: `secondary` carries Kepler elements relative to `primary`,
   * and both are placed about their barycentre (the system origin).
   */
  binary?: { primary: string; secondary: string; secondaryMassFraction: number }
}
