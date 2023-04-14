/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const fs = require('fs');
const readFile = fs
  .readFileSync('./puzzles.txt', 'utf-8')
  .split('\r\n')
  .slice(0, 10);
// console.log(readFile);

function solve(boardString) {
  const board = boardString.map((el) => el.split(''));
  const array = board.map((el) => {
    const game = [];
    for (let i = 0; i < el.length; i += 9) {
      game.push(el.slice(i, i + 9));
    }
    return game;
  });
  return array.flat();
}

// return array.map((subarray) =>
// subarray.map((cell) => (cell === '-' ? parseInt(cell) : '-' ))
// );
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  const size = 9;
  const boxSize = 3;

  function findSymbol(board) {
    for (let r = 0; r < size; r += 1) {
      for (let c = 0; c < size; c += 1) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  }

  const validate = (num, pos, board) => {
    const [r, c] = pos;

    //check row
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    //check colums
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    //check section
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxSize + boxRow; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }
    return true;
  };

  const solvePuzzle = () => {
    const currPos = findSymbol(board);
    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);

      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solvePuzzle()) {
          // throw board;
          return true;
        }
        board[x][y] = '-';
      }
    }
    return false;
  };
  solvePuzzle();
  return board.slice(0, 9);
}

// try {
//   isSolved(solve(readFile));
// } catch (board) {
//   console.log('Done', board);
// }
console.table(isSolved(solve(readFile)));
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
// function prettyBoard(board) {
//   return isSolved(solve(board))
// }

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  // prettyBoard,
};
