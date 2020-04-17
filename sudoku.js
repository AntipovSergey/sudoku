// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const fs = require('fs');

function sudokuParse(filename) {
  const text = fs.readFileSync(filename, 'utf8');
  const splitedText = text.split('\n');
  const firstTask = splitedText[0];
  // return firstTask.replace(/-/g, 0).split('');
  return firstTask;
}


const parsedString = sudokuParse('./sudoku-puzzles.txt');

//console.log(parsedString);


let string =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';


function objStringColubBoxes(str) {
  let string = str.split('');
  let size = 9;
  let all = [];
  let cols = new Array(9).fill('')
  for (let i = 0; i < Math.floor(string.length / size); i++) {
    all[i] = string.slice(i * size, i * size + size);

  }
  for (let y = 0; y < all.length; y++) {
    for (let x = 0; x < all.length; x++) {
      cols[y] += all[x][y];
    }  
  }

}
console.table(objStringColubBoxes(string));
//function solve(boardString) {

//}


//// Returns a boolean indicating whether
//// or not the provided board is solved.
//// The input board will be in whatever
//// form `solve` returns.
//function isSolved(board) {

//}


//// Takes in a board in some form and
//// returns a String that's well formatted
//// for output to the screen.
//// The input board will be in whatever
//// form `solve` returns.
//function prettyBoard(board) {

//}

//// Exports all the functions to use them in another file.
//module.exports = {
//	solve: solve,
//	isSolved: isSolved,
//	prettyBoard: prettyBoard
//}
