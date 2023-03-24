/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  const size = 9;
  const board = stringToArray(boardString);

  function stringToArray(string) {
    const sudokuArr = [];
    for (let i = 0; i < string.length; i += size) {
      const subString = string.slice(i, i + size).split("");
      sudokuArr.push(subString);
    }
    return sudokuArr;
  }

  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === "-") {
          return [r, c];
        }
      }
    }
    return null;
  };
  function solveSudoku() {
    const currPos = findEmpty(board);

    if (currPos == null) {
      return true;
    }
    for (let i = 1; i <= size; i++) {
      const currNum = i.toString();
      const isValid = isSolved(currNum, currPos, board);

      if (isValid) {
        // const newBoard = JSON.parse(JSON.stringify(board));
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solveSudoku(board)) {
          throw board;
        }
        board[x][y] = "-";
      }
    }
    return false;
  }
  solveSudoku();
  return board;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(num, pos, board) {
  const [r, c] = pos;
  const boxSize = 3;
  const size = 9;
  for (let i = 0; i < size; i++) {
    if (board[i][c] === num && i !== r) {
      return false;
    }
  }

  for (let i = 0; i < size; i++) {
    if (board[r][i] === num && i !== c) {
      return false;
    }
  }

  const boxRow = Math.floor(r / boxSize) * boxSize;
  const boxCol = Math.floor(c / boxSize) * boxSize;

  for (let i = boxRow; i < boxRow + boxSize; i++) {
    for (let j = boxCol; j < boxCol + boxSize; j++) {
      if (board[i][j] === num && i !== r && j !== c) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  return board.map((el) => el.map((el) => +el));
}

// // Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
