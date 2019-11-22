const fs = require('fs');
const sudoku = require('./sudoku');

// The sudoku puzzles that your program will solve can be found
// in the sudoku_puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so we should remove them.

function sudokuParse(content) {
    let firstLine = content.split('\n')[0];
    console.log(firstLine);
    return firstLine;
}


fs.readFile('./sudoku_puzzles.txt', 'utf-8', function read(err, data) {
    if (err) {
        throw err;
    }

    let boardString = sudokuParse(data);

    let solvedBoard = sudoku.solve(boardString);
	if(sudoku.isSolved(solvedBoard)) {
	  console.log("The board was solved!");
	  console.log(sudoku.prettyBoard(solvedBoard));
	}
	else {
	  console.log("The board wasn't solved :(");
	}

// This function searches the string where index is located.
  function stringSearch(index) {
    let subArr = [];
    let testingstring = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
    for (let i = 0; i < 81; i += 9) {
      subArr.push(boardString.substring(i, i + 9));
    }
    return subArr[Math.ceil(index / 9) - 1];
  }

});
