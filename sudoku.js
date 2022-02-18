// Takes a board as a string in the format
// you see in the puzzle file.Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let str = boardString.split('');
  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(str.splice(0, 9))
  }
  return arr;
  console.log('first changes');
}
console.log(solve('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3'))
let str = ''

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  let mainArray = solve('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3')
  for (let y = 0; i < mainArray.length; y++) {
    if (mainArray[0][y] === '-') {

    }
    for (let x = 0; i < mainArray.length; x++) {
      if (mainArray[y][x] === '-') {

      }
    }

  }
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
