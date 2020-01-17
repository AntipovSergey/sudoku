// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let arr = boardString.split("");
  let arrOne = arr.slice(0, 9);
  let lineOne = [...arrOne];
  let arrTwo = arr.slice(9, 18);
  let lineTwo = [...arrTwo];
  let arrThree = arr.slice(18, 27);
  let lineThree = [...arrThree];
  let arrFour = arr.slice(27, 36);
  let lineFour = [...arrFour];
  let arrFive = arr.slice(36, 45);
  let lineFive = [...arrFive];
  let arrSix = arr.slice(45, 54);
  let lineSix = [...arrSix];
  let arrSeven = arr.slice(54, 63);
  let lineSeven = [...arrSeven];
  let arrEight = arr.slice(63, 72);
  let lineEight = [...arrEight];
  let arrNine = arr.slice(72, 81);
  let lineNine = [...arrNine];
  let board = [];
  board.push(
    lineOne,
    lineTwo,
    lineThree,
    lineFour,
    lineFive,
    lineSix,
    lineSeven,
    lineEight,
    lineNine
  );

  return board;
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
function prettyBoard(board) {}

module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
};

