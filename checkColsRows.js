let puzzles = [
    ["1", " ", "3", " ", "4", " ", "7", " ", "2"],
    [" ", "2", " ", "5", " ", " ", "9", "1", " "],
    ["1", " ", "3", " ", "3", "2", "7", " ", " "],
    [" ", " ", "6", " ", "4", "6", "7", " ", " "],
    ["4", " ", " ", "1", " ", " ", " ", " ", "6"],
    ["5", " ", " ", " ", "4", " ", " ", "3", " "],
    [" ", "2", "1", " ", " ", " ", " ", " ", "7"],
    [" ", "8", "9", " ", "4", "3", "5", " ", " "],
    [" ", " ", "3", " ", " ", "9", "6", " ", " "],
  ]


// check emty elem in board
function findEmptyElement(board) {

    for (let r = 0; r < board[0].length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (board[r][c] === ' ') {
                return [r, c]
            }
        }
    }

    return null
}

console.log(findEmptyElement(puzzles))

// check valid number in rows and cols
function validate(board, number) {
    
    let num = number.toString()
    let [r, c] = findEmptyElement(board)

    for (let i = 0; i < board[0].length; i++) {
        if (board[i][c] === num && i !== r) {
            return false
        }
    }

    for (let i = 0; i < board[0].length; i++) {
        if (board[r][i] === num && i !== c) {
            return false
        }
    }

    return true
}

console.log(validate(puzzles, 8))

