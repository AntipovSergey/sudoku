const { log } = require("console");
const fs = require("fs");
const sudoku = fs.readFileSync("./puzzles.txt", "utf-8");
let sudokutest = sudoku.split("\n");
let newSudoku = sudokutest.map((el) => el.split("")).slice(0, 15);
// console.log(newSudoku[0].length);
function sudokuStr(board) {
  let r = [];
  let r2 = [];

  for (let i = 0; i < board.length; i += 9) {
    r2 = board.slice(i, i + 9);
    r.push(r2);
  }

  return r;
}
console.log(sudokuStr(newSudoku[0]));
// console.log((sudokuStr()));
// let newStr = [];
// for (let i = 1; i < board.length; i++) {
//   for (let y = 0; y < board[i].length; y += 9) {
//     if (board[y] % 9 === 0) {
//       newStr.push(board[i].slice(y,y+=9));
//       console.log(newStr);
//     }else return
//   }
// }
// return newStr
// }

// let myBoard = getBoard(sudokuArr);
/**
 *
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function searchEmpty(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != "number") {
      return true;
    } else {
      serachEmpty(str);
    }
  }

  return false;
}
console.log(
  searchEmpty([
    ["1", "-", "5", "8", "-", "2", "-", "-", "-"],
    ["-", "9", "-", "-", "7", "6", "4", "-", "5"],
    ["2", "-", "-", "4", "-", "-", "8", "1", "9"],
    ["-", "1", "9", "-", "-", "7", "3", "-", "6"],
    ["7", "6", "2", "-", "8", "3", "-", "9", "-"],
    ["-", "-", "-", "-", "6", "1", "-", "5", "-"],
    ["-", "-", "7", "6", "-", "-", "-", "3", "-"],
    ["4", "3", "-", "-", "2", "-", "5", "-", "1"],
    ["6", "-", "-", "3", "-", "8", "9", "-", "-"],
  ])
);

function solve(boardString) {}
// const cord = searchEmpty(boardString);
// if (!cord) return true;

// for (let i = 0; i < boardString.length; i++) {
//   for (let r = 0; r < boardString[i].length; r++) {
//     if (searchEmpty(boardString[i])) {
//       for (let w = 1; w < 9; w++) {
//         if (boardString[i].indexOf(w) === -1) {
//         }
//       }
//     }
//   }
// }
//   function getCoord(row, col) {
//     let block = "";
//     if (row < 3) {
//       if (col < 3) {
//         return (block = 1);
//       } else if (col < 6) {
//         return (block = 2);
//       } else {
//         return (block = 3);
//       }
//     } else if (row < 6) {
//       if (col < 3) {
//         return (block = 4);
//       } else if (col < 6) {
//         return (block = 5);
//       } else {
//         return (block = 6);
//       }
//     } else if (col < 3) {
//       return (block = 7);
//     } else if (col < 6) {
//       return (block = 8);
//     } else {
//       return (block = 9);
//     }
//   }
//   return block;
// }

// function coord(sudoku){
//   let coord ={}
//   for(let row =0;row<9;row++){
//     for(let col =0; col<9;col++){
//       const b =sudoku[row][col]

//     }
//   }
// }

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
  // solve,
  isSolved,
  prettyBoard,
};
