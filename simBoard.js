const fs = require('fs')

function createBoard () {
    let allBoards = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8').split('\n')
    let firstBoard = allBoards[0].split('')
    let board = []
    for (let i = 0; i < 81; i += 9) {
        board.push(firstBoard.slice(i, i + 9))
    }
    return board
}



function createAllBoard () {
    let allBoard = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8').split('\n')
    let allBoards =[]
    let board = []
    for (let i = 0; i < 9; i += 1) {
        let firstBoard = allBoard[i].split('')
        for (let i = 0; i < 81; i += 9) {
            board.push(firstBoard.slice(i, i + 9))
        }
        allBoards.push(board)
    }
    return allBoards
}


// console.log(createAllBoard())
module.exports = createBoard
// module.exports = createAllBoard
