const { prettyBoard } = require("./prettyBoard.js");

function solve(boardString) {
  boardString =
    "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
  const bordArray = boardString.split("");
  let size = 9;
  let subarray = [];
  for (let i = 0; i < Math.ceil(bordArray.length / size); i++) {
    subarray[i] = bordArray.slice(i * size, i * size + size);
  }
}

function isSolved(board) {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j].indexOf("-") > -1) {
        return false;
      }
    }
  }
  return true;
}

// const sud1 = [
//   ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
//   ["4", "5", "6", "7", "8", "9", "1", "2", "3"],
//   ["7", "8", "9", "1", "2", "3", "4", "5", "6"],
//   ["2", "1", "4", "3", "6", "5", "8", "9", "7"],
//   ["3", "6", "5", "8", "9", "7", "2", "1", "4"],
//   ["8", "9", "7", "2", "1", "4", "3", "6", "5"],
//   ["5", "3", "1", "6", "4", "2", "9", "7", "8"],
//   ["6", "4", "2", "9", "7", "8", "5", "3", "1"],
//   ["9", "7", "8", "5", "3", "1", "6", "4", "2"],
// ];

// console.log(prettyBoard(sud1));

// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
// };
