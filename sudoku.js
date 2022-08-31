// const readAndSolve = require('project-sudoku/readAndSolve.js')
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
let mainFunction = function (str) {

let arr = str.split('')
const board = [];
  for (let i = 0; i < arr.length; i += 9) {
    board.push(arr.slice(i, i + 9));
  }

function findEmpty(board) {

  for (let r = 0; r < board.length; r += 1) {
    for (let c = 0; c < board.length; c += 1) {
      if (board[r][c] === '-') {
        return [r, c]
      }
    }
  }
  return null;
}



let size = 9;
let boxSize = 3;
const validate = (num, pos, board) => {
  const [r,c] = pos;
  
  //Check rows
  for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
          return false;
      }
  }

  //Check cols
  for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
          return false;
      }
  }


  //Check box
  const boxRow = Math.floor( r/boxSize ) * boxSize;
  const boxCol = Math.floor( c/boxSize ) * boxSize;

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
  //console.log('------------------------------');
  for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);
      //console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
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
    return board;
  
}

// mainFunction(boardString)

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j] === '-') {
        return false
      } 
    }
  }
  return true
}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
 console.table(board.map(el => el.map(el => el / 1)))
}


// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = { isSolved,
  prettyBoard,
  mainFunction
};

