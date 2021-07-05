// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const sudokuBoard = boardString.split('').map((el) => Number(el) ? Number(el) : null);
  const sudokuArr = [];

  if (boardString.length > 81) return 'Неправильный формат судоку';

  for (let i = 0; i < boardString.length; i += 9) {
    sudokuArr.push(sudokuBoard.slice(i, i + 9));
  }
  // return sudokuArr;
  for (let i = 0; i < sudokuArr.length; i += 1) {
    let countLength = 0;
    if (sudokuArr[i].reduce((acc, el) => acc + Number(el)) === 45) {
      // console.log(countLength);
      continue;
    }
    else (sudokuArr[i].filter( (el) => Number(el) ? countLength +=1 : countLength +=0 ) );
    // console.log(countLength);
  }
}

solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');

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
  const sudokuBoard = board.split('').map((el) => Number(el) ? Number(el) : null);
  const sudokuArr = [];
  if (board.length > 81) return "Неправильный формат судоку"

  for (let i = 0; i < board.length; i += 9) {
    sudokuArr.push(sudokuBoard.slice(i, i + 9));
  }
  return sudokuArr;
}
// console.table(prettyBoard('123456789fffffffffzzzzzzzzzooooooooojjjjjjjjjnnnnnnnnnmmmmmmmmmlllllllllkkkkkkkkk'))

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}



// sudokuBoard.push( board[i].split('').flatMap(x => [[x]]) );
    // if (i < 8) {
    //   sudokuBoard[0].push(board[i]);
    // }
    // if (i > 8 && i < 16) {
    //   sudokuBoard[1].push(board[i]);
    // }
    // if (i > 16 && i < 24) {
    //   sudokuBoard[2].push(board[i]);
    // }
    // if (i > 24 && i < 32) {
    //   sudokuBoard[3].push(board[i]);
    // }
    // if (i > 32 && i < 40) {
    //   sudokuBoard[4].push(board[i]);
    // }
    // if (i > 40 && i < 42) {
    //   sudokuBoard[3].push(board[i]);
    // }

  // }
