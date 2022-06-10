const fs = require('fs')
let text = fs.readFileSync('sudoku-puzzles.txt', 'utf-8');
let board = text.split('\n')[0]
// console.log(board)

function createBoard(board){
    let arr = [];
    for (let i = 0; i < board.length; i += 9) {
        arr.push(board.slice(i, i+9).split(''))
    }
    console.table(arr)
}
console.log(createBoard(board))

module.exports = {createBoard}