const fs = require('fs');
// const sudoku = require('./puzzle');

function readFile() {
  const finalResult = [];
  const size = 9;
  const readFile = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n')[0].split('')
    .map((el) => (el !== '-' ? Number(el) : el));

  for (let i = 0; i < readFile.length; i += size) {
    finalResult.push(readFile.slice(i, i + size));
  }
  //   console.table(finalResult);
  return finalResult;
}
console.log(readFile());
const sudoku = readFile();

// function findEmpty(arr) {
//   const size = 9;
//   const boxSize = 3;

//   //   const result = arr.map((el) => el === '').replaceAll('-', 2);
//   const findEmp = (arr) => {
//     for (let i = 0; i < size; i++) {
//       for (let j = 0; j < size; j++) {
//         if (arr[i][j] === '-') { return [i, j]; }
//       }
//     }
//   };
//   return null;
// }

// const validate = (num, pos, arr) => {
//   const [i, j] = pos;
// };
// console.log(findEmpty(sudoku));

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
