const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('returns fizz when its a multiple of 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
  })

  it('returns buzz when its a multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz')
  })

  it('returns fizzbuzz when its a multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('Fizzbuzz')
  })

  it('returns the number when its not a multiple or 3 or 5', () => {
    expect(fizzbuzz(8)).toBe(8)
  })
})