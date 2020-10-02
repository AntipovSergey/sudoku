let board = [
  [ 5, 0, 0,  6, 7, 8,  0, 0, 0 ],
  [ 6, 0, 0,  0, 0, 0,  0, 0, 0 ],
  [ 1, 0, 0,  0, 4, 2,  0, 0, 7 ],

  [ 8, 0, 9,  0, 0, 1,  0, 2, 3 ],
  [ 0, 0, 0,  0, 0, 0,  7, 0, 1 ],
  [ 7, 0, 0,  0, 0, 0,  0, 5, 0 ],

  [ 9, 0, 1,  5, 3, 0,  0, 0, 4 ],
  [ 0, 0, 0,  0, 0, 0,  0, 0, 0 ],
  [ 0, 0, 0,  0, 0, 0,  0, 0, 0 ],
];

let firstStringFromTXT = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'


// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {}

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
  const myString = board.replace(/\-/g, '0');
  const myBoard = [];
  let arr = [];
  for (let i = 0; i < myString.length; i++) {
    arr.push(+myString[i])
    if (arr.length === 9) {
      myBoard.push(arr);
      arr = [];
    }
  }
   return myBoard;
}

function getRow(board, rowIindex) {
  return board[rowIindex];
}

function getColumn(board, columnIndex) {
  let column = [];
  for (let i = 0; i < 9; i++) {
    column.push(board[i][columnIndex]);
  }
  return column;
}

function getSquare(board, rowIndex, columnIndex) {
  let square = [];
  let rowIndexes;
  let columnIndexes;

  rowIndexes = rowIndex < 3 ? [0, 1, 2] : rowIndex < 6 ? [3, 4, 5] : [6, 7, 8];
  columnIndexes =
    columnIndex < 3 ? [0, 1, 2] : columnIndex < 6 ? [3, 4, 5] : [6, 7, 8];

  for (let i = rowIndexes[0]; i <= rowIndexes[2]; i++) {
    for (let j = columnIndexes[0]; j <= columnIndexes[2]; j++) {
      square.push(board[i][j]);
    }
  }

  return square;
}

function getCellVariants(row, column, square) {
  let cellVariants = [];
  for (let i = 1; i <= 9; i++) {
    if (!row.includes(i) && !column.includes(i) && !square.includes(i)) {
      cellVariants.push(i);
    }
  }
  return cellVariants;
}

function getRandomCellVariant(cellVariants) {
  let index = Math.floor(Math.random() * cellVariants.length);
  return cellVariants[index];
}

function replaceAllZeros(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let row = getRow(board, i);
      let column = getColumn(board, j);
      let square = getSquare(board, i, j);

      if (board[i][j] === 0) {
        let variants = getCellVariants(row, column, square);
              // console.log(variants);
        let randomVariant = getRandomCellVariant(variants);
        // console.log(randomVariant);
        if (randomVariant === undefined) {
          // console.log('<<<<', i,j, variants);
           return false;
        }
        // console.log(i, j)
        board[i][j] = randomVariant;
      }
    }
  }
  return board;
}

// let newBoard = replaceAllZeros(board);
// console.log(newBoard);

while ( true) {
  const boardCopy = JSON.parse(JSON.stringify(board))
  const res = replaceAllZeros(boardCopy)
  if (res) {
    console.table(res);
    break;
  }
}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
  getRow: getRow,
  getSquare: getSquare,
  getCellVariants: getCellVariants,
  getRandomCellVariant: getRandomCellVariant,
  replaceAllZeros: replaceAllZeros,
  getColumn: getColumn,
}

