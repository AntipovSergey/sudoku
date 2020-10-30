// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

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

/*// циклы прохода вокруг
for(let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let x_near = x + i;
            let y_near = y + j;
            if (i === 0 && j === 0) continue;
            if (board[x_near][y_near] !== '-')//вычеркиваем если цифра из массива
                var_numbers//стереть нужную цифру
        }
    }
*/
