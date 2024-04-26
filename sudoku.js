function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

function findCellValues(sudoku, i, j) {
  const allPossibleValues = [];
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  allPossibleValues = allPossibleValues.concat(checkRow(sudoku, i, values));
  allPossibleValues = allPossibleValues.concat(checkColumn(sudoku, i, j, values));
  allPossibleValues = allPossibleValues.concat(checkCube(sudoku, i, j, values));
  return allPossibleValues;
}

// проверит все значения в строчке
function checkRow(sudoku, i, values) {
  const result = [...values];
  for (let k = 0; k < sudoku[i].length; k += 1) {
    if (sudoku[i][k] !== 0) {
      if (result.includes(sudoku[i][k])) {
        const index = result.indexOf(sudoku[i][k]);
        result.splice(index, 1);
      }
    }
  }
  return result;
}

function checkColumn(sudoku, j, values) {
  const result = [...values];
  for (let k = 0; k < sudoku.length; k += 1) {
    if (sudoku[k][j] !== 0) {
      if (result.includes(sudoku[k][j])) {
        const index = result.indexOf(sudoku[k][j]);
        result.splice(index, 1);
      }
    }
  }
  return result;
}

// const testPuzzle = [
//   [0, 1, 2, 0, 0, 0, 4, 9, 7],
//   [0, 0, 2, 0, 0, 0, 4, 9, 7],
//   [3, 1, 2, 0, 0, 0, 4, 0, 7],
//   [8, 0, 2, 0, 5, 0, 4, 9, 7],
//   [6, 1, 2, 0, 0, 0, 4, 0, 7],
//   [0, 0, 2, 0, 0, 0, 4, 9, 7],
//   [0, 1, 2, 0, 0, 0, 4, 0, 7]
// ];
// const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // console.log(checkRow(testPuzzle, 0, values))
// console.log(checkColumn(testPuzzle, 0, values))
