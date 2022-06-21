const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('returns all candy that starts with the search string', () => {
    expect(searchCandies('Ma')).toBe(['Mars', 'Malteasers'])
  })
})