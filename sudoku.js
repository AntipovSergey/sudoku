const fs = require('fs');

//  ============= read =============
// функция читает файл и возвращает один из 15 судоку по переданному номеру puzzleNum
// например, чтобы прочитать десятое судоку - read(10)
// возвращает судоку в формате:
// [
//   [1, 0, 5, 8, 0, 2, 0, 0, 0],
//   [0, 9, 0, 0, 7, 6, 4, 0, 5],
//   [2, 0, 0, 4, 0, 0, 8, 1, 9],
//   [0, 1, 9, 0, 0, 7, 3, 0, 6],
//   [7, 6, 2, 0, 8, 3, 0, 9, 0],
//   [0, 0, 0, 0, 6, 1, 0, 5, 0],
//   [0, 0, 7, 6, 0, 0, 0, 3, 0],
//   [4, 3, 0, 0, 2, 0, 5, 0, 1],
//   [6, 0, 0, 3, 0, 8, 9, 0, 0],
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
  for (let i = 0; i < 9; i += 1) {
    rows.push(
      puzzle
        .slice(i * 9, (i + 1) * 9)
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

function isSafe(grid, row, col, num) {
  // Check if we find the same num in the similar row , we return false
  for (let x = 0; x < 9; x += 1) {
    if (grid[row][x] === num) {
      return false;
    }
  }
  // Check if we find the same num in the similar column , we return false
  for (let x = 0; x < 9; x += 1) {
    if (grid[x][col] === num) {
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
// решает судоку - заполняет таблицу - МУТИРУЕТ таблицу, котооруб в нее передали!
// если можно решить - возвращает true, а если нет - возвращает false

// то есть до нее sudoku  еще не решенное
//    const sudoku = read(0);
//    console.log(prettyBoard(sudoku));

// а после вызова этой функции sudoku уже заполненное
//    solveSudoku(sudoku, 0, 0);
//    тут решенное судоку
//    console.log(sudoku);

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
// 1 4 5 8 9 2 6 7 3
// 8 9 3 1 7 6 4 2 5
// 2 7 6 4 3 5 8 1 9
// 5 1 9 2 4 7 3 8 6
// 7 6 2 5 8 3 1 9 4
// 3 8 4 9 6 1 7 5 2
// 9 5 7 6 1 4 2 3 8
// 4 3 8 7 2 9 5 6 1
// 6 2 1 3 5 8 9 4 7

// eslint-disable-next-line consistent-return
function prettyBoard(puzzle) {
  if (isSolved(puzzle)) {
    return puzzle.map((el) => el.join(' ')).join('\n');
  }
}

// запуск
const sudoku = read(0);
console.log('исходное судоку:');
console.log(prettyBoard(sudoku));

// решенное судоку
console.log('\n');
console.log('решенное судоку:');
solveSudoku(sudoku, 0, 0);
console.log(prettyBoard(sudoku));
