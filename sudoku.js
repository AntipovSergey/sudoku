// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function boardToArray(string) {
  let arr = string.match(/.{9}/g);
  nestedArr = arr.map((el) => el.split(''));
  nestedArrNum = nestedArr.map((i) =>
    i.map((el) => (el === '-' ? (el = null) : (el = +el)))
  );
  return nestedArrNum;
}
function horizCheck(arr, i, j, n) {
  let answer = true;
  for (el of arr[i]) {
    if (el == n) answer = false;
  }
  return answer;
}
function verticalCheck(arr, i, j, n) {
  let answer = true;
  for (let f = 0; f < arr.length; f++) {
    if (arr[f][j] === n) answer == false;
    verArr.push(arr[f][j]);
    console.log(verArr);
  }
  return answer;
}

function squareCheck(boardSudoku, row_I, col_J, numberValue) {
  row_I = Math.floor(row_I / 3) * 3;
  col_J = Math.floor(col_J / 3) * 3;
  let isFound = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (boardSudoku[row_I + i][col_J + j] === numberValue) isFound = false;
    }
  }
  return isFound;
}

function solution(arr) {
  let newArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] == null) {
        for (let n = 1; n <= 9; n++) {
          if (
            horizCheck(newArr, i, j, n) &&
            verticalCheck(newArr, i, j, n) &&
            squareCheck(newArr, i, j, n)
          ) {
            newArr[i][j] = n;
            if (Array.isArray(solution(newArr))) {
              return newArr;
            }
          }
        }
      }
    }
  }
  return newArr;
}

function solve(boardString) {
  let boardArray = boardToArray(boardString);
  let solutedArr = solution(boardArray);
  return solutedArr;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
console.log(
  solve(
    '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
  )
);
