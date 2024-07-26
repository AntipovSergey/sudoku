const fs = require('fs')

// function createBoard (){
//   let boards = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n')
//   console.table(boards)
//   let firstBoard = boards[0].split('')
//   console.table(firstBoard)
//   let board = []
//     for (let i = 1; i <= 81; i += 9) {
//     board.push(firstBoard.slice(i, i + 9))}
//     console.table(board)
//   return board
// }
// createBoard()

function createAllBoards() {
  let allBoard = fs
    .readFileSync('./puzzles.txt', 'utf-8')
    .trim()
    .split('\n');
    console.log(allBoard) // массив со значениями из txt 

  let allBoards = [];
  for (let i = 0; i < allBoard.length; i += 1) {
    let board = [];
    for (let j = 1; j < 81; j += 9) {
      board.push(allBoard[i].split('').slice(j, j + 9));
    }
    allBoards.push(board);
    console.log(allBoards.length)
  }
  return allBoards;
}
createAllBoards()

module.exports = createAllBoards

