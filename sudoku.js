
// тестовая строка с данными судоку
const line =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

// 1-5 8-2 ---
// -9- -76 4-5
// 2-- 4-- 819
// -19 --7 3-6
// 762 -83 -9-
// --- -61 -5-
// --7 6-- -3-
// 43- -2- 5-1
// 6-- 3-8 9--


function solve(boardString) {

  // создаем массив массивов и помещаем его в переменную table
  const table = [];
  const splittedLine = line.split("");

  for (let i = 0; i < 9; i++) {
    const array = [];
    for (let j = 0; j < 9; j++) {
      array.push(splittedLine.shift());
    }
    table.push(array);
  }
  return table;
}
const table = solve(line);

// создаем функцию чтобы найти row и column пустого элемента
function isEmpty(table) {
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
      if (table[i][j] === '-') {
        return [i, j]
      }
    }
  }
  return null;
}
// результат вычисления isEmpty
const param = isEmpty(table);
const row = param[0];
const column = param[1];

// создаем функцию, которая проверяет row, column, box
function checks(table, row, column) {
  // берем число от 1 до 9 и проверяем подходит ли оно
  for (let i = 1; i <= 9; i++) {
    if (table[row][column] === i) {
      return false;
    }
    
  }
}







// const [i, j] = isEmpty(board);

// console.log(i);
// console.log(j);

// console.log(solve(line));




// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) { }

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) { }

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
