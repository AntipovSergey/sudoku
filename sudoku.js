const SUDOKU_SIZE = 9;
const SQUARE_SIZE = 3;
const EMPTY_CELL_VALUE = '-';

const parseBoard = (boardString) => {
  const board = [];
  const cells = boardString.split('');

  for (let i = 0; i < cells.length; i += SUDOKU_SIZE) {
    board.push(cells.slice(i, i + SUDOKU_SIZE));
  }

  return board;
};

function validateRow({ board, emptyCellX, potentialNumber }) {
  for (let col = 0; col < SUDOKU_SIZE; col++) {
    if (board[emptyCellX][col] === potentialNumber) {
      return false;
    }
  }
  return true;
}

function validateColumn({ board, emptyCellY, potentialNumber }) {
  for (let row = 0; row < SUDOKU_SIZE; row++) {
    if (board[row][emptyCellY] === potentialNumber) {
      return false;
    }
  }
  return true;
}

function validateSubgrid({ board, emptyCellX, emptyCellY, potentialNumber }) {
  const subgridRow = Math.floor(emptyCellX / SQUARE_SIZE) * SQUARE_SIZE;
  const subgridCol = Math.floor(emptyCellY / SQUARE_SIZE) * SQUARE_SIZE;
  for (let row = subgridRow; row < subgridRow + SQUARE_SIZE; row++) {
    for (let col = subgridCol; col < subgridCol + SQUARE_SIZE; col++) {
      if (board[row][col] === potentialNumber) {
        return false;
      }
    }
  }
  return true;
}

function validatePotentialPlacement({
  board,
  emptyCellX,
  emptyCellY,
  potentialNumber,
}) {
  return (
    validateRow({ board, emptyCellX, potentialNumber }) &&
    validateColumn({ board, emptyCellY, potentialNumber }) &&
    validateSubgrid({ board, emptyCellX, emptyCellY, potentialNumber })
  );
}

function findEmptyCell(board) {
  for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
    for (let colIdx = 0; colIdx < board[rowIdx].length; colIdx++) {
      if (board[rowIdx][colIdx] === EMPTY_CELL_VALUE) {
        return [rowIdx, colIdx];
      }
    }
  }
  return null;
}

function solveBoard(board) {
  const emptyCell = findEmptyCell(board);

  // Если не найдена пустая клетка, то это означает, что мы решили судоку
  if (!emptyCell) {
    return true;
  }

  const [emptyCellX, emptyCellY] = emptyCell;

  // Пробуем вставить число в пустую клетку
  for (
    let rawPotentialNumber = 1;
    rawPotentialNumber <= 9;
    rawPotentialNumber++
  ) {
    const potentialNumber = String(rawPotentialNumber);

    const isValidPotentialPlacement = validatePotentialPlacement({
      board,
      emptyCellX,
      emptyCellY,
      potentialNumber,
    });

    if (isValidPotentialPlacement) {
      board[emptyCellX][emptyCellY] = potentialNumber;
      if (solveBoard(board)) {
        return true;
      }
      // Если с этим числом не решается, то отменяем вставку числа
      board[emptyCellX][emptyCellY] = EMPTY_CELL_VALUE;
    }
  }
  // Если не можем найти правильное место, то головоломка не может быть решена с этим числом
  return false;
}

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const board = parseBoard(boardString);
  solveBoard(board);
  return board;
}

function validateSudokuBoard(board) {
  // Проверяем столбцы
  for (let i = 0; i < SUDOKU_SIZE; i++) {
    const row = new Set(board[i]);
    if (row.size !== SUDOKU_SIZE) {
      return false;
    }
  }

  // Проверяем колонки
  for (let i = 0; i < SUDOKU_SIZE; i++) {
    const column = new Set();
    for (let j = 0; j < SUDOKU_SIZE; j++) {
      column.add(board[j][i]);
    }
    if (column.size !== SUDOKU_SIZE) {
      return false;
    }
  }

  // Итерируем по квадратам
  for (let squareX = 0; squareX < SUDOKU_SIZE; squareX += 3) {
    for (let squareY = 0; squareY < SUDOKU_SIZE; squareY += 3) {
      const square = new Set();
      // Итерируем по клеткам квадратов
      for (let row = squareX; row < squareX + 3; row++) {
        for (let col = squareY; col < squareY + 3; col++) {
          square.add(board[row][col]);
        }
      }
      if (square.size !== SUDOKU_SIZE) {
        return false;
      }
    }
  }

  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  return validateSudokuBoard(board);
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  console.table(board);
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
