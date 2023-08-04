const fs = require('fs');
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
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

// function takeSudoku(index) {
//   const filePath = './puzzles.txt';
//   const arr = data.split('');
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++);

// }
// takeSudoku();

function takeSudoku(index) {
  const filePath = './puzzles.txt';
  const data = fs.readFileSync(filePath, 'utf8').split('\n');
  // const arr = data.trim().split('\n');
  // console.log(arr);

  const arr = data[index];
  const newArr = Array.from(arr);
  const newArr2 = [];

  // for (let i = 0; i < arr.length; i++) {

  for (let i = 0; i <= 8; i++) {
    newArr2.push(newArr.slice(i, i + 9));
  }
  return newArr2;
}
console.log(takeSudoku(6));
