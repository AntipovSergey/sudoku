// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
let str = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
// checkArr = str.split('', 81)
boardString = str
console.table(solve());
function solve(boardString) {
  let checkArr = []
  
  for (let ind = 0; ind < str.length; ind += 9) {
    checkArr.push(str.slice(ind, ind + 9).split(''))
    
  }
  for (let row = 0; row < checkArr.length; row++) {
    
    for (let col = 0; col < checkArr.length; col++) {
      
      if (checkArr[row][col] === '-') {
      // checkArr.push(row, col)
        for (let count = 1; count <= 9; count++) {
         
          if (!checkArr[row].includes(String(count)) && !checkArr[row][0].includes(String(count))) { //funcA(count, [row, col], boardString)
            checkArr[row][col] = String(count)
          } else{

          }
        }
     
      }

    }

  }
 return checkArr
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

  if (!board.includes('-')) {
    return true
  } else {
    return false
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
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
