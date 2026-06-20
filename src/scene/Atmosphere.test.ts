import { describe, it, expect } from 'vitest'
import { ATMOSPHERES } from './Atmosphere'
import { BODY_BY_ID } from '../config/bodies'

describe('atmosphere config', () => {
  it('only references real bodies', () => {
    for (const id of Object.keys(ATMOSPHERES)) {
      expect(BODY_BY_ID[id]).toBeDefined()
    }
  })

  it('uses shells larger than the body and positive strength', () => {
    for (const cfg of Object.values(ATMOSPHERES)) {
      expect(cfg.factor).toBeGreaterThan(1)
      expect(cfg.strength).toBeGreaterThan(0)
      expect(cfg.power).toBeGreaterThan(0)
    }
  })
})
