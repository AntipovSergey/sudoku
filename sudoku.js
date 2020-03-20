// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}

let correctboardString = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let incorrectboardString = [1, 4, 7, 2, 9, 9, 5, 8, 1];
let incorrectboardString2 = [1, 4, 7, 2, 9, 9, 5, 8, '-'];
let incorrectboardString3 = [1, 2, 3, 4, 5, '-', '-', '-', '-'];

let cCol1 = ['-', 1, 1, 1, 1]
let cCol2 = [2, 2, 2, 2, 2]
let cCol3 = [3, 3, 3, 3, 3]
let cCol4 = [4, 4, 4, 4, 4]
let cCol5 = [5, 5, 5, 5, 5]

let board = [
  cCol1,
  cCol2,
  cCol3,
  cCol4,
  cCol5
]

//РАБОЧЕЕ ДЛЯ СТРОК:
// function legalBoard(board) {
//   for (let i = 0; i < board.length; i++) {
//     let checkArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     for (let j = 0; j < board[i].length; j++) {
//       if (board[i][j] === '-') {
//         continue;
//       }
//       else if (checkArr.includes(board[i][j])) {
//         let checkArrIndex = checkArr.indexOf(board[i][j]);
//         checkArr.splice(checkArrIndex, 1);
//       }
//       else {
//         return false;
//       }
//     }
//   }
//   return true;
// }

//РАБОЧЕЕ ДЛЯ СТОЛБЦОВ:
// function legalBoard(board) {
//   for (let i = 0; i < board.length; i++) {
//     let checkArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     for (let j = 0; j < board[i].length; j++) {
//       if (board[j][i] === '-') {
//         continue;
//       }
//       else if (checkArr.includes(board[j][i])) {
//         let checkArrIndex = checkArr.indexOf(board[j][i]);
//         checkArr.splice(checkArrIndex, 1);
//       }
//       else {
//         return false;
//       }
//     }
//   }
//   return true;
// }

function legalBoard(board) {
  for (let i = 0; i < board.length; i++) {
    let checkArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let j = 0; j < board[i].length; j++) {
      if (checkArr.includes(board[j][i])) {
        let checkArrIndex = checkArr.indexOf(board[j][i]);
        checkArr.splice(checkArrIndex, 1);
        console.log(checkArr);
      }
      else {
        return false;
      }
    }
  }
}

console.log(legalBoard(board));
