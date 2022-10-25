/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */

const { solve, isSolved, prettyBoard } = require('../sudoku.js');

describe('Sudoku', () => {
  const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
  const newboard1 = [
    ['1', '1', '5', '8', '4', '2', '1', '1', '1'],
    ['1', '1', '5', '8', '4', '2', '1', '1', '1'],
    ['1', '1', '5', '8', '4', '2', '1', '1', '1'],
  ];
  const newboard2 = [
    ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
    ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
    ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ];

  describe('Функция solve()', () => {
    it('Return array', () => {
      expect(Array.isArray(solve(boardString))).toBe(true);
    });

    it('Only numbers', () => {
      for (let i = 0; i < 9; i++) {
        expect(solve(boardString)[i]).not.toContain('-');
      }
    });
  });

  describe('Функция isSolved()', () => {
    it('Return true', () => {
      expect(isSolved(newboard1)).toBeTruthy();
    });

    it('Return false', () => {
      expect(isSolved(newboard2)).toBeFalsy();
    });
  });

  describe('Функция prettyBoard()', () => {
    it('Return string', () => {
      expect(typeof prettyBoard(newboard1)).toBe('string');
    });

    it('Undefined', () => {
      expect(prettyBoard(newboard1)).not.toBeUndefined();
    });
  });
});
