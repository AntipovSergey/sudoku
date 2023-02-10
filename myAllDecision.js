const fs = require('fs');
// const sudoku = require('./puzzle');

function readFile() {
  const finalResult = [];
  const size = 9;
  const readFile = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n')[0].split('');

  for (let i = 0; i < readFile.length; i += size) {
    finalResult.push(readFile.slice(i, i + size));
  }
  console.log(finalResult);
}

const sudoku = readFile();

// function chunkToSudoku(arr, chunkSize) {
//   //   console.log(sudoku);
//   const res = [];
//   for (let i = 0; i < sudoku.length; i += 1) {
//     const chunk = arr[i].slice(i, i + chunkSize);
//     res.push(chunk);
//   }
//   console.log(res);
// }
// chunkToSudoku(sudoku, 9);
