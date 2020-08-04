// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const num = boardString.split('');
  const mainArr = new Array(9);
  let rowArr = [];
  let startIndex = 0;
  let endIndex = 9;

  for (let i = 0; i < 9; i += 1) {
    for (let j = startIndex; j < endIndex; j += 1) {
      rowArr.push([num[j]]);
    }

    mainArr[i] = rowArr;
    startIndex += 9;
    endIndex += 9;
    rowArr = [];
  }

  console.log(mainArr);

  return mainArr;
}

// let testArr = [

//   [
//     [1], ['-'],
//     [5], [8],
//     ['-'], [2],
//     ['-'], ['-'],
//     ['-']
//   ],
//   [
//     ['-'], [9],
//     ['-'], ['-'],
//     [7], [6],
//     [4], ['-'],
//     [5]
//   ],
//   [
//     [2], ['-'],
//     ['-'], [4],
//     ['-'], ['-'],
//     [8], [1],
//     [9]
//   ],
//   [
//     ['-'], [1],
//     [9], ['-'],
//     ['-'], [7],
//     [3], ['-'],
//     [6]
//   ],
//   [
//     [7], [6],
//     [2], ['-'],
//     [8], [3],
//     ['-'], [9],
//     ['-']
//   ],
//   [
//     ['-'], ['-'],
//     ['-'], ['-'],
//     [6], [1],
//     ['-'], [5],
//     ['-']
//   ],
//   [
//     ['-'], ['-'],
//     [7], [6],
//     ['-'], ['-'],
//     ['-'], [3],
//     ['-']
//   ],
//   [
//     [4], [3],
//     ['-'], ['-'],
//     [2], ['-'],
//     [5], ['-'],
//     [1]
//   ],
//   [
//     [6], ['-'],
//     ['-'], [3],
//     ['-'], [8],
//     [9], ['-'],
//     ['-']
//   ]
// ]
// console.log(typeof (testArr[0][1]));

function salavat(arr) {


  arr.forEach((element) => {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numsInRow = [];
    let newNums = [];
    element.forEach((el1) => {
      if (el1 != '-') {
        numsInRow.push(el1);
      }
    })

    nums.forEach((el2) => {
      for (let i = 0; i < numsInRow.length; i++) {
        if (el2 == numsInRow[i]) {
          nums.splice(el2 - 1, 1, 0);
        }
        // console.log(nums);
      }
    }
    )
    nums.forEach((el) => {
      if (el !== 0) {
        newNums.push(el);
      }
    })
    element.forEach((el3) => {
      if (el3 == '-') {
        el3.splice(0, 1, newNums);
      }
    })

  });
  // console.table(arr);
  // console.log(arr[0][1]);

}

// nums.forEach((el2) => {
//   for (let i = 0; i < numsInRow.length; i++) {
//     if (el2 == numsInRow[i]) {
//       nums.slice(el2, 1)
//     })

salavat(testArr);


// Returns a boolean indicating whether
// or not the provided board is solveds.
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
  solve,
  isSolved,
  prettyBoard,
};
