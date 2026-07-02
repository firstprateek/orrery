import { describe, it, expect } from 'vitest'
import { buildUrl } from './urlState'

describe('buildUrl', () => {
  it('writes obj and date', () => {
    expect(buildUrl('', '/orrery/', '', 'mars', '2026-01-01T00:00:00.000Z')).toBe(
      '/orrery/?obj=mars&date=2026-01-01T00%3A00%3A00.000Z',
    )
  })

  it('removes a stale date when playback resumes', () => {
    expect(buildUrl('?obj=earth&date=2020-01-01', '/', '', 'earth', null)).toBe('/?obj=earth')
  })

  it('preserves foreign query params and the hash', () => {
    const url = buildUrl('?utm_source=x&obj=earth', '/orrery/', '#saved', 'saturn', null)
    expect(url).toContain('utm_source=x')
    expect(url).toContain('obj=saturn')
    expect(url.endsWith('#saved')).toBe(true)
  })

  it('overwrites a previous obj instead of duplicating it', () => {
    const url = buildUrl('?obj=earth', '/', '', 'jupiter', null)
    expect(url.match(/obj=/g)).toHaveLength(1)
    expect(url).toContain('obj=jupiter')
  })

  it('writes and clears the overview scale flag', () => {
    expect(buildUrl('', '/', '', 'sun', null, true)).toContain('scale=overview')
    // leaving overview removes a stale flag
    expect(buildUrl('?obj=sun&scale=overview', '/', '', 'sun', null, false)).not.toContain('scale=')
  })
})
