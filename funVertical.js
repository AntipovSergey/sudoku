const fs = require('fs');
const {wordsArr} = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8').trim()
const {funGenSudoku} = require('./funGenSudoku.js');


function desk() {
  let arrSudoku = funGenSudoku();
return arrSudoku
}


console.log(desk(funGenSudoku));
