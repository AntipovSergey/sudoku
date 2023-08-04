/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const sudoky = [
  ['1 - 5 8 - 2 - - -'],
  ['- 9 - - 7 6 4 - 5'],
  ['2 - - 4 - - 8 1 9'],
  ['- 1 9 - - 7 3 - 6'],
  ['7 6 2 - 8 3 - 9 -'],
  ['- - - - 6 1 - 5 -'],
  ['- - 7 6 - - - 3 -'],
  ['4 3 - - 2 - 5 - 1'],
  ['6 - - 3 - 8 9 - -'],
];

function parseSudoku(sudokuArray) {
  return sudokuArray.map((row) => row[0]
    .split(' ')
    .map((cell) => (cell === '-' ? 0 : parseInt(cell))));
}
const parsedSudoku = parseSudoku(sudoky);

function checkColums(sudokuBoard) {
  const maybeArr = [];
  for (let col = 0; col < 9; col++) {
    const colValues = [];
    for (let row = 0; row < 9; row++) {
      colValues.push(sudokuBoard[row][col]);
    }
    const missNum = missingNumbers(colValues);
    maybeArr.push(missNum);
  }
  return maybeArr;
}

// function checkColRow(col, row) {
// const result = [];
// for
// }

function checkSquare(sudokuBoard) {

  const 
}

function missingNumbers(arr) {
  const findmissingNumbers = [];
  for (let num = 1; num <= 9; num++) {
    if (!arr.includes(num)) {
      findmissingNumbers.push(num);
    }
  }
  return findmissingNumbers;
}

const sudokuCheckColums = checkColums(parsedSudoku);

console.log(sudokuCheckColums);

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

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
