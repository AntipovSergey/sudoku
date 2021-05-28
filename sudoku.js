// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
let content = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
function solve(boardString) {

}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  
  strBoard = board.join('');
  let tire = /-/;
  let shablon = /(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)/
  let shablonIspr = '++===========++===========++===========++\n|| $1 | $2 | $3 || $4 | $5 | $6 || $7 | $8 | $9 ||\n++-----------++-----------++-----------++\n|| $10 | $11 | $12 || $13 | $14 | $15 || $16 | $17 | $18 ||\n++-----------++-----------++-----------++\n|| $19 | $20 | $21 || $22 | $23 | $24 || $25 | $26 | $27 ||\n++===========++===========++===========++\n|| $28 | $29 | $30 || $31 | $32 | $33 || $34 | $35 | $36 ||\n++-----------++-----------++-----------++\n|| $37 | $38 | $39 || $40 | $41 | $42 || $43 | $44 | $45 ||\n++-----------++-----------++-----------++\n|| $46 | $47 | $48 || $49 | $50 | $51 || $52 | $53 | $54 ||\n++===========++===========++===========++\n|| $55 | $56 | $57 || $58 | $59 | $60 || $61 | $62 | $63 ||\n++-----------++-----------++-----------++\n|| $64 | $65 | $66 || $67 | $68 | $69 || $70 | $71 | $72 ||\n++-----------++-----------++-----------++\n|| $73 | $74 | $75 || $76 | $77 | $78 || $79 | $80 | $81 ||\n++===========++===========++===========++\n'
  let result = strBoard.match(tire);
  finalBoard = strBoard.replace(shablon, shablonIspr)
  if (result > 0) {
    console.log(finalBoard, 'Not Solve')
  } else {
    console.log(finalBoard, 'SOLVE!!!')
  }
}

//var newstr = str.replace(re, 'апельсины');

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
let sudokuBoard = []
  for(let i = 0; i < 81; i += 9){
    sudokuBoard.push(board.slice(i, i + 9))
  }
    
return sudokuBoard;
}
//console.log(prettyBoard(content))

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}


isSolved(prettyBoard(content))
