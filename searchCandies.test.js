const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('returns all candy that starts with the search string', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
  })
  
  it('returns all candy that starts with the search string below given price', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars'])
  })

})