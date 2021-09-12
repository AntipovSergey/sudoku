// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const useRecursiveSolver = true;

  let board = convertBoard(boardString);
  const emptyCells = findEmptyCells(board);

  if ( useRecursiveSolver ) {
    return startRecursion(board, emptyCells);
  } 
  else {
    let maxIterCount = 100;
    let valuesSummary;
    
    while ( cellsQueue.length !== 0 && maxIterCount !== 0 ) {
      valuesSummary = {};
      for (let i = 0; i < cellsQueue.length; ++i) {
        const [rowI, colI] = cellsQueue[i];
        const key = `${rowI}${colI}`;
        valuesSummary[key] = findValidValuesForCell(board, rowI, colI);
        
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
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  let everyCheckSuccessful = true;

  for (let checkNumber = 0; checkNumber < 9 && everyCheckSuccessful; ++checkNumber) {
    everyCheckSuccessful = 
      check(board, passRowLoop,    { rowI: checkNumber }) &&
      check(board, passColumnLoop, { colI: checkNumber }) &&
      check(board, passSquareLoop, { sqrRowI: Math.floor(checkNumber/3), sqrColI: Math.floor(checkNumber/3) });
  }

  return everyCheckSuccessful;
}

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




function startRecursion(board, emptyCells) {
  const solved = isRecursionSuccessful(board, emptyCells, 0);
  
  return board;
}

function isRecursionSuccessful(board, emptyCells, cellI) {
  const [rowI, colI] = emptyCells[cellI];
  const validValues = findValidValuesForCell(board, rowI, colI);
  
  cellI += 1;
  
  if ( cellI !== emptyCells.length ) {
    for (const validValue of validValues) {
      board[rowI][colI] = validValue;
      if ( isRecursionSuccessful(board, emptyCells, cellI) === true ) {
        return true;
      }
      board[rowI][colI] = 0;
    }
  } else {
    board[rowI][colI] = validValues[0];
    return true;
  }
  
  return false;
}




function findEmptyCells(board) {
  let emptyCells = [];
  
  for (let rowI = 0; rowI < 9; ++rowI) {
    for (let colI = 0; colI < 9; ++colI) {
      if ( board[rowI][colI] === 0 ) {
          emptyCells.push([rowI, colI]);
      }
    }
  }
  
  return emptyCells;
}

function findValidValuesForCell(board, rowI, colI) {
  let isNumberValid = { "1": true, "2": true, "3": true, "4": true, "5": true, "6": true, "7": true, "8": true, "9": true };
  
  scan(board, passRowLoop,    isNumberValid, { rowI: rowI });
  scan(board, passColumnLoop, isNumberValid, { colI: colI });
  scan(board, passSquareLoop, isNumberValid, { sqrRowI: Math.floor(rowI/3), sqrColI: Math.floor(colI/3) });
  
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((num) => isNumberValid[num] === true);
}




function scan(board, passContainerCallback, isNumberValid, inputIndices) {
  let scanPassageCallback = (board, rowI, colI) => {
    const curNumber = board[rowI][colI];

    if ( curNumber !== 0 ) {
      isNumberValid[curNumber] = false;
    }

    return true; //continue the passage anyway
  }

  passContainerCallback(board, inputIndices, scanPassageCallback);
}


function check(board, passContainerCallback, inputIndices) {
  const numberMet = { "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false };

  let checkPassageCallback = (board, rowI, colI) => {
    const curNumber = board[rowI][colI];
    const zeroAppeared = curNumber === 0;
    const numberMetBefore = ( numberMet[curNumber] === true );

    if ( !zeroAppeared && !numberMetBefore ) {
      numberMet[curNumber] = true;
    }

    return !zeroAppeared && !numberMetBefore; //if number is equal to zero or was met before, then stop the passage
  };

  return passContainerCallback(board, inputIndices, checkPassageCallback);
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
  let { sqrRowI, sqrColI } = inputIndices;

  for (let rowI = 3*sqrRowI; rowI < 3*(sqrRowI + 1) && lastPredicateTrue; ++rowI) {
    for (let colI = 3*sqrColI; colI < 3*(sqrColI + 1)  && lastPredicateTrue; ++colI) {
      lastPredicateTrue = loopBodyCallback(board, rowI, colI);
    }
  }

  return lastPredicateTrue;
}






// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
  convertBoard: convertBoard
}
