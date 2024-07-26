const fs = require("fs");

function createAllBoards() {
  const allBoard = fs.readFileSync("./puzzles.txt", "utf-8").trim().split("\n");

  const allBoards = [];
  for (let i = 0; i < allBoard.length; i += 1) {
    const board = [];
    for (let j = 0; j < 81; j += 9) {
      board.push(allBoard[i].split("").slice(j, j + 9));
    }
    allBoards.push(board);

  }
  console.table(allBoards[0])
  return allBoards;
  
}

createAllBoards();


module.exports = createAllBoards;
