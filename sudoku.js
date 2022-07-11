/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function solve(boardString) {
  const size = 9;
  const boxSize = 3;

  function boardStringToArray(boardString) {
    const board = boardString.split('');
    const boardArray = [];
    for (let i = 0; i < board.length; i += 9) {
      boardArray.push(board.slice(i, i + 9));
    }
    return boardArray;
  }
  const boardArray = boardStringToArray(boardString);

  // const realBord = boardStringToArray(boardString);
  function findEmpty(boardArray) {
    const size = 9;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (boardArray[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  }

  function validate(num, pos, boardArray) {
    const [r, c] = pos;

    for (let i = 0; i < size; i++) {
      if (boardArray[i][c] === num && i !== r) return false;
    }

    for (let i = 0; i < size; i++) {
      if (boardArray[r][i] === num && i !== c) return false;
    }

    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (boardArray[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }
    return true;
  }

  function generateNum() {
    const currPos = findEmpty(boardArray);
    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const count = validate(currNum, currPos, boardArray);

      if (count) {
        const [x, y] = currPos;
        boardArray[x][y] = currNum;

        if (generateNum()) {
          return true;
        }
        boardArray[x][y] = '-';
      }
    }
    return false;
  }

  generateNum();
  return boardArray;
}

// console.table(solve('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3'));

// console.table(solve('---------------------------------------------------------------------------------'));

// console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
// function isSolved(boardString) {
//   return solve(boardString).includes('-') ?  true : false
// }

console.log(isSolved(boardString));

// console.log(isSolved(boardStringToArray('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3')))

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
// function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  // isSolved,
  // prettyBoard,
};
