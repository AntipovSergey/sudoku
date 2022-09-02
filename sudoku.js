/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const board = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function checkRow(arr, position1, position2) {
  let num = 0;
  for (let i = position1; i < arr.length; i++) {
    for (let j = 1; j <= 9; j++) {
      if (!arr[i].includes(j.toString())) {
        for (let k = position2; k < arr.length; k += 1) {
          const array = [];
          for (let n = 0; n < arr[k].length; n += 1) {
            array.push(arr[n][k]);
          }
          if (!array.includes(j.toString())) {
            num = j;
          }
        }
      }
    }
  }
  return num;
}

function solve(board) {
  const arr = [];
  let count = 0;
  for (let i = 0; i < 9; i++) {
    const arr2 = [];
    for (let j = 0; j < 9; j++) {
      arr2.push(board[count]);
      count += 1;
    }
    arr.push(arr2);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '-') {
        const position1 = i;
        const position2 = j;
        arr[i][j] = checkRow(arr, position1, position2).toString();
      }
    }
  }
  return arr;
}

console.table(solve(board));

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
