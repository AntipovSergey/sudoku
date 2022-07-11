const fs = require('fs');
 
function getPuzzle (){
const puzzles = fs.readFileSync('./puzzles.txt', 'utf-8')
   .split('\n')
   .filter((line) => line !== '');
 
 // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
 let puzzleNumber = Number(process.argv[2]) || 1;
 if (puzzleNumber > puzzles.length) {
   puzzleNumber = puzzles.length;
 }
 
 // Получить желаемый судоку по индексу и вывести его в консоль.
 const puzzle = puzzles[puzzleNumber - 1];
 
 console.log(`Решаем судоку №${puzzleNumber}:`);
 //console.log(puzzle, '\n');
 return puzzle
}
 
function getArrayFromString(string) {
   let arrayFromString = string.split('');
   let size = 9;
    let subarray = [];
    for (let i = 0; i < arrayFromString.length / size; i++) {
     subarray[i] = arrayFromString.slice(i * size, i * size + size);
   }
  
   return subarray;
 }
 
 console.log( getArrayFromString(getPuzzle()));

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
  let emptyStr = "---------------------------------";
  let arr = board.map((el) => el.toString().split(",").join(" | "));
  arr.splice(3, 0, emptyStr);
  arr.splice(7, 0, emptyStr);

  const finalArr = arr.toString().split(",").join("\n");
  return finalArr;

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
