const squareCellRunner = (squareArr) => {
  let str = "";
  let arr = [];
  for (let i = 0; i < squareArr.length; i++) {
    for (let j = 0; j < 3; j++) {
      str += squareArr[i][j];
      if (str.length === 9) {
        arr.push(str);
        str = "";
      }
    }
  }
  for (let i = 0; i < squareArr.length; i++) {
    for (let j = 3; j < 6; j++) {
      str += squareArr[i][j];
      if (str.length === 9) {
        arr.push(str);
        str = "";
      }
    }
  }
  for (let i = 0; i < squareArr.length; i++) {
    for (let j = 6; j < 9; j++) {
      str += squareArr[i][j];
      if (str.length === 9) {
        arr.push(str);
        str = "";
      }
    }
  }
  return arr;
};

const multiArr = (boardString) => {
  boardString.split("");
  let str = "";
  let multiArr = [];
  for (let i = 0; i < boardString.length; i++) {
    str += boardString[i];

    if (str.length === 9) {
      multiArr.push(str.split(""));
      str = "";
    }
  }
  return multiArr;
};

function findEmptyCell(table) {
  let coordinatesEmptyCell;
  for (let str = 0; str < 9; str++) {
    for (let col = 0; col < 9; col++) {
      if (table[str][col] === "-") {
        coordinatesEmptyCell = [str, col];
        console.log(coordinatesEmptyCell);
      }
      п;
    }
  }
  return null;
}

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log(boardString);
}
// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  // return true;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {}

// Exports all the functions to use them in another file.

module.exports = {
  squareCellRunner: squareCellRunner,
  findEmptyCell: findEmptyCell,
  multiArr: multiArr,
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
