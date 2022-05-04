
const fs = require('fs');

function getArray( index = 0,  string = '' ){

  let puzzle = string.split('\n')[index];
  const sliceArr = [];

  let copy = [...puzzle];
   for(let i = 0; i < 9; i++){
   sliceArr.push(copy.splice(0,9))
   if(string.length === 0) return null;
  }
  return sliceArr.map(line=> {
    return line.map(el=> {
      if(el === '-'){
        return el
      }else {
        return Number(el) 
      }
    })
  });
}


// function readAndSolve(err, data) {
//   if (err) {
//     throw err;
//   }
//   let puzzle = sudokuParse(data);

//   let solvedPuzzle = sudoku.solve(puzzle);
//   if (sudoku.isSolved(solvedPuzzle)) {
//     console.log("The board was solved!");
//     console.log(sudoku.prettyBoard(solvedPuzzle));
//   }
//   else {
//     console.log("The board wasn't solved :(");
//   }
// }

// Reads file and sends data from it to the readAndSolve function.
// let index = process.argv[2];
// let string = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
// let pazzleArray = getArray(index,string);

module.exports = getArray;

