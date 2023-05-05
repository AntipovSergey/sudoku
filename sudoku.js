const puzzlesStr =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const b = boardString.split("");

  let size = 9; //размер подмассива
  let subarray = []; //массив в который будет выведен результат.
  for (let i = 0; i < Math.ceil(b.length / size); i++) {
    subarray[i] = b.slice(i * size, i * size + size);
  }
  return subarray;
}

const sudokuTabel = solve(puzzlesStr);

function validate(sudokuTabel, num, position) {
  const [r, c] = position;

  //check Row
  for (let i = 0; i < 9; i++) {
    if (sudokuTabel[i][c] == num) {
      return false;
    }
  }

  //check Colum
  for (let i = 0; i < 9; i++) {
    if (sudokuTabel[r][i] == num) {
      return false;
    }
  }

  //chexk Box
  const rowBox = Math.floor(r / 3) * 3;
  const columBox = Math.floor(c / 3) * 3;

  for (let i = rowBox; i < rowBox + 3; i++) {
    for (let j = columBox; j < columBox + 3; j++) {
      if (sudokuTabel[i][j] == num) {
        return false;
      }
    }
  }

  return true;
}

//---------------------------------------------------------
//
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  const res = [];
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === "-") {
        return [r, c];
      }
    }
  }
  return null;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  const coordinate = isSolved(board);
  if (!coordinate) {
    return board;
  }

  const [r, c] = coordinate;

  for (let i = 1; i < 10; i++) {
    if (validate(sudokuTabel, i, [r, c])) {
      board[r][c] = i;
      if (prettyBoard(board)) {
        console.table(board);
        return true;
      }
      board[r][c] = "-";
    }
  }

  return false;
}

prettyBoard(sudokuTabel);

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
