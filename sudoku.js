const {getArr, getStr} = require('./VareraJan');
const {checking} = require('./Serjik');


// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let originMassive = (typeof(boardString) === 'string') ? getArr(boardString) : boardString
  let checkReplace = 0;
  // проверка на возможность проставить число
  const getReplace = checking(originMassive);
  
  // if (getReplace.length !== 0) {
  //   const i = getReplace[0];
  //   const j = getReplace[1];
  //   const num = getReplace[2];
  //   originMassive[i].splice(j, 1, num);
  //   checkReplace += 1;
  // }

  if (!checkReplace) return originMassive;
  else return originMassive = solve(originMassive);
  
}

// console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));
console.log(solve('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3'));

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
