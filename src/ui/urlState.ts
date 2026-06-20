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

let pending = 0
export function writeState(obj: string, dateIso: string | null): void {
  clearTimeout(pending)
  pending = window.setTimeout(() => {
    const params = new URLSearchParams()
    params.set('obj', obj)
    if (dateIso) params.set('date', dateIso)
    history.replaceState(null, '', `${location.pathname}?${params.toString()}`)
  }, 400)
}
