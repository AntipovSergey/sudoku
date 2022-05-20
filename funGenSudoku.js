const fs = require('fs');
const wordsArr = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8').trim()
// .split('\n');

function funGenSudoku() {
  // принимает массив из 9 строк и возвращает массив из 9 строк
  let stringUdated = ''; //81 элемент с тире
  for (let d = 0; d < 81; d++) {
    stringUdated += wordsArr[d];
  }
  let arrBigString = stringUdated.replace(/\-/gim, '0') //можно применить к всему txt и он вернёт 729 элементов
  // 105802000090076405200400819019007306762083090000061050007600030430020501600308900
  // return arrBigString
  let arrSudoku = []
  let w = 0;
  for (let i = 0; i < (arrBigString.length / 9); i++) {
    let arrSudokuNested = []
    for (let j = 0; j < (arrBigString.length / 9); j++) {
      arrSudokuNested.push(arrBigString[w])
      w++
    }
    arrSudoku.push(arrSudokuNested)
  }
  return arrSudoku
}
console.table(funGenSudoku(wordsArr));

module.exports = {
  funGenSudoku,
};
