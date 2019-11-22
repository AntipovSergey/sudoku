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

// Проверяет горизонталь и вертикаль на возможность добавления числа

function checklLines(array, row, column, element) {
	let result = 0;
	for (let x = 0; x < array[row].length; x++) {
		if (element === array[row][x]){
			result++;
		}
	}

	for (let y = 0; y < array.length; y++) {
		if (array[y][column] === element){
			result++;
		}
	}
    return result === 0;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.


function prettyBoard(board) {

	let arr=[]
	let str=""
	for(let i=0;i<board.length;i+=9){
		for(let j=0;j<9;j++){
			str+=board[i+j]
		}
		arr.push(str)
		str=""
		
	}
	return arr.join(`\n`)

}

module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}


