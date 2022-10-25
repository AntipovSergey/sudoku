const { solve, isSolved, prettyBoard } = require('../sudoku.js');

describe('chek sudoku', () => {
  const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
  const newboard1 = [
    ['1', '1', '5', '8', '4', '2', '1', '1', '1'], ['1', '1', '5', '8', '4', '2', '1', '1', '1'], ['1', '1', '5', '8', '4', '2', '1', '1', '1'],
  ];
  const newboard2 = [
    ['1', '-', '5', '8', '-', '2', '-', '-', '-'], ['1', '-', '5', '8', '-', '2', '-', '-', '-'], ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ];
  describe('first function', () => {
    it('retern array', () => {
      expect(Array.isArray(solve(boardString))).toBe(true);
    });

    it('only numbers', () => {
      for (let i = 0; i < 9; i++) {
        expect(solve(boardString)[i]).not.toContain('-');
      }
    });
  });

  describe('second function', () => {
    it('return true', () => {
      expect(isSolved(newboard1)).toBeTruthy();
    });

    it('return false', () => {
      expect(isSolved(newboard2)).toBeFalsy();
    });
  });

  describe('third function', () => {
    it('return string', () => {
      expect(typeof prettyBoard(newboard1)).toBe('string');
    });

    it('length', () => {
      expect(prettyBoard(newboard1)).not.toBeUndefined();
    });
  });
});
