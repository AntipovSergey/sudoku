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

  firstFilling(mainArr);

  function searchCol(arr) {
    for (let m = 0; m < arr.length; m += 1) {
      const values = []; // [ [ '1' ], [ '2' ], [ '7' ], [ '4' ], [ '6' ] ]
      const proverka = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

      for (let j = 0; j < arr.length; j += 1) {
        if (arr[j][m].length === 1) {
          values.push(arr[j][m]);
        }
      }

      const filters = [];

      proverka.forEach((el2) => {
        for (let i = 0; i < values.length; i += 1) {
          if (el2 === values[i][0]) {
            proverka.splice(el2 - 1, 1, 0);
          }
        }
      });

      for (let i = 0; i < proverka.length; i += 1) {
        if (proverka[i] !== 0) {
          filters.push(proverka[i]);
        }
      }

      for (let j = 0; j < arr.length; j += 1) {
        if (arr[j][m].length !== 1) {
          arr[j][m] = filters;
        }
      }
    }
    return (arr);
  }

  searchCol(mainArr);

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

  chekAndRemoveInSubArrays(mainArr);

  console.log(mainArr);
  console.log(mainArr[0][1]);

  return mainArr;
}

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
