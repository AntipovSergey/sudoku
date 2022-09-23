const fs = require('fs');
const board = [];
const puzzle = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n').slice(0, 1)[0]
// console.log(puzzle);
function getBoard(arr) {
  for (let i = 0; i < puzzle.length; i += 9){
    board.push(puzzle.slice(i,i+9).split(''))
  } return board
}
// puzzle.map((el,i) => (board.push([el.slice(i,i+9)])))


getBoard(puzzle)
console.table(board)

function findIndex(arr) {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j <9; i += 1) {
      if (arr[i][j] === '-') return [i,j]
    }
  }
}
console.log(findIndex(board))
