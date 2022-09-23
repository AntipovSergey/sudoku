/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  const boardArr = boardString.match(/.{9}/g).map((a) => a.split(''));

  function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + i % 3;
      if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
        return false;
      }
    }
    return true;
  }

  function sudokuSolver(sudoku) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (sudoku[i][j] == '-') {
          for (let k = 1; k <= 9; k++) {
            if (isValid(sudoku, i, j, k)) {
              sudoku[i][j] = `${k}`;
              if (sudokuSolver(sudoku)) {
                return true;
              }
              sudoku[i][j] = '-';
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  sudokuSolver(boardArr);
  console.log(boardArr);
  return boardArr;
}
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
 
function isSolved(board){
  let d = ['1','2','3','4','5','6','7','8','9',1,2,3,4,5,6,7,8,9]
  for(let i = 0; i < board.length;i++){
    for (let j = 0; j < board.length; j++){
      if(!d.includes(board[i][j])){
        return false
      }
    }
  }
  let col = board[0].map((col, i) => board.map(row => row[i]));
   for(let i = 0; i < board.length; i++){
     if(!solvColsRows(board[i])){
      return false
     };
     if(!solvColsRows(col[i])){
      return false
     }
   }
   for(let i = 0; i < board.length; i+=3){
    for(let j = 0; j < board.length; j+=3){
      solvKvadrat(i,j,board)
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
  let prettyBoard = board.map((el) => (el = el.join(" "))).join("\n");
  return prettyBoard;
}
function solvColsRows(arr){
  for(let j = 0; j < arr.length; j++){
    let flag = true
    let a = arr[j];
    arr[j] = null;
    if (arr.includes(a)){
      flag =  false;
  }
  return flag
}
}
function solvKvadrat(x,y,board){
  let flag = true;
  for(let i = x; i < x+3; i++){
    for(let j = y; j < y+3; j++){
      let a = board[i][j]
      board[i][j] = null;
      for(let i1 = 0; i1 < 3; i1++){
        for(let j1 = 0; j1 <3; j1++){
          if(a === board[i1][j1]){
            flag = false
          }
        }
      }
      board[i][j] = a;
    }
   }
   return flag
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,

};