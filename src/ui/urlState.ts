// Deep-linking: ?obj=<id>&date=<ISO8601>. Reading is used on load; writing is
// debounced and uses replaceState so it never pollutes the back-stack. The date
// is only written when the clock is paused (a live-playing date would rewrite
// the URL every tick).

export function readObjParam(): string | null {
  return new URLSearchParams(location.search).get('obj')
}

export function readDateParam(): string | null {
  return new URLSearchParams(location.search).get('date')
}

/** Pure builder so the URL logic is unit-testable. Preserves foreign params + hash. */
export function buildUrl(search: string, pathname: string, hash: string, obj: string, dateIso: string | null): string {
  const params = new URLSearchParams(search)
  params.set('obj', obj)
  if (dateIso) params.set('date', dateIso)
  else params.delete('date')
  return `${pathname}?${params.toString()}${hash}`
}

let pending = 0
export function writeState(obj: string, dateIso: string | null): void {
  clearTimeout(pending)
  pending = window.setTimeout(() => {
    history.replaceState(null, '', buildUrl(location.search, location.pathname, location.hash, obj, dateIso))
  }, 400)
}
