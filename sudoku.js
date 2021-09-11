
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




function makeNumbersSummary(fillValue) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((result, num) => {
    result[num] = fillValue;
    return result;
  }, {});
}


function passRowLoop(board, inputIndices, loopBodyCallback) {
    let lastPredicateTrue = true;

    for (let colI = 0; colI < 9 && lastPredicateTrue; ++colI) {
		lastPredicateTrue = loopBodyCallback(board, inputIndices.rowI, colI);
	}

    return lastPredicateTrue;
}

function passColumnLoop(board, inputIndices, loopBodyCallback) {
    let lastPredicateTrue = true;

    for (let rowI = 0; rowI < 9 && lastPredicateTrue; ++rowI) {
		lastPredicateTrue = loopBodyCallback(board, rowI, inputIndices.colI);
	}

    return lastPredicateTrue;
}

function passSquareLoop(board, inputIndices, loopBodyCallback) {
    let lastPredicateTrue = true;
    let {sqrRowI, sqrColI} = inputIndices;

    for (let rowI = 3*sqrRowI; rowI < 3*(sqrRowI + 1) && lastPredicateTrue; ++rowI) {
		for (let colI = 3*sqrColI; colI < 3*(sqrColI + 1)  && lastPredicateTrue; ++colI) {
			lastPredicateTrue = loopBodyCallback(board, rowI, colI);
		}
	}

    return lastPredicateTrue;
}


function scanContainer(board, inputIndices, passContainerCallback) {
    const isNumberValid = makeNumbersSummary(true);
	let validValues = [];

    let scanPassageCallback = (board, rowI, colI) => {
        const curNumber = board[rowI][colI];

        if ( curNumber !== 0 ) {
			isNumberValid[curNumber] = false;
		}

        return false;
    }

    passContainerCallback(board, inputIndices, scanPassageCallback);

    for (let num = 1; num < 10; ++num) {
		if ( isNumberValid[num] === true ) {
			validValues.push(num);
		}
	}

	return validValues;
}

function scanRow(board, rowI) {
    return scanContainer(board, {rowI: rowI}, passRowLoop);
}

function scanColumn(board, colI) {
    return scanContainer(board, {colI: colI}, passColumnLoop);
}

function scanSquare(board, squareRowI, squareColI) {
    return scanContainer(board, {sqrRowI: squareRowI, sqrColI: squareColI}, passSquareLoop);
}


function checkContainer(board, inputIndices, passContainerCallback) {
    let numberMet = makeNumbersSummary(false);

    let checkPassageCallback = (board, rowI, colI) => {
        const curNumber = board[rowI, colI];
        const numberMetBefore = ( numberMet[curNumber] === true );

        if ( !numberMetBefore ) {
            numberMet[curNumber] = true;
        }

        return numberMetBefore; //if number met before, then stop the passage
    };

    return passContainerCallback(board, inputIndices, checkPassageCallback);
}

function checkRow(board, rowI) {
    return checkContainer(board, { rowI: rowI }, passRowLoop);
}

function checkColumn(board, colI) {
    return checkContainer(board, { colI: colI }, passColumnLoop);
}

function checkSquare(board, squareRowI, squareColI) {
    return checkContainer(board, { sqrRowI: squareRowI, sqrColI: squareColI }, passSquareLoop);
}




function getValidValuesForCell(board, rowI, colI) {
    let rowValidValues = scanRow(board, rowI);
	let colValidValues = scanColumn(board, colI);
	let sqrValidValues = scanSquare(board, Math.floor(rowI/3), Math.floor(colI/3));

	return rowValidValues
		.filter((value) => colValidValues.includes(value))
		.filter((value) => sqrValidValues.includes(value));

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
			valuesSummary[key] = getValidValuesForCell(board, rowI, colI);

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
	let validValues = getValidValuesForCell(board, rowI, colI);

	cellI += 1;
	
	if ( cellI < emptyCells.length ) {
		for (let validValue of validValues) {
			board[rowI][colI] = validValue;
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
