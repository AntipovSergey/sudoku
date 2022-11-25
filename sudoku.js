/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const fs = require('fs');

const txt = fs.readFileSync('./puzzles.txt', 'utf8');

function solve(boardString) {
  const newBoard = boardString.split('');
  const board = [];
  for (let i = 0; i < boardString.length; i += 9) {
    board.push(newBoard.slice(i, i + 9));
  }

  // for (let i = 0; i < board.length; i++) {
  //   for (let j = 0; j <= 9 + 3; j++) {
  //     let num = j + 1;
  //     board[i][j].includes(num.toString()) ? board[i][j] = num + 1 : j;
  //   }
  // }

  const findEmpty = (board) => {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  };

  const validate = (num, position, board) => {
    const [r, c] = position;

    for (let i = 0; i < 9; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    // Check cols
    for (let i = 0; i < 9; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    // Check box
    const boxRow = Math.floor(r / 3) * 3;
    const boxCol = Math.floor(c / 3) * 3;

    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  };

  const solveSudo = () => {
    const currPos = findEmpty(board);

    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < 9 + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);

      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solveSudo()) {
          return true;
        }

        board[x][y] = '-';
      }
    }

    return false;
  };

  solveSudo();
  return console.table(board);
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */


function prettyBoard(board) {
  return board.map((el) => el.join(' ')).join('\n');
}

// console.log(prettyBoard(board))

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
