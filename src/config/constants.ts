/** Astronomical unit in kilometres (IAU 2012 definition). */
export const AU_KM = 149_597_870.7

/** Convert a distance in kilometres to astronomical units. */
export const kmToAu = (km: number): number => km / AU_KM

export const DEG2RAD = Math.PI / 180
export const RAD2DEG = 180 / Math.PI

/** Julian Date of the J2000.0 epoch (2000-01-01 12:00 TT). */
export const J2000_JD = 2451545.0

/** Julian Date <-> Unix milliseconds. */
export const unixMsToJd = (ms: number): number => ms / 86_400_000 + 2_440_587.5
export const jdToUnixMs = (jd: number): number => (jd - 2_440_587.5) * 86_400_000
export const jdToDate = (jd: number): Date => new Date(jdToUnixMs(jd))
