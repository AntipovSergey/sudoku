const { log } = require('console');
const fs = require('fs');

const file = fs.readFileSync('./puzzles.txt', 'utf8');

const fileSudoku = file.trim().split('\n');

// Создание массива из строки, возвращает массив

// const ready = [
//   [['1'], ['-'], ['5'], ['8'], ['-'], ['2'], ['-'], ['-'], ['-']],
//   [['-'], ['9'], ['-'], ['-'], ['7'], ['6'], ['4'], ['-'], ['5']],
//   [['2'], ['-'], ['-'], ['4'], ['-'], ['-'], ['8'], ['1'], ['9']],
//   [['-'], ['1'], ['9'], ['-'], ['-'], ['7'], ['3'], ['-'], ['6']],
//   [['7'], ['6'], ['2'], ['-'], ['8'], ['3'], ['-'], ['9'], ['-']],
//   [['-'], ['-'], ['-'], ['-'], ['6'], ['1'], ['-'], ['5'], ['-']],
//   [['-'], ['-'], ['7'], ['6'], ['-'], ['-'], ['-'], ['3'], ['-']],
//   [['4'], ['3'], ['-'], ['-'], ['2'], ['-'], ['5'], ['-'], ['1']],
//   [['6'], ['-'], ['-'], ['3'], ['-'], ['8'], ['9'], ['-'], ['-']],
// ]

function generateBoard(str) {
  let count = 0;
  const line = [];
  const result = [];
  for (let i = 0; i < str.length; i += 1) {
    if (count < 9) {
      line.push([str[i]]);
      count += 1;
    }
    if (count === 9) {
      result.push([...line]);
      line.length = 0;
      count = 0;
    }
  }
  return result;
}

function genArrBoard() {
  const result = [];
  for (let i = 0; i < fileSudoku.length; i += 1) {
    result.push(generateBoard(fileSudoku[i]));
  }
  return result;
}
console.log(genArrBoard());
module.exports = {
  genArrBoard,
};
