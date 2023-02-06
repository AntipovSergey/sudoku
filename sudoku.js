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
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
