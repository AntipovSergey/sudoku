
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function convertBoard(str) {
	const numberArr = str.replace(/\-/g, '0').split('')
	let newBoard = []
	let row = []
	for (let i = 0; i < numberArr.length; i++) {
	  row.push(+numberArr[i])
	  if(row.length === 9){
		newBoard.push(row)
		row = []
	  }
	}
	return newBoard;
}

function getInitialPossibleValues() {
	return [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((result, num) => { 
		result[num] = true;
		return result;
	}, {});
}

function scanRow(board, rowI) {
	const possibleValues = getInitialPossibleValues();
	let result = { possibleIndices: [], possibleValues: [] };

	for (let colI = 0; colI < 9; ++colI) {
		if ( board[rowI][colI] === 0 ) {
			result.possibleIndices.push(colI);
		} else {
			possibleValues[board[rowI][colI]] = false;
		}
	}

	for (let num = 1; num < 10; ++num) {
		if ( possibleValues[num] === true ) {
			result.possibleValues.push(num);
		}
	}

	return result;
}

function scanColumn(board, colI) {
	const possibleValues = getInitialPossibleValues();
	let result = { possibleIndices: [], possibleValues: [] };

	for (let rowI = 0; rowI < 9; ++rowI) {
		if ( board[rowI][colI] === 0 ) {
			result.possibleIndices.push(rowI);
		} else {
			possibleValues[board[rowI][colI]] = false;
		}
	}

	for (let num = 1; num < 10; ++num) {
		if ( possibleValues[num] === true ) {
			result.possibleValues.push(num);
		}
	}

	return result;
}

function scanSquare(board, squareRowI, squareColI) {
	const possibleValues = getInitialPossibleValues();
	let result = { possibleIndices: [], possibleValues: [] };

	for (let rowI = 3*squareRowI; rowI < 3*(squareRowI + 1); ++rowI) {
		for (let colI = 3*squareColI; colI < 3*(squareColI + 1); ++colI) {
			if ( board[rowI][colI] === 0 ) {
				result.possibleIndices.push([rowI, colI]);
			} else {
				possibleValues[board[rowI][colI]] = false;
			}
		}
	}

	for (let num = 1; num < 10; ++num) {
		if ( possibleValues[num] === true ) {
			result.possibleValues.push(num);
		}
	}

	return result;
}

function getPossibleValuesForCell(board, rowI, colI) {
	let rowPossibleValues = scanRow(board, rowI).possibleValues;
	let colPossibleValues = scanColumn(board, colI).possibleValues;
	let sqrPossibleValues = scanSquare(board, Math.floor(rowI/3), Math.floor(colI/3)).possibleValues;

	return rowPossibleValues
		.filter((value) => colPossibleValues.includes(value))
		.filter((value) => sqrPossibleValues.includes(value));

}

let sampleBoard = [
	[1, 0, 5, 8, 0, 2, 0, 0, 0],
	[0, 9, 0, 0, 7, 6, 4, 0, 5],
	[2, 0, 0, 4, 0, 0, 8, 1, 9],
	[0, 1, 9, 0, 0, 7, 3, 0, 6],
	[7, 6, 2, 0, 8, 3, 0, 9, 0],
	[0, 0, 0, 0, 6, 1, 0, 5, 0],
	[0, 0, 7, 6, 0, 0, 0, 3, 0],
	[4, 3, 0, 0, 2, 0, 5, 0, 1],
	[6, 0, 0, 3, 0, 8, 9, 0, 0]
];

// console.log(getPossibleValuesForCell(sampleBoard, 4, 6));

function getEmptyCells(board) {
	let cellsQueue = [];

	for (let i = 0; i < 9; ++i) {
		for (let j = 0; j < 9; ++j) {
			if ( board[i][j] === 0 ) {
				cellsQueue.push([i, j]);
			}
		}
	}

	return cellsQueue;
}

function solveInner(board) {
	let emptyCellsIndices = getEmptyCells(board);
	let [rowI, colI] = emptyCellsIndices[emptyCellsIndices.length - 1];

	const possibleValues = getPossibleValuesForCell(board, rowI, colI);

	for (let possibleValue of possibleValues)
	{
		if ( solveInnerRecurr(board, emptyCellsIndices, possibleValue, emptyCellsIndices.length) ) {
			break;
		}
	}

	return board;
}

function solveInnerRecurr(board, emptyCellsIndices, proposedCellValue, emptyCellsLength) {
	let success = false;
	
	let curCellIndices = emptyCellsIndices[emptyCellsLength - 1];
	let [rowI, colI] = curCellIndices;

	board[rowI][colI] = proposedCellValue;
	--emptyCellsLength;

	curCellIndices = emptyCellsIndices[emptyCellsLength - 1];
	[rowI, colI] = curCellIndices;

	let possibleValues = getPossibleValuesForCell(rowI, colI);

	if ( possibleValues.length !== 0 ) {
		for (let possibleValue of possibleValues)
		{
			if ( solveInnerRecurr(board, emptyCellsIndices, possibleValue, emptyCellsLength) ) {
				success = true;
				break;
			}
		}
		return success;
	} else {
		return false;
	}
}

function solveInnerIter(board) {
	let cellsQueue = getEmptyCells(board);

	let maxIterCount = 100;

	let valuesSummary;
	console.table(board);
	while ( cellsQueue.length !== 0 && maxIterCount !== 0 ) {
		valuesSummary = {};
		for (let i = 0; i < cellsQueue.length; ++i) {
			const [rowI, colI] = cellsQueue[i];
			const key = `${rowI}${colI}`;
			valuesSummary[key] = getPossibleValuesForCell(board, rowI, colI);

			if ( valuesSummary[key].length === 1 ) {
				board[rowI][colI] = valuesSummary[key][0];
				delete valuesSummary[key];
				cellsQueue.splice(i, 1);
			}
		}
		--maxIterCount;
	}

	console.log(Object.values(valuesSummary).length);

	return board;
}

function solve2(boardString) {
	solveInnerIter(convertBoard(boardString));
}

function solve1(boardString) {
	solveInner(convertBoard(boardString));
}

solve1("----------2-65-------18--4--9----6-4-3---57-------------------73------9----------");


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
 let resultStr = ''
 //if (board === undefined) return resultStr
 for (let i = 0; i < board.length; i++){
   resultStr += board[i].join(' ') + '\n'
 }
 return resultStr
}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
