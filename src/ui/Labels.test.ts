import { describe, it, expect } from 'vitest'
import { LABEL_BOX, collidesWithPlaced, declutterLabels, type LabelCand } from './Labels'

const cand = (id: string, x: number, y: number, tier = 0, dist = 1, pinned = false): LabelCand => ({
  id,
  x,
  y,
  tier,
  dist,
  pinned,
})

describe('declutterLabels', () => {
  it('keeps labels that do not overlap', () => {
    const shown = declutterLabels([cand('a', 0, 0), cand('b', 200, 0), cand('c', 0, 40)])
    expect(shown.map((c) => c.id).sort()).toEqual(['a', 'b', 'c'])
  })

  it('a lower tier wins a collision, whatever the distance', () => {
    const shown = declutterLabels([cand('moon', 10, 2, 1, 0.1), cand('planet', 0, 0, 0, 50)])
    expect(shown.map((c) => c.id)).toEqual(['planet'])
  })

  it('within a tier the nearer label wins', () => {
    const shown = declutterLabels([cand('far', 10, 2, 0, 9), cand('near', 0, 0, 0, 1)])
    expect(shown.map((c) => c.id)).toEqual(['near'])
  })

  it('pinned labels (focus / hover) always show', () => {
    const shown = declutterLabels([cand('planet', 0, 0, 0, 1), cand('focus', 5, 5, 1, 9, true)])
    expect(shown.map((c) => c.id)).toEqual(['planet', 'focus'])
  })

  it('uses the shared collision box on both axes', () => {
    expect(collidesWithPlaced([{ x: 0, y: 0 }], LABEL_BOX.w - 1, LABEL_BOX.h - 1)).toBe(true)
    expect(collidesWithPlaced([{ x: 0, y: 0 }], LABEL_BOX.w, 0)).toBe(false)
    expect(collidesWithPlaced([{ x: 0, y: 0 }], 0, LABEL_BOX.h)).toBe(false)
  })
})
