// Deep-linking: ?obj=<id>. Reading is used on load to fly straight to a body;
// writing is debounced and uses replaceState so it never pollutes the back-stack.

export function readObjParam(): string | null {
  return new URLSearchParams(location.search).get('obj')
}

let pending = 0
export function writeObjParam(id: string): void {
  clearTimeout(pending)
  pending = window.setTimeout(() => {
    const params = new URLSearchParams(location.search)
    params.set('obj', id)
    history.replaceState(null, '', `${location.pathname}?${params.toString()}`)
  }, 400)
}
