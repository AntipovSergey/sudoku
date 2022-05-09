//num - подставляемое число

function checkSquare(num, pos, board) {
  const [r, c] = pos; //Деструктуризация получаем данные о позиции
  const boxRow = Math.floor(r / 3) * 3;
  const boxCol = Math.floor(c / 3) * 3;

  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (board[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}

//example [1,1] - верхний левый угол  [0,0]
// const boxRow = Math.floor(1 / 3) * 3;   0*3
// const boxCol = Math.floor(1 / 3) * 3;   0*3

//example [7,7] - верхний левый угол  [6,6]
// const boxRow = Math.floor(7 / 3) * 3;   0*3
// const boxCol = Math.floor(7 / 3) * 3;   0*3

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log("first changes");
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
