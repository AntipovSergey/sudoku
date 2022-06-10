// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const fs = require ('fs');

function solve(boardString) {
  
    const arr = fs.readFileSync('./sudoku-puzzles.txt', 'utf8');
    const result = arr.split('\n');
    const newResult = result.map(elm => elm.split(''));
    
   
    // return result.map(elm => elm.split(''));

    return result
    .map((elem,index) => {
     function chunk(arr, size) {
       let newArray = [];
         i = 0;
       for (i; i < arr.length; i += size) {
         newArray.push(arr.slice(i, i + size));
       }
       return newArray;
     }
     return chunk(elem,9);
    });
 
  
  
}

console.log(solve());

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  // for (let i = 0; i < 8; i++) {
  //   const element = array[i];
    
  // }
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
