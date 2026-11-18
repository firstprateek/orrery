import type { StarSystemDef } from './types'

// One module per system, loaded only when you travel there (Vite splits each
// into its own chunk), so only the system you are in is ever held in memory.
// The Solar System is the built-in home and isn't listed here.
const LOADERS: Record<string, () => Promise<{ default: StarSystemDef }>> = {
  proxima: () => import('./proxima'),
  alphacen: () => import('./alphacen'),
  barnard: () => import('./barnard'),
  sirius: () => import('./sirius'),
  epseri: () => import('./epseri'),
  trappist1: () => import('./trappist1'),
}

/** Ids of the systems other than home that can be loaded. */
export const EXO_SYSTEM_IDS: readonly string[] = Object.keys(LOADERS)

export function isExoSystem(id: string): boolean {
  return Object.prototype.hasOwnProperty.call(LOADERS, id)
}

export async function loadSystem(id: string): Promise<StarSystemDef> {
  if (!isExoSystem(id)) throw new Error(`unknown star system: ${id}`)
  return (await LOADERS[id]()).default
}
