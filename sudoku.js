let str = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";


function createObj(str) {
  let strArr = str.split('');
  let obj = {};

  let i = 0;
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      if (strArr[i] === '-') {
        obj[`${x}${y}`] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      } else {
        obj[`${x}${y}`] = [Number(strArr[i])];
      }
      i++;
    }
  }
  // console.log(obj['43']); //БЫЛА ЯЧЕЙКА

  checkColumn(obj);

}
console.log(createObj(str));

function checkColumn(obj) {
  let coor = '43';
  let secondCoor = coor[1]; //3

  let column = Object.keys(obj).filter((item) => item[1] === secondCoor)
  for (let everyItemOfColumn of column) {
    if ((coor !== everyItemOfColumn) && (obj[everyItemOfColumn].length === 1)) {
      obj[coor] = obj[coor].filter(item => item !== obj[everyItemOfColumn][0]);
    }
  }

  // console.log(obj['43']); //СТАЛА ЯЧЕЙКА
}


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
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
