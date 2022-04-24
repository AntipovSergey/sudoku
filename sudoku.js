// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

// Custom function: delete item from array
function removeItem(arr, value) {
  return arr.filter((ele) => ele != value);
}

function solve(boardString) {
  // console.log('first changes');

  // Convert string into array[array of numbers]
  const board = [];
  for (let i = 0; i < 81; i += 9) {
    board.push(boardString.replaceAll('-', 0).slice(i, i + 9).split('').map(Number));
  }
  // console.table(board); // testing
  //   console.log(board); // testing
'
'
//   return board;
  return runner(board);
}

// Runner
function runner(board, indexRow = 0, indexColumn = 0) {
  console.table(board) // testing
  if (arguments.length > 1){
    for ( let y = indexColumn; y < board.length; y++) {
      x = 0
      for (let x = indexRow; x <board.length; x++) {
        // console.log(board[y][x]); // testing
          if (board[y][x] === 0) {
            return checkString(board, x, y);
          }
      }
  }
  }
    for ( let y = 0; y < board.length; y++) {
        for (let x = 0; x <board.length; x++) {
          // console.log(board[y][x]); // testing
            if (board[y][x] === 0) {
              return checkString(board, x, y);
            }
        }
    }
};


function checkString(board, x, y) {
  let options = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let rowI = 0; rowI < 9; rowI++) {
    // console.log(board[x][rowI]) // testing
    if (options.includes(board[y][rowI])) {
      // console.log(board[y][rowI]) // testing
      // console.table(options) // testing
      options = removeItem(options, board[y][rowI]);
      // console.table(options) // testing
      if (options.length === 1){
        board[x][y] = [...options];
        console.table(board)
        console.log(board)[y[rowI]
        break                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      } 
    }
  }
  return checkColumn(board, x, y, options);
}


// Check column

function checkColumn(board, indX, indY, options){
  for (let y = 0; y < board.length; y += 1){
    // console.log(board[y][indX]) // testing
    if (options.includes(board[y][indX])) options = removeItem(options, board[y][indX])
    // console.log(options) // testing
    if (options.length === 1) {
      board[indY][indX] = options[0]
      console.log(board)
      console.log[indY][indX]
      break
      // return runner(board)
    }
  }
  return groupCheck(board, indX, indY, options)
}


function groupCheck(board, indexRow, indexColumn, options) {
  const row = Math.floor(indexRow / 3) * 3; // старт строки
  // console.log(row); // testing
  const colomn = Math.floor(indexColumn / 3) * 3; // старт столбца
  // console.log(colomn); // testing
  const endRow = row + 2; // старт строки
  // console.log(endRow); // testing
  const endColomn = colomn + 2; // старт столбца
  // console.log(endColomn); // testing
  for (let yy = colomn; yy < endColomn; yy += 1) { // цикл проверки первого ряда в группе
    for (let xx = row; xx < endRow; xx += 1) {
      // console.log(board[yy][xx]) // testing
      // console.table(options) // testing
      if (options.includes(board[yy][xx])) options = removeItem(options, board[yy][xx])
      if (options.length === 1) {
        board[indexColumn][indexRow] = options[0]
        console.table(board)
        console.log(board[indexColumn][indexRow])
        break
        // return runner(board)
      }
    }
  }
  return runner(board, indexRow+1)
}
// console.log(groupCheck(board, 2, 7, [1, 3]));

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

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
//   groupCheck,
};
