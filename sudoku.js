// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
/////////////
const board = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

// console.log(board.length);
function solve(boardString) {
  const arr = [];
  let coordinate;
  for(let i = 0; i < board.length; i = i + 9){
  
      arr.push(board.slice(i, i + 9).split(''));
      }
     console.log(arr);
      // return arr;
  for(let r = 0; r < board.length;r++){
    for(let c = 0; c < board[j].length; c++){
     coordinate = arr[r][c]; ///работает определили координату
      if(coordinate === '-'){ 
       return true;
       }
     
      console.log(arr[r][c]);
    }
  }
  
  console.log('first changes');
 
} console.log(solve(board));

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
//////красивая доска(работает в виде массива массивов)
function prettyBoard() {
 
//   for(let i = 0; i < board.length; i = i + 9){
  
//   arr.push(board.slice(i, i + 9).split(''));
//   }
// // console.log(arr);
//   return arr;
}
console.log(prettyBoard(board))

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
