// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
    Object.defineProperty(Array.prototype, 'chunk', {
        value: function (chunkSize) {
            let temp = [];

            for (let i = 0; i < this.length; i += chunkSize) {
                temp.push(this.slice(i, i + chunkSize));
            }

            return temp;
        }
    });
    let solvingBoard = boardString.split('').chunk(9);
    let solvedBoard = solving(solvingBoard);
    return solvedBoard;
    // return boardString.split('').chunk(9);
};

function solving(solvingBoard) {
    for (let i = 0; i < solvingBoard.length; i++) {
        for (let j = 0; j < solvingBoard[i].length; j++) {
            if (solvingBoard[i][j] === '-') {
                for (let k = 1; k <= 9; k++) {
                    solvingBoard[i][j] = `${k}`
                }
            }
        }
    }
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
    let seenRow = {},
        seenCol = {},
        seenSubBox = {},
        seen = {}

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let value = grid[row][col];
            if (!(value === '-')) {
                let rowKey = `${row}-${value}`;
                colKey = `${col}-${value}`;
                boxKey = `${Math.floor(row / 3)}-${value}-${Math.floor(col / 3)}`;

                if (seenRow[rowKey] || seenCol[colKey] || seenSubBox[boxKey]) {
                    return false;
                }
                seenRow[rowKey] = true;
                seenCol[colKey] = true;
                seenSubBox[boxKey] = true;
            }
        }
    }

    return true;
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