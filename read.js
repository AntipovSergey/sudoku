const fs = require("fs");

function createAllBoards() {
  const allBoard = fs.readFileSync("./puzzles.txt", "utf-8").trim().split("\n");
  console.log(allBoard); // массив со значениями из txt

  const allBoards = [];
  for (let i = 0; i < allBoard.length; i += 1) {
    const board = [];
    for (let j = 1; j < 81; j += 9) {
      board.push(allBoard[i].split("").slice(j, j + 9));
    }
    allBoards.push(board);
  }
  return allBoards;
}
createAllBoards();

module.exports = createAllBoards;
