// The one 'Show' menu for optional scene layers (sky guide, spacecraft,
// heliosphere, belts…). Each layer registers a checkbox here instead of adding
// its own toolbar button: on desktop the menu is a popover under a toolbar
// button, on phones its rows sit inside the ⋯ panel. Choices persist per key.
// With nothing registered the button and section stay hidden.

const STORAGE_PREFIX = 'orrery-show-'

/** Minimal Storage surface, so persistence is testable without a DOM. */
export interface PrefStore {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

/** Stored choice for `key`, or null when none (or storage is unavailable). */
export function readShowPref(store: PrefStore | null, key: string): boolean | null {
  try {
    const v = store?.getItem(STORAGE_PREFIX + key)
    return v === '1' ? true : v === '0' ? false : null
  } catch {
    return null // private mode / blocked storage
  }
}

export function writeShowPref(store: PrefStore | null, key: string, on: boolean): void {
  try {
    store?.setItem(STORAGE_PREFIX + key, on ? '1' : '0')
  } catch {
    // storage unavailable: the choice just won't persist
  }
}

function safeLocalStorage(): PrefStore | null {
  try {
    return window.localStorage
  } catch {
    return null
  }
}

export interface ShowOptions {
  /** Single-key keyboard shortcut (no modifiers), shown beside the label. */
  shortcut?: string
  /** Tooltip for the row. */
  title?: string
}

interface Entry {
  key: string
  get: () => boolean
  set: (on: boolean) => void
  input: HTMLInputElement
}

export class ShowMenu {
  /** Toolbar trigger (desktop). Hidden while the menu has no entries. */
  readonly button: HTMLButtonElement
  /** Heading plus rows: lives in the popover (desktop) or the ⋯ panel (phones). */
  readonly section: HTMLDivElement
  private readonly popover: HTMLDivElement
  private readonly rows: HTMLDivElement
  private readonly heading: HTMLDivElement
  private readonly entries: Entry[] = []
  private readonly store = safeLocalStorage()
  private inPanel = false

  constructor(controlCss: string) {
    this.button = document.createElement('button')
    this.button.textContent = 'Show'
    this.button.title = 'Choose what to show in the sky'
    this.button.setAttribute('aria-expanded', 'false')
    this.button.style.cssText = controlCss + ';cursor:pointer;pointer-events:auto;display:none'

    this.section = document.createElement('div')
    this.section.style.cssText = 'display:none;flex-direction:column;gap:2px'
    // Only needed inside the ⋯ panel; on desktop the button already says it.
    this.heading = document.createElement('div')
    this.heading.textContent = 'Show'
    this.heading.style.cssText = 'display:none;color:#8892b8;font:13px system-ui;padding:2px 4px'
    this.rows = document.createElement('div')
    this.rows.style.cssText = 'display:flex;flex-direction:column'
    this.section.append(this.heading, this.rows)

    this.popover = document.createElement('div')
    this.popover.id = 'show-menu'
    this.popover.setAttribute('role', 'group')
    this.popover.setAttribute('aria-label', 'Show')
    this.popover.style.cssText =
      'position:fixed;display:none;flex-direction:column;gap:8px;min-width:200px;' +
      'background:rgba(12,14,22,0.92);border:1px solid #2a2f44;border-radius:12px;padding:10px;z-index:25'
    this.popover.appendChild(this.section)
    this.button.setAttribute('aria-controls', this.popover.id)
    document.body.appendChild(this.popover)

    this.button.addEventListener('click', () => this.setOpen(!this.open))
    // Any press outside the popover closes it (the toolbar button toggles).
    document.addEventListener('pointerdown', (e) => {
      const t = e.target as Node | null
      if (this.open && t && !this.popover.contains(t) && !this.button.contains(t)) this.setOpen(false)
    })
    window.addEventListener('keydown', (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if ((e.target as HTMLElement | null)?.matches?.('input, select, textarea')) return
      const key = e.key.toLowerCase()
      for (const en of this.entries) {
        if (en.input.dataset.shortcut === key) this.apply(en, !en.get())
      }
    })
  }

  /**
   * Add a toggle. `key` is the stable id its choice is persisted under; a
   * stored choice is applied straight away (through `set`), otherwise `get()`
   * is the default.
   */
  register(label: string, key: string, get: () => boolean, set: (on: boolean) => void, opts: ShowOptions = {}): void {
    const row = document.createElement('label')
    row.style.cssText =
      'display:flex;align-items:center;gap:10px;min-height:36px;padding:0 6px;color:#cdd6ff;font:15px system-ui;cursor:pointer;border-radius:8px'
    if (opts.title) row.title = opts.title
    const input = document.createElement('input')
    input.type = 'checkbox'
    input.style.cssText = 'width:18px;height:18px;margin:0;accent-color:#7d8cff;cursor:pointer'
    const text = document.createElement('span')
    text.textContent = label
    text.style.flex = '1'
    row.append(input, text)
    if (opts.shortcut) {
      input.dataset.shortcut = opts.shortcut.toLowerCase()
      const kbd = document.createElement('kbd')
      kbd.textContent = opts.shortcut.toUpperCase()
      kbd.style.cssText = 'color:#8892b8;font:12px ui-monospace,monospace;border:1px solid #2a2f44;border-radius:4px;padding:0 5px'
      row.appendChild(kbd)
    }
    this.rows.appendChild(row)

    const entry: Entry = { key, get, set, input }
    this.entries.push(entry)
    input.addEventListener('change', () => this.apply(entry, input.checked))

    const stored = readShowPref(this.store, key)
    if (stored !== null && stored !== get()) set(stored)
    input.checked = get()
    this.syncVisibility()
  }

  /** Re-read every toggle's state (call after changing one from elsewhere). */
  refresh(): void {
    for (const en of this.entries) en.input.checked = en.get()
  }

  get open(): boolean {
    return this.popover.style.display !== 'none'
  }

  setOpen(open: boolean): void {
    if (open && (this.inPanel || this.entries.length === 0)) return
    if (open) {
      const r = this.button.getBoundingClientRect()
      this.popover.style.top = `${r.bottom + 8}px`
      this.popover.style.left = `${Math.max(8, Math.min(r.left, window.innerWidth - 220))}px`
    }
    this.popover.style.display = open ? 'flex' : 'none'
    this.button.setAttribute('aria-expanded', String(open))
  }

  /**
   * Phones: move the rows into the ⋯ panel (`panel`), before its other
   * controls. Pass null to return them to the desktop popover.
   */
  dockIn(panel: HTMLElement | null): void {
    this.setOpen(false)
    this.inPanel = panel !== null
    if (panel) panel.prepend(this.section)
    else this.popover.appendChild(this.section)
    this.heading.style.display = panel ? '' : 'none'
    this.syncVisibility()
  }

  private apply(en: Entry, on: boolean): void {
    en.set(on)
    en.input.checked = en.get()
    writeShowPref(this.store, en.key, en.get())
  }

  private syncVisibility(): void {
    const any = this.entries.length > 0
    this.section.style.display = any ? 'flex' : 'none'
    this.button.style.display = any && !this.inPanel ? '' : 'none'
  }
}
