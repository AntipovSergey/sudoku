const fs = require('fs')

function board (){
  let boards = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n')
  console.table(boards)
  let firstBoard = boards[0].split('')
  console.table(firstBoard)
  let board = []
    for (let i = 0; i < 81; i += 9) {
    board.push(firstBoard.slice(i, i + 9))}
    console.table(board)
  return board
}
board()



module.exports = board

