const {
  solve, isSolved, prettyBoard, getArrayFromString, getPuzzle,
} = require('../sudoku');

describe('Sudoku solver', () => {
  const solvedSudoku1 = solve(getArrayFromString(getPuzzle(1)));
  const solvedSudoku6 = solve(getArrayFromString(getPuzzle(6)));
  const solvedSudoku14 = solve(getArrayFromString(getPuzzle(14)));
  it('Solve 1 sudoku', () => {
    expect(solvedSudoku1[5][2]).toBe('4');
    expect(solvedSudoku1[6][4]).toBe('1');
    expect(solvedSudoku1[0][7]).toBe('7');
    expect(solvedSudoku1[8][8]).toBe('7');
  });
  it('Solve 6 sudoku', () => {
    expect(solvedSudoku6[0][0]).toBe('7');
    expect(solvedSudoku6[6][5]).toBe('6');
    expect(solvedSudoku6[4][6]).toBe('4');
    expect(solvedSudoku6[8][8]).toBe('3');
  });
  it('Solve 14 sudoku', () => {
    expect(solvedSudoku14[0][0]).toBe('1');
    expect(solvedSudoku14[2][5]).toBe('3');
    expect(solvedSudoku14[8][4]).toBe('4');
    expect(solvedSudoku14[8][8]).toBe('6');
  });
});
