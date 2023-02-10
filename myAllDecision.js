const fs = require('fs');
// const sudoku = require('./puzzle');

const size = 9;
const boxSize = 3;

// function randomNumber() {
//   return Math.floor(Math.random() * (9 - 1) + 1);
// }

function readFile() {
  const finalResult = [];

  const readFile = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n')[0].split('')
    .map((el) => (el !== '-' ? Number(el) : el));

  for (let i = 0; i < readFile.length; i += size) {
    finalResult.push(readFile.slice(i, i + size));
  }
  //   console.table(finalResult);
  return finalResult;
}
console.table(readFile());
// readFile();
const sudoku = readFile();
// const randomNum = randomNumber();

// horizontal
function horizontal(arr, argv) {
  //   console.log('yyyy', arr, argv);
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[0][i] === argv) {
      return true;
    }
  }
  return false;
}

console.log(horizontal(sudoku, 3));

function vert(arr, argv) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      console.log(arr[j][i]);
      if (arr[j][i] === argv) {
        return true;
      }
    }
  }
  return false;
}
console.log(vert(sudoku, 8));
