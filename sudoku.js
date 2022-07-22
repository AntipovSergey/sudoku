/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {}

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
