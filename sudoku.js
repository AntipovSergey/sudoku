const fs = require('fs');
const getArray = require('./functions/getArray');
const excF1 = require('./functions/exceptionFilter1')
const excF2 = require('./functions/exceptionFilter2')
const possibleOp = require('./functions/possOptions')

let index = process.argv[2];
let string = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

let sudoku = getArray(index,string);
console.table(sudoku);
let z=0;

do{
  for(let i=0 ;i<sudoku.length; i+=1){
    for(let j=0;j<sudoku.length; j+=1){
      if ((typeof(sudoku[i][j])) === 'string'){
        let filter = excF2(i, j, sudoku, excF1(i, j, sudoku));
        let op = possibleOp(filter);
        if(op!=0) {
          sudoku[i][j] = op;
        }
          
      }
    }
  }
z+=1;
} while(z<182)



console.table(sudoku);
