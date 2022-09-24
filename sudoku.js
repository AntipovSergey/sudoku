/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  let firstString = Array.from(boardString.slice(0, 9))
  let secondString = Array.from(boardString.slice(9, 18))
  let thirdString = Array.from(boardString.slice(18, 27))
  let forthString = Array.from(boardString.slice(27, 36))
  let fiveString = Array.from(boardString.slice(36, 45))
  let sixString = Array.from(boardString.slice(45, 54))
  let sevenString = Array.from(boardString.slice(54, 63))
  let eigthString = Array.from(boardString.slice(63, 72))
  let nineString = Array.from(boardString.slice(72, 81))

  let board = [firstString, secondString, thirdString, forthString, fiveString, sixString, sevenString, eigthString, nineString]

  let emptySpot = nextEmptySpot(board);
  let row = emptySpot[0];
  let col = emptySpot[1];
  for (let num = 1; num <= 9; num++) {
    if () { }
    board[row][col] = num;


  }

  function nextEmptySpot(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '_')
          return [i, j]

      }
    }
    return null
  }
  //Функции для проверки строки, столбца
  function checkRow(board, row, value) {
    for (var i = 0; i < board[row].length; i++) {
      if (board[row][i] === value) {
        return false;
      }
    }

    return true;
  }
  function checkColumn(board, column, value) {
    for (var i = 0; i < board.length; i++) {
      if (board[i][column] === value) {
        return false;
      }
    }

    return true;
  };


  return board
}

function solve(boardString) {}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let el = board[i][j];
      if (typeof el !== "string") {
        return true;
      }
    }
  }
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */


function prettyBoard(board) {
  for (let i = 0; i < board.length; i = i + 9) {
  if (i % 27 === 0 && i !== 0 ) {
  console.log('------+-------+------')
  }
  let resultArr = [];
  resultArr.push(board.slice(i, i + 3).split('').join(' '));
  resultArr.push(board.slice(i + 3, i + 6).split('').join(' '));
  resultArr.push(board.slice(i + 6, i + 9).split('').join(' '));
  console.log(resultArr.join(' | '));
  } 

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};


const solveboard1 = '145892673893176425276435819519247386762583194384961752957614238438729561621358947';
console.log(prettyBoard(solveboard1));