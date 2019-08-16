// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  checkRow(x, y, num, element);
  checkColumn(x, y, num, element)
}

function checkRow(x, y, num, element) {
  while (nums[num] !== element) {
    if (x === 9) {
      x = 0;
      y++;
    }
    x++;
  }

  element = x;
  line = y;
  return;
}

function checkColumn(x, y, num, element) {
  while (nums[num] !== element) {
    if (y === 9) {
      y = 0;
      x++;
      return x++;
    }
    y++;
  }

  element = x;
  line = y;
  return;
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

let str = " 1-58-2 ---- 9--764-52--4--819-19--73-6762-83-9 ----- 61-5 --- 76 --- 3 -43--2-5-16--3-89 - ";
function strAddArray(change) {
let start = 0;
let end = 9;
let arr2 = [];
for (let i=0; i<9; i++) {
	let res = change.slice(start,end);
		let res2 = res.split('');
			arr2.push(res);
			start += 9;
			end += 9;
}
	return arr2;
}
strAddArray(str);

module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}