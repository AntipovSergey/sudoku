const fs = require ('fs');
const text = fs.readFileSync('./puzzles.txt', 'utf-8');
const fullBoard = text.split('\n');
const boardString = [];
const newArr = [];

for (let i = 0; i< fullBoard[0].length; i=i+9){
  boardString.push(fullBoard[0].slice(i,(i+9)).split(''));
  console.log (boardString);
}

  // получаем поля из sudoku-puzzles.txt прочитали строку и записали в виде поля 9х9
  // передаем массив в функцию prettyBoard для красивой отрисовки
  // попытки решить (пока непонятно как реализовать)
  // возвращаем игровое поле

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve (boardString) {}

//решение судоку

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
 function prettyBoard(solve(board)) {
  return String(solve(board));

}

// // Экспортировать функции для использования в другом файле (например, readAndSolve.js).
// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
// };
