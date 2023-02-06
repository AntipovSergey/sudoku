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

function checkOption(index, board) {
  let rc = i2rc(index);
  let options = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let r = 0; r < 9; r++) {
    if (rc.row === r) {
      continue;
    }
    const i = rc2i(r, rc.column);
    if (options.includes(board[i])) {
      options = options.filter((val) => val !== board[i]);
    }
  }
  for (let c = 0; c < 9; c++) {
    if (rc.column === c) {
      continue;
    }
    const i = rc2i(rc.row, c);
    if (options.includes(board[i])) {
      options = options.filter((val) => val !== board[i]);
    }
  }
  const checkedSquare = square(rc.row, rc.column);
  for (let r = checkedSquare.row; r < checkedSquare.row + 3; r++) {
    for (let c = checkedSquare.column; c < checkedSquare.column + 3; c++) {
      const i = rc2i(r, c);
      if (rc2i(rc.row, rc.column) === i) {
        continue;
      }

      if (options.includes(board[i])) {
        options = options.filter((val) => val !== board[i]);
      }
    }
  }
  return options;
}

// function solve(boardString, index = 0) {
//   let newStr = [...boardString].join("");
//   for (let i = index; i < boardString.length; i++) {
//     if (boardString[i] !== "-") continue;

//     const options = checkOption(i, newStr);
//     if (!options.length) {
//       return false;
//     }
//     if (i === 80) {
//       newStr = newStr.substring(0, i) + options[0] + newStr.substring(i + 1);
//       return newStr;
//     }

//     for (let val = 0; val < options.length; val++) {
//       newStr = newStr.substring(0, i) + options[val] + newStr.substring(i + 1);
//       if (i === 79) {
//         newStr = solve(newStr, i + 1);
//       }
//       if (i === 80) {
//         return solve(newStr, i + 1)
//       }
//       solve(newStr, i + 1);
//     }
//     if (!newStr.includes('-')) {
//       return newStr
//     }
//     return newStr;
//   }
//   return newStr;
// }
function solver(index, board) {
  while (index < 81 && board[index] !== "-") index++;
  if (index === 81) {
    return true;
  }
  const options = checkOption(index, board, value = 0);

  for (let val of options) {
    board[index] = val;
    if (solver(index + 1, board, val)) {
      return board;
    }
  }
  board[index] = "-";
  return false;
}

function solve(boardString, index = 0, val = 0) {
  let newStr = [...boardString];
  const check = solver(index, newStr);
  return check;
  // if (val) {
  //   newStr[index - 1] = val;
  // }
  // while (boardString[index] !== "-" && index < 81) {
  //   index++;
  // }
  // if (!newStr.includes("-")) {
  //   return newStr;
  // }
  // const options = checkOption(index, newStr.join(""));
  // if (!options.length) {
  //   newStr[index - 1] = "-";
  //   return newStr;
  // }
  // if (index === 80) {
  //   newStr[80] = options[0];
  //   return newStr;
  // }
  // for (let val = 0; val < options.length; val++) {
  //   solve(newStr.join(""), index + 1, options[val]);
  // }
  // return newStr;
}

const firstSudoku =
  "----------2-65-------18--4--9----6-4-3---57-------------------73------9----------";

const fnResult =
  "14589267389317642527643581951924738676258319438496175295761423843872956162135894-";

function converter(str) {
  const reg = /(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})+?/g;
  return str.replace(reg, (_, g1, g2, g3, g4, g5, g6, g7, g8, g9) => {
    return `${g1}    ${g2}    ${g3}\n${g4}    ${g5}    ${g6}\n${g7}    ${g8}    ${g9}\n\n`;
  });
}
// console.log(converter(fnResult));
console.log(solve(firstSudoku));

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
