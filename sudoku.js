// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {
  const board = [];
  console.log(boardString);
  for (let i = 0; i < 9; i++) {
    board.push(
      boardString.slice(i * 9, i * 9 + 9)
        .split('')
        .map((el) => {
          if (el === '-') {
            return 0;
          } return Number(el);
        }),
    );
  }
 

  const size = 9;
  const boxSize = 3;
  
  function findEmpty(board)  {
  for (let r = 0; r < size; r++) {
    for ( let c = 0; c < size; c++) {
      if ( board[r][c] === 0) {
        return [r,c];
      }
    }
  }
  return null;
}

//

function solveOne (board) {
  const currPos = findEmpty(board)
  console.log(currPos, "currPos");
  if (currPos === null) {
    return true;
  }  
  for ( let i = 1; i < size+1 ; i++) {
    const currNum = i;
    const isvalid = validate(currNum,currPos,board);
  } return false;
}
console.log(solveOne(board));

function validate(num,pos,board) {
  const [r,c] = pos;
  // проверка (rows) 
  for ( let i = 0; i < size; i++) {
    if (board[i][c] === num && i !== r) {
      return false;
    }
  }
  console.log();
  // проверка (col) 
  for ( let i = 0; i < size; i++) {
    if (board[r][i] === num && i !== c) {
      return false;
    }
 }
 //проверка 3x3
  const boxRow = Math.floor(currentRow / 3) * 3;
  const boxCol = Math.floor(currentCol / 3) * 3;
    for (let i = 1; i < boxRow + 3; i++) {
    for (let j = 1; i < boxCol + 3; j++) {
      if (board[i][j] === currentNum && i !== currentRow && j !== currentCol) {
        return false; //!== currentRow && j !== currentCol исключает проверку текущего числа
      }
    }
  }
  console.log(boxRow, "row");
  console.log(boxCol, "col");


  return true;
}
}




// solve(boardString);
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
};
