/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function i2rc(index) {
  return { row: Math.floor(index / 9), column: index % 9 };
}

function rc2i(row, column) {
  return row * 9 + column;
}

function square(row, column) {
  return { row: Math.floor(row / 3) * 3, column: Math.floor(column / 3) * 3 };
}

function predef(board) {
  let str = "";
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "-") {
      str += "0";
    } else {
      str += "1";
    }
  }
  return str;
}

function generateOptions(board, predefined) {
  const arr = [];
  for (let i = 0; i < board.length; i++) {
    if (predefined[i] === "1") {
      arr.push(true);
    } else {
      arr.push([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
  }
  return arr;
}

function checkRow(i, options, board, position) {
  let opt = [...options];
  for (let j = 0; j < 9; j++) {
    const index = rc2i(position.row, j);
    if (position == i2rc(i)) {
      continue;
    }
    if (board[index] !== "-") {
      opt = opt.filter((val) => val != board[index]);
    }
  }
  return opt;
}

function checkColumn(i, options, board, position) {
  let opt = [...options];
  for (let j = 0; j < 9; j++) {
    const index = rc2i(j, position.column);
    if (position == i2rc(i)) {
      continue;
    }
    if (board[index] !== "-") {
      opt = opt.filter((val) => val != board[index]);
    }
  }
  return opt;
}

function checkSquare(options, board, position, squarePos) {
  let opt = [...options];
  for (let r = squarePos.row; r < squarePos.row + 3; r++) {
    for (let c = squarePos.column; c < squarePos.column + 3; c++) {
      const index = rc2i(r, c);
      if (position == index) {
        continue;
      }
      if (board[index] !== "-") {
        opt = opt.filter((val) => val != board[index]);
      }
    }
  }
  return opt;
}

// function checkIfOnlyOneOption(options, position, squarePos) {
//   let checkedOptions = options[rc2i[position]];
//   for (let i = 0; checkedOptions.length; i++) {
//     const checkedValue = options[i];
//     for (let r = squarePos.row; r < squarePos.row + 3; r++) {
//       for (let c = squarePos.column; c < squarePos.column + 3; c++) {
//         const index = rc2i(r, c);
//         if (position == i2rc(index)) {
//           continue;
//         }
//         if (
//           options[rc2i(r, c)] !== true &&
//           options[rc2i(r, c)].includes(checkedValue)
//         ) {
//           continue;
//         } else 
//       }
//     }
//   }
// }

const firstSudoku =
  "---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----";

function solve(boardString) {
  let board = boardString;
  const options = generateOptions(boardString, predef(boardString));
  for (let i = 0; i < board.length; i++) {
    if (options[i] === true) {
      continue;
    }
    const position = i2rc(i);
    // Проверка по ряду
    options[i] = checkRow(i, options[i], board, position);
    // Проверка по колонке
    options[i] = checkColumn(i, options[i], board, position);
    // Проверка по квадрату
    const squarePos = square(position.row, position.column);
    options[i] = checkSquare(options[i], board, position, squarePos);
  }
  let iteration = 0;
  const arrBoard = [...board];
  while (board.includes("-") && iteration < 1_000_000) {
    for (let i = 0; i < board.length; i++) {
      if (options[i] === true) {
        continue;
      }
      if (options[i].length === 1) {
        arrBoard[i] = String(options[i][0]);
      }
      const position = i2rc(i);
      // проверка по строке
      options[i] = checkRow(i, options[i], arrBoard, position);
      // Проверка по колонке
      options[i] = checkColumn(i, options[i], arrBoard, position);
      // Проверка по квадрату
      const squarePos = square(position.row, position.column);
      options[i] = checkSquare(options[i], arrBoard, position, squarePos);
    } 
    iteration++;
  }
  return [options, arrBoard.join("")];
}

function converter(str) {
  const reg = /(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})+?/g;
  return str.replace(reg, (_, g1, g2, g3, g4, g5, g6, g7, g8, g9) => {
    return `${g1}    ${g2}    ${g3}\n${g4}    ${g5}    ${g6}\n${g7}    ${g8}    ${g9}\n\n`;
  });
}

function arrayConverter(arr) {
  let str = "";
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      str += `${i}.${j}| ${arr[rc2i(i, j)]}  |`;
    }
    str += "\n";
  }
  return str;
}

const [options, board] = solve(firstSudoku);
// console.log(converter(firstSudoku));
console.log(arrayConverter(options));
console.log(converter(board));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

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
