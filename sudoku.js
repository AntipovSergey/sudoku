/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  let newArr = boardString.split('');
  let board = [];
  for (let i=0; i< newArr.length; i = i+9){
    board.push(newArr.slice(i,i+9))
  }return board;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
 function valid(board, row, column, k) {
  for (let i = 0; i < 9; i++) {
  const x = 3 * Math.floor(row / 3) + Math.floor(row / 3);
  const z = 3 * Math.floor(column / 3) + (i % 3);
  if (board[row][i] == k || board[i][column] == k || board[x][z] == k) {
  return false;
  }
  }
  return true;
  }
  /**
  * Принимает игровое поле в том формате, в котором его вернули из функции solve.
  * Возвращает булевое значение — решено это игровое поле или нет.
  */
  function isSolved(board) {
    for (let i = 0; i < board.length; i++) {
      for (let y = 0; y < board[i].length; y++) {
        if (board[i][y] === '-') {
          for (let k = 1; k <= 9; k += 1) {
            if (valid(board, i, y, k)) {
               board[i][y] = `${k}`;
               if (isSolved(board)) {
               return true;
                }
              board[i][y] = '-';
            }
          }
        return false;
      }
    }
  }
  return true;
}
  
  /**
  * Принимает игровое поле в том формате, в котором его вернули из функции solve.
  * Возвращает строку с игровым полем для последующего вывода в консоль.
  * Подумай, как симпатичнее сформировать эту строку.
  */
  function prettyBoard(board) {
  const string2 = board.toString();
  const string = string2.replace(/,/g,' ');
  const regex = /\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s/gim;
  const perem = string.match(regex, /\d{18}/gim);
  const perem2 = perem.join('\n');
  return perem2;
  }
  

  
  

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
// };
