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

//Переворачивает матрицу
function transpose(arr) {
    return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
}

//Принимает i-й массив. Определяет есть ли число в строке.
function includeInRow(arrRow, num) {
	return arrRow.includes(num);
}

//Принимает index столбца. Определяет есть ли число в столбце.
function includeInCol(arr, index, num) {
	let newArr = transpose(arr);

	return newArr[index].includes(num);
}

//Принимает массив из значений в квадрате. Определяет есть ли число в квадрате.
function includeInSquare(arrSquare, num) {
	return arrSquare.includes(num);
}

//Принимает исходный массив. Расставляет числа по ячейкам.
function setNumbers(arr) {
	for (let i = 0; i < arr.length; i++) {
		
	}

	return newArr;
}

function parseBoard(arr) {

	return arr.split('');
}


module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}

function getSquare(arr, row, col) {
	let newArr = [];
	xSquare = Math.floor(row / 3)
	ySquare = Math.floor(col / 3)
  
	for (let r = 0; r < 9; r++) {
	  if (Math.floor(r / 3) === xSquare) {
		for (let c = 0; c < 9; c++) {
		  if (Math.floor(c / 3) === ySquare) {
			newArr.push(arr[r][c])
		  }
		}
	  }
	}
	return newArr;
  }