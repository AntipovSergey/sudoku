// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {}

function testSlicedArr(arr) {
  let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // let num = {
  //   1: 0,
  //   2: 0,
  //   3: 0,
  //   4: 0,
  //   5: 0,
  //   6: 0,
  //   7: 0,
  //   8: 0,
  //   9: 0,
  // };
  let outNum = [];

  for (let j = 0; j < numArr.length; j++) {
    let index = arr.indexOf(numArr[j]);
    if (index == -1) {
      outNum.push(numArr[j]);
    }
  }
  if (outNum.length != 0) {
    return outNum;
  } else return true;
  // for (let item in num) {
  //   if (num[item] == 1) {
  //     outNum.push(item);
  //   }
  //   sum += num[item];
  
  // if (sum == 9) {
  //   return true;
  // } else return false;
}
let arr = ["1", "-", "5", "8", "-", "2", "-", "-", "-"]; //1-58-2---
console.log(testSlicedArr(arr));

function prettyBoard(board) {}

module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
