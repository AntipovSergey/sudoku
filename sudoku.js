// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

const arrTest = [
  ['-', '1', '-'], 
  ['2', '-', '1'],
  ['3', '-', '2']];
console.log(arrTest);


function strToArray (boardStr){
  let board = [];
  let nBoard = 9; //размерность судоку
  let k = 0; 
  let subStr;
  for (let i=0; i<8; i++){
    if (k<boardStr.length-9){
      subStr = boardStr.substring(k, k+9).split('');
      arr.push(subStr);
      // arr.push(boardString.substring(k, k+9).split['']);
      
    } else {
      
      arr.push(boardStr.substring(k, k+8).split(''));
      arr.push(boardStr[boardStr.length-1]);
    }

    k=k+9;
    
  }

  console.log(arr);

}

let board1 = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
strToArray(board1);

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

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
