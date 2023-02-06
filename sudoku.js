const { prettyBoard } = require("./prettyBoard.js");

function solve(boardString) {
  const bordArray = boardString.split('');
  const size = 9;
  const subarray = [];
  for (let i = 0; i < Math.ceil(bordArray.length / size); i += +1) {
    subarray[i] = bordArray.slice(i * size, i * size + size);
  }
  return subarray;
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
