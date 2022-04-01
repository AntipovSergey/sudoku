// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log('first changes');

  function sudokuFill(arr) {
    for (let i = 0; i < 9; i += 1) {
      for (let j = 0; j < 9; j += 1) {

      }
    }

    function a(arr) {
    if proverka polnostiu zapolnen { //basoviy sluchai
    return arr;
    }
    ishem diru - nam nuzhni (x, y)  //suda if??
    for i 1 do 9 {
    if proverkaPravil {
    arr[x][y] = i
    arr = a(arr) // СЮДА ИФ?? ili arr = a(arr)
    if arr ne zapolnen {sdelat' diru x,y}
    }
    }
    )
    return arr;
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
  solve,
  isSolved,
  prettyBoard,
};
