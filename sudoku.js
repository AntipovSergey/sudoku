// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
  ) {
  function getArrays() {
    let size = 9;
    let arrBoardString = boardString.split("");
    let result = [];

    for (let i = 0; i < arrBoardString.length; i += size) {
      let arrBoard = arrBoardString.slice(i, i + size);
      result.push(arrBoard);
    }

    return result;
  }
  // Проверяет пустые ячейки в строке на совпадения
  
    let checkedResult = getArrays();
    checkNew: for (let i = 0; i < checkedResult.length; i++) {
      for (let j = 0; j < checkedResult.length; j++) {
        if (checkedResult[i][j] === "-") {
          for (let k = 1; k <= 9; k++) {
            if (!checkedResult[i].includes(k)) {
              checkedResult[i][j] = k;
            } else if (checkedResult[i].includes(k)) {
              continue checkNew;
            }
          }
        }
      }
    }
    return checkedResult
  }

console.log(solve())

solve();

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
