const fs = require('fs');

//  ============= read =============
// функция читает файл и возвращает один из 15 судоку по переданному номеру puzzleNum
// например, чтобы прочитать десятое судоку - read(10)
// возвращает судоку в формате:
// [
//   [1, 0, 5, 8, 0, 2, 0, 0, 0],
//   [0, 5, 8, 0, 2, 0, 0, 0, 0],
//   [5, 8, 0, 2, 0, 0, 0, 0, 9],
//   [8, 0, 2, 0, 0, 0, 0, 9, 0],
//   [0, 2, 0, 0, 0, 0, 9, 0, 0],
//   [2, 0, 0, 0, 0, 9, 0, 0, 7],
//   [0, 0, 0, 0, 9, 0, 0, 7, 6],
//   [0, 0, 0, 9, 0, 0, 7, 6, 4],
//   [0, 0, 9, 0, 0, 7, 6, 4, 0],
// ];
// const sudoku = read(0);
// console.log(sudoku);

function read(puzzleNum) {
  // читаем файл 'puzzles.txt'
  const puzzle = fs
    .readFileSync('puzzles.txt', 'utf-8')
    // заменяем все дефисы на 0, чтобы потом привести все в формиат чисел. Пока что они строки
    .replaceAll('-', 0)
    // удаляем технические пробелы в начале и конце строки
    .trim()
    // делим одну огромную строку на 15 судоку по \n
    .split('\n')[puzzleNum];

  const rows = [];
  const numRows = 9;
  const numCols = 9;

  for (let i = 0; i < numRows; i += 1) {
    rows.push(
      puzzle
        .slice(i, i + numCols)
        .split('')
        .map((e) => +e),
    );
  }
  return rows;
}

//  ============= isSafe =============
// вспомогательная функция - проверяет можно ли вставить цифру в ячейку
// можно если
// 1) в строке нет такой цифры
// 2) в столбце нет такой цифры
// 3) в квадрате 3х3 нет такой цифры
// const sudoku = read(0);
// console.log(isSafe(sudoku, 0, 1, 5)); => false

function isSafe(grid, row, col, num) {
  // Check if we find the same num in the similar row , we return false
  for (let x = 0; x < 9; x += 1) {
    if (grid[row][x] === num) {
      return false;
    }
  }
  // Check if we find the same num in the similar column , we return false
  for (let x = 0; x < 9; x += 1) {
    if (grid[col][x] === num) {
      return false;
    }
  }
  // Check if we find the same num in the particular 3*3 matrix, we return false
  const startRow = row - (row % 3);
  const startCol = col - (col % 3);
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (grid[i + startRow][j + startCol] === num) {
        return false;
      }
    }
  }
  return true;
}

//  ============= solveSudoku =============
// решиет судоку :)))
// если можно решить - возвращает заполненную табличку, а если нет - возвращает false

function solveSudoku(puzzle, row, col) {
  let curRow = row;
  let curCol = col;
  const N = 9;
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */

  // Check if we have reached the 8th row and 9th column (0 indexed matrix),
  // we are returning true to avoid further backtracking
  if (curRow === N - 1 && curCol === N) {
    return true;
  }

  // Check if column value becomes 9 , we move to next row and column start from 0
  if (curCol === N) {
    curRow += 1;
    curCol = 0;
  }

  // Check if the current position of the puzzle already contains value >0,
  // we iterate for next column
  if (puzzle[curRow][curCol] > 0) {
    return solveSudoku(puzzle, curRow, curCol + 1);
  }

  for (let num = 1; num < N + 1; num += 1) {
    // Check if it is safe to place the num (1-9) in the given row ,col ->we move to next column
    if (isSafe(puzzle, curRow, curCol, num)) {
      // Assigning the num in the current (row,col) position of the puzzle and assuming
      // our assigned num in the position is correct
      // eslint-disable-next-line no-param-reassign
      puzzle[curRow][curCol] = num;

      // Checking for next possibility with next column
      if (solveSudoku(puzzle, curRow, curCol + 1)) {
        return true;
      }
    }
    // Removing the assigned num , since our assumption was wrong , and we go for
    // next assumption with diff num value
    // eslint-disable-next-line no-param-reassign
    puzzle[curRow][curCol] = 0;
  }

  return false;
}

//  ============= isSolved =============
// если судоку решено - возвращает true, а если нет false
function isSolved(sudoku) {
  return !!sudoku;
}

//  ============= prettyBoard =============
// рисует судоку - превращает массив в строку и принтит в консоль
function prettyBoard(puzzle) {
  return puzzle.map((el) => el.join(' ')).join('\n');
}

const sudoku = read(0);
console.log(prettyBoard(sudoku));
const sudokuSolved = solveSudoku(sudoku, 0, 0);
console.log(sudokuSolved);
console.log(isSolved(sudokuSolved));
