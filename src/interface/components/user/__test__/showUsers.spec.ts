// sum.test.js
import { afterEach, describe, expect, test, vi } from 'vitest'
import ShowUsers from '../ShowUsers.vue'

describe('ShowUsers.vue', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  test('Should render diarist ✍', () => {
    expect(ShowUsers).toBeDefined()
  })

  test('Should count the diarist', () => {
    const spy = vi.spyOn(ShowUsers, 'render')
    expect(spy).toHaveLength(6)
  })

  // test('teste', () => {
  //   expect(ShowUsers).toBe
  // })
})
