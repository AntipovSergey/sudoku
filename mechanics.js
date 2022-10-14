const fs = require('fs');
const getSquares = require('./squares.js');

//  создание темплейта доски (массива массивов символов 9*9)
const templateSudoku = fs.readFileSync('./template.txt', 'utf-8')
    .split('\n')
    .map((row) => row.split(' '))

//console.table(templateSudoku);

// Функция заполнения элементов доски по правилам Судоку
function playSudoku(mainArr, arrCub){

const squaresArray = getSquares(sudoku);// массив из 9 подмассивов кубов
const resultSudokuArr = []
const arrCheck = [1,2,3,4,5,6,7,8,9];

let arrRows = mainArr.map (el => el.join(''));
console.log (arrRows)
let arrColumns = mainArr.map((el,i) => el.map((el2,j) => mainArr[j][i]).join(''))


  return resultSudokuArr

//squaresArray.forEach

console.log (arrColumns)
}
console.log(playSudoku(templateSudoku, [1,2,3] ))
