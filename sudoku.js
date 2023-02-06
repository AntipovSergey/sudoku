/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function i2rc(index) {
  return { row: Math.floor(index / 9), column: index % 9 };
}

function rc2i(row, column) {
  return row * 9 + column;
}

function square(row, column) {
  return { row: Math.floor(row / 3) * 3, column: Math.floor(column / 3) * 3 };
}

function solve(boardString) {
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
const checkRow = (board) => {
  for (let i = 0; i < board.length; i += 9) {
    const expectRow = new Set();
    for (let q = i; q < (i + 9); q++) {
      expectRow.add(board[q]);
    }
    if (expectRow.size !== 9) return false;
  }
  return true;
};

const checkColumn = (board) => {
  for (let i = 0; i < 9; i++) {
    const expectCol = new Set();
    const position = i2rc(i);
    for (let r = 0; r < 9; r++) {
      const index = rc2i(r, position.column);
      expectCol.add(board[index]);
    }
    if (expectCol.size !== 9) return false;
  }
  return true;
};

const checkSquare = (board) => {
  for (let i = 0; i < 63; i += 3) {
    if (i === 9) {
      i = 27;
    }
    if (i === 36) {
      i = 54;
    }
    const position = i2rc(i);
    const firstRow = Math.floor(position.row / 3) * 3;
    const firstColumn = Math.floor(position.column / 3) * 3;
    const curSquare = new Set();
    for (let r = firstRow; r < (firstRow + 3); r++) {
      for (let c = firstColumn; c < (firstColumn + 3); c++) {
        curSquare.add(board[rc2i(r, c)]);
      }
    }
    if (curSquare.size !== 9) return false;
  }
  return true;
};

function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i].indexOf('-') !== -1) return false;
  }

  const isCorrectRow = checkRow(board);
  const isCorrectColumn = checkColumn(board);
  const isCorrectSquare = checkSquare(board);

  return isCorrectRow && isCorrectColumn && isCorrectSquare;
}

console.log(isSolved('315827946468915732729346518946538127571692483832174695693251874257489361184763259'));
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
