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
function getRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}
const randomNumber = getRandomNumber();
// console.log(randomNumber);

function isSolved(board) {
  // Стек для хранения ячеек
  // ищет пустое место в массиве
  // if (board) {
  //   for (let i = 0; i < board.length; i += 1) {
  //     for (let j = 0; j < board.length; j += 1) {
  //       if (board[i][j] === '-') {
  //         return [i, j];
  //       }
  //     }
  //   }
  //   return [i, j];
  // }

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === '-') {
        findNumberToPlace(row, col);
      }
    }
  }

  function findNumberToPlace(row, col) {
    for (let i = 1; i < 4; i += 1) {
      if (isValid(row, col, i.toString())) {
        board[row][col] = i.toString();
      }
    }
  }

  function isValid(row, col, num) {
    // Проверка по столбцу
    for (let i = 0; i < 3; i++) {
      if (board[i][col] === num) {
        return false;
      }
    }

    // Проверка по строке
    for (let j = 0; j < 3; j++) {
      if (board[row][j] === num) {
        return false;
      }
    }

    // Проверка внутри квадрата 3x3
    // const startRow = Math.floor(row / 3) * 3;
    // const startCol = Math.floor(col / 3) * 3;

    // for (let i = startRow; i < startRow + 3; i++) {
    //   for (let j = startCol; j < startCol + 3; j++) {
    //     if (board[i][j] === num) {
    //       return false;
    //     }
    //   }
    // }

    return true;
  }

  return board;
}
// Тест поиска!

let puzzle = [
  ['1', '-', '3'],
  ['-', '3', '-'],
  ['3', '1', '2'],
];
console.log(isSolved(puzzle));

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
// for (let i = 0; i < 1; i += 1) {
//   for (let j = 1; j < board.length; j += 1) {
//     if (board[i][j] === j) {
//       return [i, j];
//     }
//   }

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
// function solve(boardString) {
//   const stack = []; // Стек для хранения ячеек
//   let cellIndex = 0; // Индекс текущей ячейки

// Заполнение стека пустыми ячейками
// for (let row = 0; row < 9; row++) {
//   for (let col = 0; col < 9; col++) {
//     if (board[row][col] === 0) {
//       stack.push({ row, col });
//     }
//   }
// }

// let cellIndex = 0; // Индекс текущей ячейки

// while (cellIndex >= 0 && cellIndex < stack.length) {
//   const { row, col } = stack[cellIndex];
//   let num = board[row][col] + 1; // Попытка следующего числа

//   let found = false;

//   while (!found && num <= 9) {
//     if (isValidMove(board, row, col, num)) {
//       found = true;
//       board[row][col] = num;
//       cellIndex++;
//     } else {
//       num++;
//     }
//   }

//   if (!found) {
//     board[row][col] = 0; // Сброс текущей ячейки
//     cellIndex--;
//   }
// }

// return board;
