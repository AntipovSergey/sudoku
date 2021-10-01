// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
let reference = 0;
for (let i = 1; i <= 9; i++) {
  reference += i;
}
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    const result = row.reduce((acc, el) => acc + el, 0);
    //  console.log(result)
    if (result !== reference) return false;
  }
  return true;
}

function isSolved2(board) {
  if (checkHorizeontl(board)) {
    newStr = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < 9; j++) {
        const column = board[j][i];
        newStr.push(column);
      }
    }

    const reversedArr = all(newStr);

    return checkHorizeontl(reversedArr);
  }

  return false;
}

function all(newStr1) {
  const result = [];
  for (let i = 0; i < 9; i++) {
    const count = newStr1.slice(0, 9);
    newStr1.splice(0, 9);
    result.push(count);
  }

  return result;
}
all(newStr1);

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
