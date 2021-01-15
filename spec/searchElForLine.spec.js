const {searchElForLine} = require('../searchElForLine')

let str = '12345678';

describe('searchElForLine must return', () => {
  it('should return true if num in str', () => {
    expect(searchElForLine(str, 8)).toBe(true);
  });
  it('should return false if num not in str', () => {
    expect(searchElForLine(str, 9)).toBe(false);
  });
})
