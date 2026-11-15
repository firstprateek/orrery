import { describe, it, expect } from 'vitest'
import { isTextEntry, shortcutProblem } from './keys'

describe('isTextEntry', () => {
  it('treats text fields, selects and editable content as typing', () => {
    expect(isTextEntry({ tagName: 'INPUT', type: 'text' })).toBe(true)
    expect(isTextEntry({ tagName: 'input' })).toBe(true) // type defaults to text
    expect(isTextEntry({ tagName: 'INPUT', type: 'search' })).toBe(true)
    expect(isTextEntry({ tagName: 'TEXTAREA' })).toBe(true)
    expect(isTextEntry({ tagName: 'SELECT' })).toBe(true)
    expect(isTextEntry({ tagName: 'DIV', isContentEditable: true })).toBe(true)
  })

  it('lets shortcuts through from checkboxes, buttons and the page', () => {
    // A Show toggle keeps focus after a click; C / ? / [ must still work.
    expect(isTextEntry({ tagName: 'INPUT', type: 'checkbox' })).toBe(false)
    expect(isTextEntry({ tagName: 'INPUT', type: 'radio' })).toBe(false)
    expect(isTextEntry({ tagName: 'INPUT', type: 'range' })).toBe(false)
    expect(isTextEntry({ tagName: 'BUTTON' })).toBe(false)
    expect(isTextEntry({ tagName: 'BODY' })).toBe(false)
    expect(isTextEntry(null)).toBe(false)
  })
})

describe('shortcutProblem', () => {
  it('accepts a free single key, case-insensitively', () => {
    expect(shortcutProblem('c', new Set())).toBeNull()
    expect(shortcutProblem('C', new Set(['s']))).toBeNull()
  })

  it("rejects keys the app already uses, duplicates and multi-key strings", () => {
    for (const k of ['?', '[', ']', '+', '-', '=']) expect(shortcutProblem(k, new Set())).toMatch(/used by the app/)
    expect(shortcutProblem('C', new Set(['c']))).toMatch(/already registered/)
    expect(shortcutProblem('ab', new Set())).toMatch(/single character/)
    expect(shortcutProblem('', new Set())).toMatch(/single character/)
  })
})
