/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  let splittedBoardString = boardString.split("");
  let rows = [];
  let counter = 0;
  for (let i = 1; i <= 9; i += 1) {
    let row = [];
    for (let j = 1; j <= 9; j += 1) {
      row.push(splittedBoardString[counter]);
      counter++;
    }
    rows.push(row);
  }

  let columns = [];
  let tableArr = [];

  for (let j = 0; j < rows.length; j += 1) {
    let column = [];
    for (let i = 0; i < rows[j].length; i += 1) {
      column.push(rows[i][j]);
    }
    columns.push(column);
  }
  console.log("rows", rows);

  let boxes = [];

  let s = 0;
  let k = 0;
  for (let b = 0; b < 9; b += 1) {
    let box = [];
    for (let i = 0; i < 3; i += 1) {
      let boxRow = [];
      for (let j = 0; j < 3; j += 1) {
        boxRow.push(rows[i + s * 3][j + k * 3]);
      }

      box.push(boxRow);
    }
    s += 1;
    if (s % 3 === 0) {
      k += 1;
      s = 0;
    }
    boxes.push(box);
  }
  console.log(boxes);
}

solve(
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
);
//solve('123456789------------------------------------------------------------------------')

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {
  function kvadrat(matrix) {
    const arrKvadrat = new Array();
    const arrStr11 = new Array();
    const arrStr12 = new Array();
    const arrStr13 = new Array();
    const arrStr21 = new Array();
    const arrStr22 = new Array();
    const arrStr23 = new Array();
    const arrStr31 = new Array();
    const arrStr32 = new Array();
    const arrStr33 = new Array();
    for (let i = 0; i < 9; i += 1) {
      if (i < 3) {
        for (let j = 0; j < 9; j += 1) {
          console.log("i", i, "j", j, matrix[i][j]);
          if (j < 3) arrStr11.push(matrix[i][j]);
          if (j > 2 && j < 6) arrStr12.push(matrix[i][j]);
          if (j > 5) arrStr13.push(matrix[i][j]);
        }
      }
      if (i > 3 && i < 7) {
        for (let j = 0; j < 9; j += 1) {
          console.log("i", i, "j", j, matrix[i][j]);
          if (j < 3) arrStr21.push(matrix[i][j]);
          if (j > 2 && j < 6) arrStr22.push(matrix[i][j]);
          if (j > 5) arrStr23.push(matrix[i][j]);
        }
      }
      if (i > 5) {
        for (let j = 0; j < 9; j += 1) {
          console.log("i", i, "j", j, matrix[i][j]);
          if (j < 3) arrStr31.push(matrix[i][j]);
          if (j > 2 && j < 6) arrStr32.push(matrix[i][j]);
          if (j > 5) arrStr33.push(matrix[i][j]);
        }
      }
    }
    arrKvadrat.push(
      arrStr11,
      arrStr12,
      arrStr13,
      arrStr21,
      arrStr22,
      arrStr23,
      arrStr31,
      arrStr32,
      arrStr33
    );
    console.table(arrKvadrat);
    return;
    arrKvadrat;
  }

  // console.log(board);
  function gorizont(matrix) {
    for (i = 0; i < matrix.length; i += 1) {
      matrix[i] = matrix[i].join("");
    }

    console.log(matrix);
    // return;
  }
  gorizont(board);
  kvadrat(board);
}

console.log(
  isSolved([
    [4, 5, 3, 2, 1, 7, 8, 9, 6],
    [1, 6, 2, 5, 8, 9, 4, 7, 3],
    [7, 9, 8, 6, 3, 4, 2, 5, 1],
    [2, 3, 1, 4, 5, 8, 9, 6, 7],
    [9, 8, 5, 3, 7, 6, 1, 4, 2],
    [6, 7, 4, 1, 9, 2, 3, 8, 5],
    [3, 4, 9, 7, 6, 1, 5, 2, 8],
    [5, 2, 6, 8, 4, 3, 7, 1, 9],
    [8, 1, 7, 9, 2, 5, 6, 3, 4],
  ])
);
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
