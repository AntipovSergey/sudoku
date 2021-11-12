const fs = require('fs');
const sudocuString = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8')

function parsingString(str)  {
const reg = /-/g
const replaseString = str.replace(reg, '0');
let sudokuArr = replaseString.split('');
const resultArr = [];
for (let i = 1; i < 10; i++) {
  resultArr.push(sudokuArr.splice(0, 9))
};
const swapStrNum = resultArr.map((el) => el.map((el) => Number(el)))
return swapStrNum
}




