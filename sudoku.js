const fs = require('fs');
let readFile = fs.readFileSync('./puzzles.txt', 'utf-8');
readFile = readFile.split('\n').slice(0, 10);
// console.log(readFile);

// return array.map((subarray) =>
// subarray.map((cell) => (cell === '-' ? parseInt(cell) : '-' ))
// );
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  const outerSquareSize = 9;
  const innerSquareSize = 3;

  function findSymbol(board) {
    for (let r = 0; r < outerSquareSize; r += 1) {
      for (let c = 0; c < outerSquareSize; c += 1) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  }

  const validate = (number, position, board) => {
    const [r, c] = position;

    //check row
    for (let i = 0; i < outerSquareSize; i++) {
      if (board[i][c] === number && i !== r) {
        return false;
      }
    }

    //check colums
    for (let i = 0; i < outerSquareSize; i++) {
      if (board[r][i] === number && i !== c) {
        return false;
      }
    }

    //check section
    const boxRow = Math.floor(r / innerSquareSize) * innerSquareSize;
    const boxColumn = Math.floor(c / innerSquareSize) * innerSquareSize;

    for (let i = boxRow; i < innerSquareSize + boxRow; i++) {
      for (let j = boxColumn; j < boxColumn + innerSquareSize; j++) {
        if (board[i][j] === number && i !== r && j !== c) {
          return false;
        }
      }
    }
    return true;
  };

  const solvePuzzle = () => {
    const currentPosition = findSymbol(board);
    if (currentPosition === null) {
      return true;
    }

    for (let i = 1; i < outerSquareSize + 1; i++) {
      const currentNumber = i.toString();
      const isValid = validate(currentNumber, currentPosition, board);

      if (isValid) {
        const [x, y] = currentPosition;
        board[x][y] = currentNumber;

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
function prettyBoard(board) {}
// function prettyBoard(board) {
//   return isSolved(solve(board))
// }

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  // prettyBoard,
};
