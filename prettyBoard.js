let board = [
    [1, 0, 5, 8, 0, 2, 0, 0, 0],
    [0, 9, 0, 0, 7, 6, 4, 0, 5],
    [2, 0, 0, 4, 0, 0, 8, 1, 9],
    [0, 1, 9, 0, 0, 7, 3, 0, 6],
    [7, 6, 2, 0, 8, 3, 0, 9, 0],
    [0, 0, 0, 0, 6, 1, 0, 5, 0],
    [0, 0, 7, 6, 0, 0, 0, 3, 0],
    [4, 3, 0, 0, 2, 0, 5, 0, 1],
    [6, 0, 0, 3, 0, 8, 9, 0, 0]
  ]


  function prettySudoku(board) {
   
    console.log('\n    Welcome to Sudoku! \n')
    for (let i = 0; i < board.length; i++) {
        let row = board[i]
        if (i % 3 === 0) {
        console.log("|=======|=======|=======|")
        }
        console.log("|",
            row[0], 
            row[1], 
            row[2], "|",
            row[3], 
            row[4], 
            row[5], "|",
            row[6], 
            row[7], 
            row[8], "|")
    }
    console.log("|=======|=======|=======|")

    console.log('\n      Solved!')
}


function ifZero(value) {
    if (value === 0) {
        return ' '
    } else {
        return value
    }
}

//console.log(prettySudoku(board))

module.exports = prettySudoku;