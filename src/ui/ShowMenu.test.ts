import { describe, it, expect } from 'vitest'
import { readShowPref, writeShowPref, type PrefStore } from './ShowMenu'

const memStore = (): PrefStore & { data: Record<string, string> } => {
  const data: Record<string, string> = {}
  return {
    data,
    getItem: (k) => (k in data ? data[k] : null),
    setItem: (k, v) => void (data[k] = v),
  }
}

const throwingStore: PrefStore = {
  getItem: () => {
    throw new Error('blocked')
  },
  setItem: () => {
    throw new Error('blocked')
  },
}

describe('Show menu persistence', () => {
  it('round-trips a choice under a namespaced key', () => {
    const s = memStore()
    expect(readShowPref(s, 'sky')).toBeNull()
    writeShowPref(s, 'sky', false)
    expect(s.data['orrery-show-sky']).toBe('0')
    expect(readShowPref(s, 'sky')).toBe(false)
    writeShowPref(s, 'sky', true)
    expect(readShowPref(s, 'sky')).toBe(true)
  })

  it('ignores garbage values (falls back to the default)', () => {
    const s = memStore()
    s.data['orrery-show-sky'] = 'yes'
    expect(readShowPref(s, 'sky')).toBeNull()
  })

  it('never throws when storage is blocked or missing', () => {
    expect(readShowPref(throwingStore, 'sky')).toBeNull()
    expect(() => writeShowPref(throwingStore, 'sky', true)).not.toThrow()
    expect(readShowPref(null, 'sky')).toBeNull()
    expect(() => writeShowPref(null, 'sky', true)).not.toThrow()
  })
})
