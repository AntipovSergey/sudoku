/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const fs = require('fs');

const txt = fs.readFileSync('./puzzles.txt', 'utf8');


const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

function solve(boardString) {
  let newBoard = boardString.split('')
  let board = [];
  for(let i = 0; i < boardString.length; i += 9) {
    board.push(newBoard.slice(i, i + 9))
  }

const findEmpty = (board) => {
  for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
          if(board[r][c] === '-') {
              return [r,c];
          }
      }
  }
  return null;
}

const validate = (num, position, board) => {
  const [r,c] = position;

  for (let i = 0; i < 9; i++) {
      if (board[i][c] === num && i !== r) {
          return false;
      }
  }

  //Check cols
  for (let i = 0; i < 9; i++) {
      if (board[r][i] === num && i !== c) {
          return false;
      }
  }


  //Check box
  const boxRow = Math.floor( r/3 ) * 3;
  const boxCol = Math.floor( c/3 ) * 3;

  for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
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

  for (let i = 1; i < 9 + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);

      if (isValid) {
          const [x,y] = currPos;
          board[x][y] = currNum;

          if(solve()) {
              return true;
          }

          board[x][y] = '-';
      }
  }

  return false;
}

solve();
return console.table(board);
};


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
    return board.map((el)=>el).join('\n')
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
