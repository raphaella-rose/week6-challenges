const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('returns all candy that starts with the search string below given price', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
    expect(searchCandies('Ma', 2)).toEqual(['Mars'])
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst'])
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles'])

   } ) }
  )

  