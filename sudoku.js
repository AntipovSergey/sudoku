const fs = require('fs');
const readTextfile = fs.readFileSync('./puzzles.txt', 'utf-8');
console.log(readTextfile);
/**
* Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {

  const text = `1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--
  --5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3
  29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9
  -8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-
  6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--
  ---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----
  -3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--
  -96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7
  ----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----
  3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--
  3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-
  -2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-
  --7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--
  ----------2-65-------18--4--9----6-4-3---57-------------------73------9----------
  ---------------------------------------------------------------------------------
  `;

  function getPuzzle(sudoNum) {
    const puzzles = txt
      .split('\n')
      .filter((line) => line !== '');
 
    let puzzleNumber = sudoNum || 1;
    if (puzzleNumber > puzzles.length) {
      puzzleNumber = puzzles.length;
    }

    const puzzle = puzzles[puzzleNumber - 1];
 
    console.log(`Решаем судоку №${puzzleNumber}:`);
    return puzzle;
  }

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  const size = 9;
  const boxSize = 3;

  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === '.') {
          return [r, c];
        }
      }
    }
    return null;
  }

  const validate = (num, pos, board) => {
    const [r, c] = pos;

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

  const solve = () => {
    const currPos = findEmpty(board);

    if (currPos === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);
      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solve()) {
          return true;
        }

        board[x][y] = '.';
      }
    }

    return false;
  }

  solve();
  return board;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
// function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  getPuzzle,
};
