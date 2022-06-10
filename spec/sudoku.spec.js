const sudoku = require('../sudoku.js');
const createBoard = require('../simBoard');
const runner = require('../runner');
const row = require('../row');
const column = require('../column')

describe('Проверка доски', () => {
  it('Доска - массив', () => {
    expect(Array.isArray(createBoard())).toBe(true);
  });
});

let board;
beforeEach(() => {
  board = createBoard();
});

describe('Проверка по горизонталь', () => {
  it('Можно ли поставить 8? должен вернуть false', () => {
    expect(row(board, 2, 0, 1)).toBe(false);
  });
  it('Можно ли поставить 2? должен вернуть false', () => {
    expect(row(board, 2, 8, 8)).toBe(true);
  });
});

describe('Проверка по вертикали', () => {
    it('Можно ли поставить 2? должен вернуть false', () => {
      expect(column(board, 2, 0, 1)).toBe(true);
    });
    it('Можно ли поставить 2? должен вернуть false', () => {
      expect(column(board, 2, 2, 5)).toBe(false);
    });
  });
