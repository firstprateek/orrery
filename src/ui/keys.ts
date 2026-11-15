// Shared rules for the app's single-key shortcuts ('?', '[', ']', '+', '−' in
// main.ts and the Show menu's layer toggles).

/** The bits of an event target the typing check needs (an Element, or a test stub). */
export interface KeyTarget {
  tagName?: string
  type?: string
  isContentEditable?: boolean
}

// <input> types that take no text: keys pressed while one has focus (say, right
// after clicking a Show checkbox) are meant for the app, not the control.
const NON_TEXT_INPUTS = new Set(['checkbox', 'radio', 'button', 'submit', 'reset', 'range', 'color', 'file', 'image'])

/**
 * True when a key press on `target` is typing (text fields, selects, editable
 * content), so single-key shortcuts must leave it alone.
 */
export function isTextEntry(target: EventTarget | KeyTarget | null): boolean {
  if (!target || typeof target !== 'object') return false
  const t = target as KeyTarget
  if (t.isContentEditable) return true
  const tag = t.tagName?.toUpperCase()
  if (tag === 'TEXTAREA' || tag === 'SELECT') return true
  if (tag === 'INPUT') return !NON_TEXT_INPUTS.has((t.type ?? 'text').toLowerCase())
  return false
}

/**
 * Keys main.ts already handles. A layer toggle registered on one of these
 * would fire both handlers. Lower-case, as compared against e.key.
 */
export const RESERVED_KEYS: ReadonlySet<string> = new Set(['?', '/', '[', ']', '+', '=', '-', '_', '0', ' '])

/**
 * Why `key` can't be a Show-menu shortcut, or null when it can. `taken` holds
 * the shortcuts already registered (lower-case).
 */
export function shortcutProblem(key: string, taken: ReadonlySet<string>): string | null {
  const k = key.toLowerCase()
  if ([...k].length !== 1) return `shortcut must be a single character, got '${key}'`
  if (RESERVED_KEYS.has(k)) return `shortcut '${key}' is already used by the app`
  if (taken.has(k)) return `shortcut '${key}' is already registered`
  return null
}
