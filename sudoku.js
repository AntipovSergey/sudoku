

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
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}
//Поиск числа в горизонтальной строке
function searchWordHorizontal (num,arr) {
  let ArrElemToString = arr.map(el => el.join(''))
  for (let i = 0; i < ArrElemToString.length; i++) {
    if(ArrElemToString[i].includes(num)) {
      return true;
    }
    
  }
  return false;
}

// Поиск числа в вертикальной строке
function searchWordVertical (num,arr) {
  for (let i = 0; i < arr.length; i++) {
    let verticalWord = '';
    for (let j = 0; j < arr.length; j++) {
      verticalWord += arr[j][i]      
    }
    if(verticalWord.includes(num)) {
      return true
    }
  }
  return false
}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
