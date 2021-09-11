
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
    if (row.length === 9) {
      newBoard.push(row)
      row = []
    }
  }
  return newBoard
}

function getNumberSummary() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((result, num) => {
    result[num] = true;
    return result;
  }, {});
}

function checkRow(board, rowI) {
  const obj = getNumberSummary();
  let rowCheck = 0;
  for (let colI = 0; colI < 9; ++colI) {
    if (obj[board[rowI][colI]] === true) {
      rowCheck += 1
    } else {
      return false; b
    }
  }
  return rowCheck;
}

function checkColumn(board, colI) {
  const obj = getNumberSummary();
  let colCheck = 0
  for (let rowI = 0; rowI < 9; ++rowI) {
    if (obj[board[rowI][colI]] === true) {
      colCheck += 1
    } else {
      return false;
    }
  }
  return colCheck;
}

function checkSquare(board, squareRowI, squareColI) {
  const obj = getNumberSummary();
  let squareCheck = 0;
  for (let rowI = 3 * squareRowI; rowI < 3 * (squareRowI + 1); ++rowI) {
    for (let colI = 3 * squareColI; colI < 3 * (squareColI + 1); ++colI) {
      if (obj[board[rowI][colI]] === true) {
        squareCheck += 1
      } else {
        return false;
      }
    }
  }
  return squareCheck;
}

function scanRow(board, rowI) {
	const possibleValues = getNumberSummary();
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
	const possibleValues = getNumberSummary();
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
	const possibleValues = getNumberSummary();
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

function solveInnerIter(board) {
	let cellsQueue = getEmptyCells(board);
	let maxIterCount = 100;
	let valuesSummary;

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

	return board;
}

function isRecursionSuccessful(board, emptyCells, cellI) {
	let [rowI, colI] = emptyCells[cellI];
	let possibleValues = getPossibleValuesForCell(board, rowI, colI);

	cellI += 1;
	
	if ( cellI < emptyCells.length ) {
		for (let possibleValue of possibleValues) {
			board[rowI][colI] = possibleValue;
			if ( isRecursionSuccessful(board, emptyCells, cellI) === true ) {
				return true;
			}
			board[rowI][colI] = 0;
		}
	} else {
		return true;
	}

	return false;
}

function startRecursion(board, emptyCells) {
    const solved = isRecursionSuccessful(board, emptyCells, 0);

    return board;
}

function solve(boardString) {
    // итеративное решение (решает первые 5 задач):
	// return solveInnerIter(convertBoard(boardString));

    // рекурсивное решение (решает все варианты (правильно ли?)):
    let board = convertBoard(boardString);
    const emptyCells = getEmptyCells(board);

    return startRecursion(board, emptyCells);
}

console.table(solve("--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--"))

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.



// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.



function prettyBoard(board) {
  let resultStr = ''
  //if (board === undefined) return resultStr
  for (let i = 0; i < board.length; i++) {
    resultStr += board[i].join(' ') + '\n'
  }
  return resultStr
}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
//   isSolved: isSolved,
  prettyBoard: prettyBoard
}
