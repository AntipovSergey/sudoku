// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {
  let arrArrs = [];
  let arr = [];
  reg = /(.{9})/gmi;
  arrArrs = boardString.match(reg);
  for (let elem of arrArrs) {
    arr.push(elem.split(''));
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '-') {
        arr[i][j] = 0;
      } else {
        arr[i][j] = +arr[i][j];
      }
    }
  }
  return arr;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(arrArrs) {
  for (let i = 0; i < arrArrs.length; i++) {
    for (let j = 0; j < arrArrs[i].length; j++) {
      if (arrArrs[i][j] === 0) {
        
        for (let k = 0; k <= 9; k++) {
          if (!arrArrs[i].includes(k) && !vertical(arrArrs, j).includes(k) && !square(arrArrs, i, j).includes(k)) {
            arrArrs[i][j] = k;
            break;
          // } else {
          //   arrArrs[i][j] = k;
          }
        }
      } 
    }
  }
  console.table(arrArrs)
  return arrArrs;
}

function square(arrArrs, i, j) {
  let arr = [];
  let row = Math.floor(i / 3) * 3;
  let column = Math.floor(j / 3) * 3;
  for (let i = row; i < row + 3; i++) {
    for (let j = column; j < column + 3; j++) {
      arr.push(arrArrs[i][j])
    }
  }
  return arr;
}

function vertical(arrArrs, j) {
  let arr = [];
  for (let i = 0; i < arrArrs.length; i++) {
    arr.push(arrArrs[i][j]);
  }
  return arr;
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
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
