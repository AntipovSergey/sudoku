// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let board = [];
  let varNumbers = []; 
  for(let i = 0; i < 81; i += 1){
    varNumbers.push([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }
  for(let i = 0; i < 9; i += 1){
    board.push([]);
  }
  for(let i = 0; i < 9; i += 1){
    for(let j = 0; j < 9; j += 1){
      board[i].push(boardString[i*9 + j]);
    }
  }
}
//solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');

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

/*// циклы прохода вокруг
for(let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let x_near = x + i;
            let y_near = y + j;
            if (i === 0 && j === 0) continue;
            if (board[x_near][y_near] !== '-')//вычеркиваем если цифра из массива
                var_numbers//стереть нужную цифру
        }
    }
*/
