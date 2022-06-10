const fs = require('fs')

function createBoard () {
    let allBoards = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8').split('\n')
    let firstBoard = allBoards[0].split('')
    let board = []
    for (i = 0; i < 81; i += 9) {
        board.push(firstBoard.slice(i, i + 9))
    }
    return board
}
// console.log(createBoard ())
module.exports = createBoard
