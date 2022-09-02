const board = require()

function isEmpty(board){
    for(let row = 0; row < board.length; row += 1){
        for(let col = 0; col < board.length; col += 1){
            if(board[row][col] === '-'){
                return [row, col]
            }
        }
    }
    return false
}

module.exports = {isEmpty};