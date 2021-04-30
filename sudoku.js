// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  
  function createArray(string) {
    let arr = [];
    for (let i = 0; i < string.length; i = i + 9) {
      arr.push(string.slice(i, i + 9));
    }
    for (let j = 0; j < arr.length; j++) {
      arr[j] = arr[j].split("");
      for (let k = 0; k < arr[j].length; k++) {
        if (arr[j][k] != "-") {
          arr[j][k] = Number(arr[j][k]);
        }
      }
    }
    return arr;
  }
}


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
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
