const generateBoard = (str) => {
  const sudokuArr = [];
  for (let i = 0; i < 9; i++) {
    sudokuArr.push(str.slice(i * 9, i * 9 + 9).split(''));
  }
  console.table(sudokuArr)
  return sudokuArr;
};

const variants = (arr1, arr2, arr3 = []) => {
  const varArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sumArr = [...arr1, ...arr2, ...arr3];
  for (let i = 0; i < sumArr.length; i++) {
    if (varArr.includes(sumArr[i])) {
      varArr.splice(varArr.indexOf(sumArr[i]), 1);
    }
  }
  return varArr;
};

function createdRow(puzzle, indexRow) {
  return puzzle[indexRow];
}



function createdColumn(puzzle, indexColumn) {
  let result = '';
  for (let i = 0; i < puzzle.length; i++) {
      result += puzzle[i][indexColumn];
  }
  return [...result];
}





// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

  let boardSudoku = generateBoard(boardString);
  let counterSteps = 0;
  while (counterSteps !== 82) { 


    for (const column in boardSudoku) {  
      for (const row in boardSudoku[column]) { 

        if (boardSudoku[column][row] === '-') { 
          let arrRow = createdRow(boardSudoku, row);
          let arrColumn = createdColumn(boardSudoku, column);
          let arrSquare = [];//createSquare(boardSudoku, column, row);
          let freeVariantes = variants(arrRow, arrSquare, arrColumn);

          if (freeVariantes.length === 1) {
            boardSudoku[column][row] = freeVariantes[0];
            counterSteps = 0;

          }
        }
      }
    }
    counterSteps += 1;
  }
  return boardSudoku
}

console.table(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))



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
