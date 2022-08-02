/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
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
    }
  }
  return true;
}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board,ro,co,a) {
for (let i=0;i < 9;i++){
let x = 3* Math.floor(ro / 3) + Math.floor(i / 3);
let y = 3 * Math.floor(co / 3) + i % 3;
if (board[ro][i] == a || board[i][co] == a || board[x][y] == a){
  return false;
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

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  reStr,
  solve,
  isSolved,
  prettyBoard,
};
