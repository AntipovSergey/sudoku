const fs = require('fs')


function read() {
  let allBoard = fs
    .readFileSync('./puzzles.txt', 'utf-8')
    .trim()
    .split('\n');
    // console.log(allBoard) // массив со значениями из txt 

  let allBoards = [];
  for (let i = 0; i < allBoard.length; i += 1) {
    let board = [];
    for (let j = 0; j < 81; j += 9) {
      board.push(allBoard[i].split('').slice(j, j + 9));
    }
    allBoards.push(board);
    // console.log(allBoards.join)
  }
  console.table(allBoards[0])
  return allBoards;
  
}
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

