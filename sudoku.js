
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
        qwuareCheck += 1
      } else {
        return false;
      }
    }
  }
  return qwuareCheck;
}
console.log(checkColumn());
console.log(checkRow());
console.log(checkSquare());



function solve(boardString) {
  // convertBoard(boardString)

}


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
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
