  
function selectPuzzles(num){
  const fs = require('fs');
  const res = fs.readFileSync("./puzzles.txt", "utf8")
  console.table(res)
  const startArr = res.split("\n");
  let result = sudoku(startArr[num-1]);
  return result
}


// Обрабатывает данные в файле puzzles.txt
function sudoku(wholeLine){
  let newArr = [];
  let newStr = wholeLine.split('');
  for (let i = 0; i < newStr.length; i += 9) {
    newArr.push(newStr.slice(i, i + 9).join(''));
  }
  return newArr;
}



// /res Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
//  * Возвращает игровое поле после попытки его решить.
//  * Договорись со своей командой, в каком формате возвращать этот результат.
//  */
// function solve(boardString) {

// }

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
// function isSolved(board) {

// }

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
// function prettyBoard(board) {

// }

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
