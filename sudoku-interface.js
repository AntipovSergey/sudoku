// const fs = require('fs');
// import * as fs from 'fs';
// import { fs } from 'fs';

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
const sudoku = read(1);
console.log(sudoku);

function read(puzzleNum) {
  const puzzlesString =
    '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--\n\
--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3\n\
29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9\n\
-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-\n\
6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--\n\
---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----\n\
-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--\n\
-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7\n\
----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----\n\
3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--\n\
3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-\n\
-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-\n\
--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--\n\
----------2-65-------18--4--9----6-4-3---57-------------------73------9----------\n\
---------------------------------------------------------------------------------\n';
  // читаем файл 'puzzles.txt'
  // const puzzle = fs
  //   .readFileSync('puzzles.txt', 'utf-8')
  const puzzle = puzzlesString
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
// const sudoku = read(0);
// console.log('исходное судоку:');
// console.log(prettyBoard(sudoku));

// // решенное судоку
// console.log('\n');
// console.log('решенное судоку:');
// solveSudoku(sudoku, 0, 0);
// console.log(prettyBoard(sudoku));

// read a sudoku

function renderSudoku(sudoku) {
  // render the puzzle
  const container = document.querySelector('.container');
  const puzzle = sudoku;

  let puzzleDiv = document.querySelector('.puzzle');
  if (puzzleDiv) {
    puzzleDiv.remove();
    puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'puzzle';
  } else {
    puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'puzzle';
  }

  for (let i = 0; i < puzzle.length; i += 1) {
    const puzzleRow = document.createElement('div');
    puzzleRow.className = 'puzzle__row';
    for (let j = 0; j < puzzle[0].length; j += 1) {
      const puzzleLetter = document.createElement('div');
      puzzleLetter.className = 'puzzle__letter';
      puzzleLetter.innerText = puzzle[i][j];
      puzzleRow.append(puzzleLetter);
    }
    puzzleDiv.append(puzzleRow);
  }

  container.append(puzzleDiv);
  return sudoku;
}

// render a sudoku
const buttonRender = document.querySelector('.render');

buttonRender.addEventListener('click', (e) => {
  e.preventDefault();
  const input = document.querySelector('input');
  const sudokuNum = input.value;
  if (sudokuNum) {
    const sudoku = read(+sudokuNum);
    renderSudoku(sudoku);
  }
});

// solve a sudoku
const buttonSolve = document.querySelector('.solve');
buttonSolve.addEventListener('click', (e) => {
  e.preventDefault();
  const input = document.querySelector('input');
  const sudokuNum = input.value;

  if (sudokuNum) {
    const sudoku = read(+sudokuNum);
    solveSudoku(sudoku, 0, 0);
    renderSudoku(sudoku);
  }
});
