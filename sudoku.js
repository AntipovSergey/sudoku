// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

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

function changeOnZero(string) {
  const newString = string.replace(/-/gi, 0);
  return newString;
}

let str =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function makeStructure(string) {
  // создаем Таблицу из строк
  let rawArr = string.split('');
  let boardArr = [];
  let position = 0;
  for (let i = 0; i < 9; i++) {
    boardArr[i] = createRow(rawArr);
    position += 9;
  }

  function createRow(rawArr) {
    // создаем строку
    let row = [];
    for (let j = position; j < position + 9; j += 1) {
      row.push(rawArr[j]);
    }
    return row;
  }
  return boardArr;
}

console.table(makeStructure(str));
