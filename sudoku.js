/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function a() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      return arr.push()
    }
  }
  return arr
}
console.log(a([['4','5','6'],['4','5','6'],['4','5','6']]));
function solve(boardString) {
  
}
  

function findDash (arr) {
for(let z=0; z<arr.length; z++) {
  for (let j=0; j<arr[z].length; j++) {
 if(arr[z][j]==="-") {
   return [z,j];
 }
  }
}
return null;
}





function solve(boardString) {

}

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

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
