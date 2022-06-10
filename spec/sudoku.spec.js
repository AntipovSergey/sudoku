const sudoku = require('../sudoku.js');
const createBoard = require('../simBoard');

describe('Проверка доски', () => {
  it('Доска - массив', () => {
    expect(Array.isArray(createBoard())).toBe(true);
  });
});

beforeEach(() => {
  const board = createBoard();
});

describe('Проверка по строке');
