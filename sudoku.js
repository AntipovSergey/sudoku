// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  while (checkResult(initialBoard)) {
    for (let i = 0; i < initialBoard.length; i++) {
      for (let j = 0; j < initialBoard.length; j++) {
        if (tempBoard[i][j] === '.') {
          tempBoard[i][j] = [];
          for (let k = 1; k <= 9; k++) {
            if (checkLine(tempBoard, [i, j], k) && checkColumn(tempBoard, [i, j], k) && checkBox(tempBoard, [i, j], k)) {
              tempBoard[i][j].push(k);
            }
          }
        }
      }
    }
  }
}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function checkResult(board) {

}




// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  console.log(Привет);

}

function validate() {

}

// 

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
