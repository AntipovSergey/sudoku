// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
//git init

const su =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function solve(boardString) {
  const convertStringtoArr = boardString.replace(/-/g, 0).match(/.{9}/g);

  return convertStringtoArr.map((item) => item.split(''));
}
// console.log(solve(su));

// // Returns a boolean indicating whether
// // or not the provided board is solved.
// // The input board will be in whatever
// // form `solve` returns.
function isSolved(board) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let itemBoard = 0; itemBoard < board.length; i++) {
     const xz=board[i].map((element) => {
      if (element === 0) {
        if (!arr[i].includes(board[i])) {
          element = arr[i];
        }
      }
    });
  }
  retu
}
console.log(isSolved(solve(su)));

// // Takes in a board in some form and
// // returns a String that's well formatted
// // for output to the screen.
// // The input board will be in whatever
// // form `solve` returns.
// function prettyBoard(board) {

// }

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  // isSolved: isSolved,
  // prettyBoard: prettyBoard
};
