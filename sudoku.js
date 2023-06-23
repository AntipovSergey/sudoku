/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const fs = require("fs");

function solve(boardString) {
  // кажется уже реализовано в Рид энд Солве

  //принимает данные из файла puzzles.txt и присваивает их переменной data
  let filePath = "./puzzles.txt";
  let data = fs.readFileSync(filePath, "utf8");

  //складывает данные в массив из переменной data и берет первый судоку (пока) для решения
  let dataArray = data.split("\n").filter((line) => line !== "");
  let dataArrayToSolve = dataArray[0].split("");

  let outputArray = [];
  for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
      const index = i * 9 + j;
      row.push(dataArrayToSolve[index]);
    }
    outputArray.push(row);
  }

  return outputArray;
}

console.log(solve());
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
