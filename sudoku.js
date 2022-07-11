/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const boardString =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

function solve(boardString) {
  const size = 9;
  const boxSize = 3;

  const boardStringToArray = (boardString) => {
    const board = boardString.split("");
    const boardArray = [];
    for (let i = 0; i < board.length; i += 9) {
      boardArray.push(board.slice(i, i + 9));
    }
    return boardArray;
  };
  const realBord = boardStringToArray(boardString);
  function findEmpty() {
    const boardArray = boardStringToArray(boardString);
    const size = 9;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (boardArray[r][c] === "-") {
          return [r, c];
        }
      }
    }
    return null;
  }

  function validate(num, pos, board) {
    const [r, c] = pos;

    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) return false;
    }

    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) return false;
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

  function generateNum() {
    const currPos = findEmpty(realBord);
    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const count = validate(currNum, currPos, realBord);

      if (count) {
        const [x, y] = currPos;
        realBord[x][y] = currNum;

        if (generateNum()) {
          return true;
        }
        realBord[x][y] = "-";
      }
    }
    return false;
  }

  generateNum();
  return boardStringToArray(boardString);
}

console.log(
  solve(
    "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
  )
);

//

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
// function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
// function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
