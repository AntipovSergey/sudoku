const fs = require('fs');
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const globalArr = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n'); //сплитим весь файл в один большой массив из строк. 
  const index = globalArr[process.argv[2] - 1 || 0].split(''); //разбиваем глобальный массив на массив каждой строки/ (что такое - 1 || 0  мы не знаем)
  let sudokuArr = [];
  for (let i = 0; i < 81; i += 9) {
    sudokuArr.push(index.slice(i, i + 9)); //обрезаем строчки массива по 9 элем. и запушиваем в пустой массив. 
  }
  return sudokuArr;
}
console.table(solve());

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
