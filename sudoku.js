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
