/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
<<<<<<< HEAD
function reStr (boardString){
  let strArr = boardString.split('');
  let size = 9;
  let BoardArr =[];
  for(let i=0;i < strArr.length; i+=size){
    BoardArr.push(strArr.slice(i,i+size))
  }
  return BoardArr;
}
function solve(BoardArr) {
  
  console.log(BoardArr);
  for (let i=0; i< 9; i++){
    for(let j=0; j< 9; j++){
      if (BoardArr[i][j]=== '-'){
        for( let a =1; a<=9; a++){
          if(isSolved(BoardArr,i,j,a)){
            BoardArr[i][j] = a;
            if(solve(BoardArr)){
              return true;
            }else{
              BoardArr[i][j] = '-';
            }
          }
        }
return false;
      }
=======

function solve(boardString) {
  const stringPuzzles = boardString.split("");
  const size = 9;
  const arrayPuzzles = [];
  for (let i = 0; i < stringPuzzles.length; i += size) {
    arrayPuzzles.push(stringPuzzles.slice(i, i + size));
  }
  return arrayPuzzles;
}

function validation(board, row, column, k) {
  for (let i = 0; i < 9; i += 1) {
    const a = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const b = 3 * Math.floor(column / 3) + (i % 3);
    if (board[row][i] === k || board[i][column] === k || board[a][b] === k) {
      return false;
>>>>>>> b3daded1cba620a73bc843384015aad3bbfd85cc
    }
  }
  return true;
}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
<<<<<<< HEAD
function isSolved(board,ro,co,a) {
for (let i=0;i < 9;i++){
let x = 3* Math.floor(ro / 3) + Math.floor(i / 3);
let y = 3 * Math.floor(co / 3) + i % 3;
if (board[ro][i] == a || board[i][co] == a || board[x][y] == a){
  return false;
}
}
return true;
=======
function isSolved(board) {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] === "-") {
        for (let k = 1; k <= 9; k += 1) {
          if (validation(board, i, j, k)) {
            board[i][j] = `${k}`;
            if (isSolved(board)) {
              return true;
            }
            board[i][j] = "-";
          }
        }
        return false;
      }
    }
  }
  return true;
>>>>>>> b3daded1cba620a73bc843384015aad3bbfd85cc
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  reStr,
  solve,
  isSolved,
  prettyBoard,
};
