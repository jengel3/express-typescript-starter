import { start, stop } from '../../src/server'

beforeAll(() => {
  // start express server
  start()
})

afterAll(() => {
  // close express server
  stop()
})

describe('Example Feature Test', () => {
  it('should equal true', async () => {
    expect(true).toEqual(true)
  })
})
