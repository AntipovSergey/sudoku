/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const boardArr = [];

  for (let i = 9; i <= 81; i += 9) {
    const a = boardString.slice((i - 9), i);
    const b = [];
    for (let k = 0; k < 9; k++) {
      b.push(a[k]);
    }
    boardArr.push(b);
  }

  // etalonString = '123456789';
  // for (let i = 0; i < 9; i++) {
  //   for (let j = 0; j < 9; j++) {
  //     if (boardArr[i][j] === '-') {
  //       let newString = boardArr[i].join('');
  //       newString = newString + boardArr[0][j] + boardArr[1][j] + boardArr[2][j] + boardArr[3][j] + boardArr[4][j] + boardArr[5][j] + boardArr[6][j] + boardArr[7][j] + boardArr[8][j];

  //       newString.replace('-', '');
  //       console.log(newString);
  //       boardArr[i, j] = etalonString[[...newString].findIndex((el, index) => el !== etalonString[index])];
  //     }
  //   }
  // }

  return boardArr;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 0; i < 9; i++) {
    arrI = [];
    for (let j = 0; j < 9; j++) {
      if (arrI.includes(board[i][j])) {
        return false;
      }
      if (board[i][j] != null) {
        arrI.push(board[i][j]);
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    arrJ = [];
    for (let j = 0; j < 9; j++) {
      if (arrJ.includes(board[j][i])) {
        return false;
      }
      if (board[j][i] != null) {
        arrJ.push(board[j][i]);
      }
    }
  }
  return true;
}

// board = [[1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [2, 3, 4, 5, 6, 7, 8, 9, 1],
//   [3, 4, 5, 6, 7, 8, 9, 1, 2],
//   [4, 5, 6, 7, 8, 9, 1, 2, 3],
//   [5, 6, 7, 8, 9, 1, 2, 3, 4],
//   [6, 7, 8, 9, 1, 2, 3, 4, 5],
//   [7, 8, 9, 1, 2, 3, 4, 5, 6],
//   [8, 9, 1, 2, 3, 4, 5, 6, 7],
//   [9, 1, 2, 3, 4, 5, 6, 7, 8]];

// console.log(isSolved(board));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  let sudokuStringBoard = '';
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === null) {
        sudokuStringBoard += ' ';
      } else {
        sudokuStringBoard += board[i][j];
      }
    }
    sudokuStringBoard += '\n';
  }
  return sudokuStringBoard;
}

// console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));
// console.log(prettyBoard(board));

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
