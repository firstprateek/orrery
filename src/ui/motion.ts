// One shared prefers-reduced-motion query. The opening glide, travel and the
// sky guide's fades all need it; a single MediaQueryList with a change listener
// keeps them in agreement when the OS setting flips mid-session.

type Listener = (reduced: boolean) => void

const query: MediaQueryList | null =
  typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null
const listeners = new Set<Listener>()

query?.addEventListener('change', (e) => {
  for (const fn of listeners) fn(e.matches)
})

/** True when the user asked the OS for less motion. */
export function prefersReducedMotion(): boolean {
  return query?.matches ?? false
}

/** Call `fn` whenever the setting changes. Returns an unsubscribe function. */
export function onReducedMotionChange(fn: Listener): () => void {
  listeners.add(fn)
  return () => listeners.delete(fn)
}
