// The controls help overlay's content, as data. Features add their own line
// with addHelpLine() instead of editing one long HTML string in main.ts.
// Lines are trusted, static HTML (they may use <code> for keys).

export interface HelpLine {
  /** Stable id, so a feature can place its line after another one. */
  id: string
  html: string
}

const lines: HelpLine[] = [
  { id: 'drag', html: 'Drag — look around' },
  { id: 'zoom', html: 'Scroll / pinch — zoom' },
  { id: 'zoom-keys', html: '<code>⌘/Ctrl +</code> / <code>−</code> — zoom in / out, <code>⌘/Ctrl 0</code> — reset' },
  { id: 'fly', html: 'Click or tap a body — fly to it' },
  { id: 'step', html: '<code>‹</code> <code>›</code> or <code>[</code> <code>]</code> — previous / next body' },
  { id: 'overview', html: 'Overview — see the whole system (sizes exaggerated)' },
  { id: 'time', html: 'Time bar — play, speed up, or scrub through ±100 years' },
  { id: 'share', html: 'Share — copy a link to this exact view' },
]

/** Small print under the list. */
const notes: string[] = ['Zooming far out switches to Overview automatically.']

/** Add a line, after the line with id `after` (or at the end). Re-adding an id replaces it. */
export function addHelpLine(line: HelpLine, after?: string): void {
  const existing = lines.findIndex((l) => l.id === line.id)
  if (existing >= 0) lines.splice(existing, 1)
  const i = after === undefined ? -1 : lines.findIndex((l) => l.id === after)
  if (i >= 0) lines.splice(i + 1, 0, line)
  else lines.push(line)
}

export function addHelpNote(text: string): void {
  notes.push(text)
}

/** The overlay card's HTML. */
export function helpHtml(): string {
  return (
    '<div style="background:#11131c;border:1px solid #2a2f44;border-radius:14px;padding:22px 28px;color:#cdd6ff;font:15px/2 system-ui;max-width:min(92vw,420px)">' +
    '<b style="font-size:17px">Controls</b><br>' +
    lines.map((l) => l.html + '<br>').join('') +
    (notes.length ? `<span style="color:#8892b8;font-size:13px">${notes.join('<br>')}</span>` : '') +
    '</div>'
  )
}
