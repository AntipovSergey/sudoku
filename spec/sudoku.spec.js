const sudoku = require('../sudoku.js');

describe('Проверка поля', () => {
  it('Проверка возврата поля', () => {
    const board = sudoku.solve(
      '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
    );
    expect(board).toEqual(
      '145892673893176425276435819519247386762583194384961752957614238438729561621358947'
    );
  });
});

describe('Проверка решения', () => {
  it('Проверка isSolved', () => {
    const isSolv = sudoku.isSolved(
      '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
    );
    expect(isSolv).toEqual(true);
  });
  it('Проверка isSolved', () => {
    const isSolv = sudoku.isSolved(
      '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----'
    );
    expect(isSolv).toEqual(true);
  });
  it('Проверка isSolved', () => {
    const isSolv = sudoku.isSolved(
      '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--'
    );
    expect(isSolv).toEqual(true);
  });
  it('Проверка isSolved', () => {
    const isSolv = sudoku.isSolved(
      '---------------------------------------------------------------------------------'
    );
    expect(isSolv).toEqual(true);
  });
});
