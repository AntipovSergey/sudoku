// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function sumCellsLength(someArr4) {
  let summ = 0;
  someArr4.forEach((el1) => {
    el1.forEach((el2) => {
      summ += el2.length;
    });
  });
  return summ;
}
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

  function firstFilling(someArr) {
    for (let y = 0; y < someArr.length; y++) {
      for (let x = 0; x < someArr[0].length; x++) {
        if (someArr[y][x][0] === '-') {
          someArr[y].splice(x, 1, ['1', '2', '3', '4', '5', '6', '7', '8', '9']);
        }
      }
    }
    return someArr;
  }

  function searchRow(arr) {
    arr.forEach((element) => {
      const numsInRow = [];
      element.forEach((element2) => {
        if (element2.length == 1) {
          numsInRow.push(element2);
        }
      });
      element.forEach((element3) => {
        if (element3.length > 1) {
          for (let i = element3.length - 1; i >= 0; i--) {
            numsInRow.forEach((element4) => {
              if (element4 == element3[i]) {
                element3.splice(element3.indexOf(element3[i]), 1);
              }
            });
          }
        }
      });
    });
    return arr;
  }

  function searchCol(arr) {
    for (let m = 0; m < arr.length; m += 1) {
      const values = [];

      for (let j = 0; j < arr.length; j += 1) {
        if (arr[j][m].length === 1) {
          values.push(arr[j][m][0]);
        }
      }

      for (let j = 0; j < arr.length; j += 1) {
        if (arr[j][m].length !== 1) {
          for (let index = arr[j][m].length - 1; index >= 0; index -= 1) {
            if (values.includes(arr[j][m][index])) {
              arr[j][m].splice(index, 1);
            }
          }
        }
      }
    }
    return arr;
  }

  function chekAndRemoveInSubArrays(board) {
    function checkInEachSubArray(y, x) {
      const tempArr = [];
      for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
          if (board[i][j].length === 1) { tempArr.push(board[i][j][0]); }
        }
      }

      for (let f = x; f < x + 3; f++) {
        for (let g = y; g < y + 3; g++) {
          if (board[f][g].length > 1) {
            for (let h = board[f][g].length - 1; h >= 0; h--) {
              if (board[f][g].length === 1) break;
              if (tempArr.includes(board[f][g][h])) { board[f][g].splice(h, 1); }
            }
          }
        }
      }
    }

    for (let n = 0; n < board[0].length; n += 3) {
      for (let p = 0; p < board.length; p += 3) {
        checkInEachSubArray(n, p);
      }
    }
    return board;
  }

  let tempCellLength = sumCellsLength(mainArr);
  function inAll(someArr5) {
    const result = chekAndRemoveInSubArrays(searchCol(searchRow(firstFilling(someArr5))));
    if (sumCellsLength(result) === 81) { return result; }
    if (sumCellsLength(result) === tempCellLength) { return result; }
    tempCellLength = sumCellsLength(result);
    return inAll(result);
  }

  return inAll(mainArr);
}

// Returns a boolean indicating whether
// or not the provided board is solveds.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  if (sumCellsLength(board) === 81) { return true; }
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  board.forEach((el1) => {
    el1.join('');
  });
  return board.join('\n');
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
