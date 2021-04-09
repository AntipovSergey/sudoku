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



function convertStringToBoard(string) {
  return string.match(/.{9}/g).map((el) => el.split(''))
}


function equalBoards(copyBoard, board) {
  return JSON.stringify(copyBoard) === JSON.stringify(board)
}

const createLocation = (row, col) => {
  let object = {
    row: row,
    col: col,
  }
  return object
}


/*===================НЕ ОБРАЩАЙ ВНИМАНИЯ!!! ЭТО ПРОСТО ТЕСТОВЫЕ МАНИПУЛЯЦИИ!!!=======================
const string1 = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
const string2 = '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3';
const string3 = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
let board = convertStringToBoard(string1);
let copyBoard = convertStringToBoard(string2);
let thirdBoard = convertStringToBoard(string3);

console.log(equalBoards(copyBoard, board)); 
console.log(equalBoards(thirdBoard, board)); 

console.table(convertStringToBoard(string1));
//===================================================================================================*/
