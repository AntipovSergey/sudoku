/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 * возвращаем 2мерный массив
 */
function solve(boardString) {
  // const board = [];
  // for (let i = 0; i < boardString.length; i += 9) {
  //   const arr = [];
  //   for (let j = 0; j < 9; j += 1) {
  //     arr.push(boardString[j + i]);
  //   }
  //   board.push(arr);
  // }

  let finalBoard = [];
  function newBoard(board) {
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        if (board[r][c] === '-') {
          // let newInteger = Math.floor(1 + Math.random() * 9).toString();
          // while (board[r].includes(newInteger)) {
          //   newInteger = Math.floor(1 + Math.random() * 9).toString();
          // }
          return board[r, c];
        } 
      }
    }
    return null;
    // finalBoard = board;
    // return finalBoard;
  }

  function newBoard(board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === '-') {
          let newInteger = Math.floor(1 + Math.random() * 9).toString();
          while (board[i].includes(newInteger)) {
            newInteger = Math.floor(1 + Math.random() * 9).toString();
          }
          board[i][j] = newInteger;
        }
      }
    }
    finalBoard = board;
    return finalBoard;
  }

  console.log('новый\n', newBoard(board));

  const transpondArr = [];
  const rows = finalBoard.length;
  const cols = finalBoard[0].length;

  // function tranpose(finalBoard) {
  //   for (let col = 0; col < cols; col++) {
  //     transpondArr[col] = [];
  //   }

  //   for (let row = 0; row < rows; row++) {
  //     for (let col = 0; col < cols; col++) {
  //       transpondArr[col][row] = finalBoard[row][col];
  //     }
  //   }
  //   return transpondArr.join('\n');
  // }

  // console.log('транс\n', tranpose(finalBoard));

  // function transControl(transpondArr) {
  //   for (let i = 0; i < transpondArr.length; i++) {
  //     for (let j = 0; j < transpondArr[i].length; j++) {

  //     }

  //   }
  // }

  for (let i = 0; i < finalBoard.length; i++) {
    for (let j = 0; j < finalBoard[i].length; j++) {
      const test = finalBoard[i][j];
      for (const value of finalBoard[i]) {
        if (test === value) {
          newBoard(finalBoard);
        }
      }
    }
    return finalBoard.join('\n');
  }

  
}

console.log(solve('---------------------------------------------------------------------------------'));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 * возвращает true or false
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve. Массив
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку. Оставим реалиазацию на потом
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
