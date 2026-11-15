import { describe, it, expect, vi, afterEach } from 'vitest'

// help.ts keeps module-level state, so each case imports a fresh copy.
afterEach(() => {
  vi.resetModules()
})

describe('help overlay content', () => {
  it('renders exactly the overlay that main.ts used to hard-code', async () => {
    const { helpHtml } = await import('./help')
    expect(helpHtml()).toBe(
      '<div style="background:#11131c;border:1px solid #2a2f44;border-radius:14px;padding:22px 28px;color:#cdd6ff;font:15px/2 system-ui;max-width:min(92vw,420px)">' +
        '<b style="font-size:17px">Controls</b><br>' +
        'Drag — look around<br>' +
        'Scroll / pinch — zoom<br>' +
        '<code>⌘/Ctrl +</code> / <code>−</code> — zoom in / out, <code>⌘/Ctrl 0</code> — reset<br>' +
        'Click or tap a body — fly to it<br>' +
        '<code>‹</code> <code>›</code> or <code>[</code> <code>]</code> — previous / next body<br>' +
        'Overview — see the whole system (sizes exaggerated)<br>' +
        'Time bar — play, speed up, or scrub through ±100 years<br>' +
        'Share — copy a link to this exact view<br>' +
        '<span style="color:#8892b8;font-size:13px">Zooming far out switches to Overview automatically.</span>' +
        '</div>',
    )
  })

  it('inserts a feature line after a named line, or at the end', async () => {
    const { addHelpLine, helpHtml } = await import('./help')
    addHelpLine({ id: 'sky', html: '<code>C</code> — sky guide' }, 'overview')
    addHelpLine({ id: 'last', html: 'Last' })
    const html = helpHtml()
    expect(html).toContain('(sizes exaggerated)<br><code>C</code> — sky guide<br>Time bar')
    expect(html).toContain('exact view<br>Last<br><span')
  })

  it('re-adding an id replaces the line instead of duplicating it', async () => {
    const { addHelpLine, helpHtml } = await import('./help')
    addHelpLine({ id: 'x', html: 'one' })
    addHelpLine({ id: 'x', html: 'two' })
    expect(helpHtml()).not.toContain('one<br>')
    expect(helpHtml().match(/two<br>/g)).toHaveLength(1)
  })
})
