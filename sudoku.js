// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}

const testBoard = [
  [1, 0, 5, 8, 0, 2, 0, 0, 0],
  [0, 9, 0, 0, 7, 6, 4, 0, 5],
  [0, 0, 4, 0, 0, 8, 1, 9, 0],
  [1, 9, 0, 0, 7, 3, 0, 6, 7],
  [6, 2, 0, 8, 3, 0, 9, 0, 0],
  [0, 0, 0, 6, 1, 0, 5, 0, 0],
  [0, 0, 7, 6, 0, 0, 0, 3, 0],
  [4, 3, 0, 0, 2, 0, 5, 0, 1],
  [6, 0, 0, 3, 0, 8, 9, 0, 0],
];

// возвращает массив координат пустых ячеек в виде  [[ 4, 8 ], [ 5, 0 ], ...
function findEmptyCells(testBoard) {
  const emptyCells = [];

  for (let i = 0; i < testBoard.length; i += 1) {
    for (let j = 0; j < testBoard[i].length; j += 1) {
      console.log(testBoard[i][j]);
      if (testBoard[i][j] === 0) {
        emptyCells.push([i, j]);
      }
    }
  }
  return emptyCells;
}

// проверяет возможность вставки по блоку 3х3
function checkSquare(testBoard, row, column, value) {
  let columnCorner = 0;
  let rowCorner = 0;
  const squareSize = 3;

  while (column >= columnCorner + squareSize) {
    columnCorner += squareSize;
  }

  while (row >= rowCorner + squareSize) {
    rowCorner += squareSize;
  }

  for (let i = rowCorner; i < rowCorner + squareSize; i += 1) {
    for (let j = columnCorner; j < columnCorner + squareSize; j += 1) {
      if (testBoard[i][j] === value) {
        return false;
      }
    }
  }

  return true;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved() {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}


module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
