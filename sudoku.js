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

// Exports all the functions to use them in another file.
// module.exports = {
// 	solve: solve,
// 	isSolved: isSolved,
// 	prettyBoard: prettyBoard
// }

let inputText = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

const objectFromArray = (arr) => {
  const object = {};
  for (let item = 0; item < arr.length; item += 1) {
    const row = Math.floor(item / 9);
    const col = item - row * 9;
    object[[row, col]] = arr[item];
  }
  return object;
};

const toArray = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i += 1) {
    result.push(str[i]);
  }
  return result;
};
let result = objectFromArray(toArray(inputText));
console.log(result);
// for (let key in result) {
//   console.log(Object.values(key));
//   console.log(key);
// }
// console.log((objectFromArray(toArray(inputText))));

const findInRow = (str) => {
  let result = [];
  for (let item = 0; item <= str.length; item += 1) {
    result.push(str[item]);
  }
  return result;
};

// console.log(findInRow(toArray(inputText)));
