const fs = require('fs');

function read() {
  const sudo = fs.readFileSync('./easy.txt', 'utf-8');
  sudo.split('\n');
  const sodoSplit = sudo.split('\n')[0];
  const sudokuArray = sodoSplit.split('');
  const sudokuGrid = [];
  for (let i = 0; i < sudokuArray.length; i += 9) {
    sudokuGrid.push(sudokuArray.slice(i, i + 9));
  }
  return sudokuGrid;
}


function readVertical() {
 const sudoku = fs.readFileSync(‘./easy.txt’, ‘utf-8’);
 const lines = sudoku.split(‘\n’);
 const firstLine = lines[0];
 const sudokuGrid = [];
 for (let i = 0; i < 9; i++) {
  const column = [];
  for (let j = i; j < firstLine.length; j += 9) {
   column.push(firstLine[j]);
  }
  sudokuGrid.push(column);
 }
 return sudokuGrid;
}






