
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

function makeTable(boardString) { // создаем массив массивов и помещаем его в переменную table
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

const table = makeTable(line);
// const param = isEmpty(table); // результат вычисления isEmpty
// const row = param[0];
// const column = param[1];

// создаем функцию чтобы найти row и column пустого элемента
function isEmpty(table) {
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
      if (table[i][j] === '-') {
        return [i, j];
      }
    }
  }
  return 'solved';
}

// создаем функцию, которая проверяет row, column, box
function checks(table, param, num) {
  let row = param[0];
  let column = param[1];
  // берем число от 1 до 9 и проверяем подходит ли оно
  for (let i = 0; i < 9; i++) { // для row
    if (table[row][i] === num && i !== row) {
      return false;
    }
  }

  for (let i = 0; i < 9; i++) { // для column
    if (table[i][column] === num && i !== column) {
      return false;
    }
  }

  row = Math.floor(row / 3) * 3; // для квадратов
  column = Math.floor(column / 3) * 3;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (table[row + r][column + c] === num && r !== row && c !== column) return false;
    }
  }

  return true;
}

function solve(table) {
  const param = isEmpty(table); // результат вычисления isEmpty
  if (isEmpty(table) === 'solved') {
    console.log(table);
    return true;
  }

  for (let num = 1; num <= 9; num++) {
    if (checks(table, param, num)) {
      row = param[0];
      column = param[1];
      table[row][column] = num.toString();

      if (solve(table, row, column)) {
        return true;
      }

      table[row][column] = '-';
    }
  }

  return false;
}

solve(table);
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
