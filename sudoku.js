
function solve(boardString) {
    const board = boardString
        .replace(/-/g, 0)
        .match(/(\d{9})/g, '$1 ');
        
    for (let i = 0; i < board.length; i++) {
        board[i] = board[i].split('');
    }    
    return board
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
