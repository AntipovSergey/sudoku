const strToArr = require('../strToArr');
const findEmptyCell = require('../findEmptyCell');
const {solve} = require('../sudoku');
const {isSolved} = require('../sudoku');

let board;
describe('Sudoku test', () => {
    beforeAll(() => {
       board = '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----'
    });
    it('Test for strToArr return Array', () => {
        expect(Array.isArray(strToArr(board))).toBe(true)
    });
    it('Test for strToArr Array length', () => {
        expect(strToArr(board).length).toBe(9)
    });
    it('Test for findEmptyCell', () => {
        expect(findEmptyCell(board)).toEqual([0,0])
    })
    it('Test for typeof solve', () => {
          expect(typeof(solve(board))).toBe('string')
    });
    it('Test for solve length', () => {
        expect(solve(board).length).toBe(81)
  });
  it('Test for isSolved ', () => {
    expect(isSolved(board)).toBe(true)
});
});