// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let puzzle = {};
  for (let a = 0; a < boardString.length; a++) {
    boardString[a] == "-" ? (puzzle[a] = "0") : (puzzle[a] = boardString[a]);
  }
  return puzzle;
}

// console.log(
//   solve(
//     "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
//   )
// );

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
function prettyBoard(puzzle) {
  let prettyBoard = [];
  let arr = Object.values(puzzle);
  prettyBoard.push(arr.slice(0, 9),arr.slice(9, 18),arr.slice(18, 27),arr.slice(27, 36),arr.slice(36, 45),arr.slice(45, 54),arr.slice(54, 63),arr.slice(63, 72),arr.slice(72))


  return prettyBoard;
}


console.log(
	prettyBoard({
	  0: "1",
	  1: "0",
	  2: "5",
	  3: "8",
	  4: "0",
	  5: "2",
	  6: "0",
	  7: "0",
	  8: "0",
	  9: "0",
	  10: "9",
	  11: "0",
	  12: "0",
	  13: "7",
	  14: "6",
	  15: "4",
	  16: "0",
	  17: "5",
	  18: "2",
	  19: "0",
	  20: "0",
	  21: "4",
	  22: "0",
	  23: "0",
	  24: "8",
	  25: "1",
	  26: "9",
	  27: "0",
	  28: "1",
	  29: "9",
	  30: "0",
	  31: "0",
	  32: "7",
	  33: "3",
	  34: "0",
	  35: "6",
	  36: "7",
	  37: "6",
	  38: "2",
	  39: "0",
	  40: "8",
	  41: "3",
	  42: "0",
	  43: "9",
	  44: "0",
	  45: "0",
	  46: "0",
	  47: "0",
	  48: "0",
	  49: "6",
	  50: "1",
	  51: "0",
	  52: "5",
	  53: "0",
	  54: "0",
	  55: "0",
	  56: "7",
	  57: "6",
	  58: "0",
	  59: "0",
	  60: "0",
	  61: "3",
	  62: "0",
	  63: "4",
	  64: "3",
	  65: "0",
	  66: "0",
	  67: "2",
	  68: "0",
	  69: "5",
	  70: "0",
	  71: "1",
	  72: "6",
	  73: "0",
	  74: "0",
	  75: "3",
	  76: "0",
	  77: "8",
	  78: "9",
	  79: "0",
	  80: "0",
	})
  );
  

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};

// let a1 = ['0','1','2','9','10','11','18','19','20']
// let a2 = ['3','4','5','12','13','14','21','22','23']
// let a3 = ['6','7','8','15','16','17','24','25','26']
// let a4 = ['27','28','29','36','37','38','45','46','47']
// let a5 = ['30','31','32','39','40','41','48','49','50']
// let a6 = ['33','34','35','42','43','44','51','52','53']
// let a7 = ['54','55','56','63','64','65','72','73','74']
// let a8 = ['57','58','59','66','67','68','75','76','77']
// let a9 = ['60','61','62','69','70','71','78','79','80']
