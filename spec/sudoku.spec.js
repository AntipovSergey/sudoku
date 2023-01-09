const {
  sudoku, solve,
  isSolved,
  prettyBoard,
} = require('../sudoku');

describe('S U D O K U   T E S T S', () => {
  const str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
  describe('Sudoku.js', () => {
    it('Function solve() should take and return the string', () => {
      expect(typeof solve(str)).toBe('string');
    });
  });
});
