<<<<<<< HEAD
const fs = require('fs')


function read() {
  let allBoard = fs
    .readFileSync('./puzzles.txt', 'utf-8')
    .trim()
    .split('\n');
    // console.log(allBoard) // массив со значениями из txt 
=======
const fs = require("fs");

function createAllBoards() {
  const allBoard = fs.readFileSync("./puzzles.txt", "utf-8").trim().split("\n");
>>>>>>> a1c21e937f450830e84285155c7caf9c1e8a6ccd

  const allBoards = [];
  for (let i = 0; i < allBoard.length; i += 1) {
<<<<<<< HEAD
    let board = [];
    for (let j = 0; j < 81; j += 9) {
      board.push(allBoard[i].split('').slice(j, j + 9));
    }
    allBoards.push(board);
    // console.log(allBoards.join)
=======
    const board = [];
    for (let j = 0; j < 81; j += 9) {
      board.push(allBoard[i].split("").slice(j, j + 9));
    }
    allBoards.push(board);
>>>>>>> a1c21e937f450830e84285155c7caf9c1e8a6ccd
  }
  console.table(allBoards[0])
  return allBoards;
  
}
<<<<<<< HEAD
read()


// function row(){
//   let row = []
//   for (let i = 0; i < all.length; i++){
//  row.push(i)
//   }
//   return row
// }
// (row)

module.exports = read
=======
createAllBoards();
>>>>>>> a1c21e937f450830e84285155c7caf9c1e8a6ccd

module.exports = createAllBoards;
