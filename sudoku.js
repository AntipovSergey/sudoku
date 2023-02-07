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

function checkOption(index, board) {
  const rc = i2rc(index);
  let options = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let r = 0; r < 9; r++) {
    if (rc.row === r) {
      continue;
    }
    const i = rc2i(r, rc.column);
    if (options.includes(board[i])) {
      options = options.filter((val) => val !== board[i]);
    }
  }
  for (let c = 0; c < 9; c++) {
    if (rc.column === c) {
      continue;
    }
    const i = rc2i(rc.row, c);
    if (options.includes(board[i])) {
      options = options.filter((val) => val !== board[i]);
    }
  }
  const checkedSquare = square(rc.row, rc.column);
  for (let r = checkedSquare.row; r < checkedSquare.row + 3; r++) {
    for (let c = checkedSquare.column; c < checkedSquare.column + 3; c++) {
      const i = rc2i(r, c);
      if (rc2i(rc.row, rc.column) === i) {
        continue;
      }

      if (options.includes(board[i])) {
        options = options.filter((val) => val !== board[i]);
      }
    }
  }
  return options;
}

function solver(index, board) {
  while (index < 81 && board[index] !== '-') index++;
  if (index === 81) {
    return true;
  }
  const options = checkOption(index, board);

  for (let val = 0; val < options.length; val++) {
    board[index] = options[val];
    if (solver(index + 1, board)) {
      return board;
    }
  }
  board[index] = '-';
  return false;
}

function solve(boardString) {
  const board = [...boardString];
  const result = solver(0, board);
  return result.join('');
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
const checkRow = (board) => {
  for (let i = 0; i < board.length; i += 9) {
    const expectRow = new Set();
    for (let q = i; q < i + 9; q++) {
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
    for (let r = firstRow; r < firstRow + 3; r++) {
      for (let c = firstColumn; c < firstColumn + 3; c++) {
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

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  const reg = /(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})+?/g;
  return board.replace(
    reg,
    (_, g1, g2, g3, g4, g5, g6, g7, g8, g9) =>
      `${g1}    ${g2}    ${g3}\n${g4}    ${g5}    ${g6}\n${g7}    ${g8}    ${g9}\n\n`
  );
}
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
