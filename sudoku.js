// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let result = [...board];
  while (!isSolved(result)) {
    for (let i = 0; i < result.length; i++) {
      for (let y = 0; y < result[i].length; y++) {
        if (result[i][y] === '-') {
          for (let x = 1; x <= 9; x++) {
            let possibleResults = [];
            if (
              checkRow(result, x, i) &&
              checkColumn(result, x, y) &&
              searchBox(result, i, y, x)
            ) {
              possibleResults.push(x);
              if (possibleResults.length === 1) {
                result[i][y] == x;
              } else {
                continue;
              }
            } else {
              continue;
            }
          }
        }
        continue;
      }
    }
  }
  return result;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let y = 0; y < board[i].length; y++) {
      if (board[i][y] === '-') return false;
      continue;
    }
  }
  return true;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {}

function arraytoString(sudoku) {
  const result = [];
  const arr1 = sudoku.split('');
  let arr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    arr.push(arr1[i]);
    if ((i + 1) % 9 === 0) {
      result.push(arr);
      arr = [];
    }
  }
  return result;
}
arraytoString('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---');

function searchBox(arr, i, j, number) {
  let arrBox = [];
  if (i < 3) {
    if (j < 3) {
      arrBox.push(arr[0].splice(0, 3));
      arrBox.push(arr[1].splice(0, 3));
      arrBox.push(arr[2].splice(0, 3));
    } else if (j < 6) {
      arrBox.push(arr[0].splice(3, 3));
      arrBox.push(arr[1].splice(3, 3));
      arrBox.push(arr[2].splice(3, 3));
    } else {
      arrBox.push(arr[0].splice(6, 3));
      arrBox.push(arr[1].splice(6, 3));
      arrBox.push(arr[2].splice(6, 3));
    }
  } else if (i < 6) {
      if (j < 3) {
        arrBox.push(arr[3].splice(0, 3));
        arrBox.push(arr[4].splice(0, 3));
        arrBox.push(arr[5].splice(0, 3));
      } else if (j < 6) {
        arrBox.push(arr[3].splice(3, 3));
        arrBox.push(arr[4].splice(3, 3));
        arrBox.push(arr[5].splice(3, 3));
      } else {
        arrBox.push(arr[3].splice(6, 3));
        arrBox.push(arr[4].splice(6, 3));
        arrBox.push(arr[5].splice(6, 3));
      }
    } else {
    if (j < 3) {
      arrBox.push(arr[6].splice(0, 3));
      arrBox.push(arr[7].splice(0, 3));
      arrBox.push(arr[8].splice(0, 3));
    } else if (j < 6) {
      arrBox.push(arr[6].splice(3, 3));
      arrBox.push(arr[7].splice(3, 3));
      arrBox.push(arr[8].splice(3, 3));
    } else {
      arrBox.push(arr[6].splice(6, 3));
      arrBox.push(arr[7].splice(6, 3));
      arrBox.push(arr[8].splice(6, 3));
    }
  }
  let find = true;
  for (let i = 0; i < arrBox.length; i += 1) {
    for (let j = 0; j < arrBox[i].length; j += 1) {
      if (arrBox[i][j] === number) {
        find = false;
        break;
      }
    }
  }
  return find;
  }

// Exports all the functions to use them in another file.

module.exports = {


  solve,
  isSolved,
  prettyBoard,
};


