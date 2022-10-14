const fs = require('fs');
const getSquares = require('./squares.js');

//  создание темплейта доски (массива массивов символов 9*9)
const templateSudoku = fs.readFileSync('./template.txt', 'utf-8')
    .split('\n')
    .map((row) => row.split(' '))

console.table(templateSudoku);

// Функция заполнения элементов доски по правилам Судоку

function playSudoku(mainArr){

const arrCheck = [1,2,3,4,5,6,7,8,9];

let arrRows = mainArr.map (el => el);
//console.table (arrRows);

let arrColumns = mainArr.map((el,i) => el.map((el2,j) => mainArr[j][i]) )
//console.log (arrColumns)


// проверка

for (let i =0; i < arrRows.length; i +=1 ){
 for (let n =0; n < arrRows[i].length; n +=1 ){
 if (arrRows[i][n] === '-') { 
       //  функция проверки 1 
       
       for (let k = 0; k < arrCheck.length; k++) {
        
        if (!arrRows[i].includes(`${arrCheck[k]}`)) {
               
                arrRows[i][n] = `${arrCheck[k]}`
                break;
            }
           
    }
 }
}
}
console.table(arrRows);
 return arrRows
}
playSudoku(templateSudoku)



// const fs = require('fs');
// const getSquares = require('./squares.js');

// //  создание темплейта доски (массива массивов символов 9*9)
// const templateSudoku = fs.readFileSync('./template.txt', 'utf-8')
//     .split('\n')
//     .map((row) => row.split(' '))

// console.table(templateSudoku);

// // Функция заполнения элементов доски по правилам Судоку

// function playSudoku(mainArr){

// //const squaresArray = getSquares(sudoku);// массив из 9 подмассивов кубов
// //const resultSudokuArr = []
// //const arrCub = []
// const arrCheck = [1,2,3,4,5,6,7,8,9];

// let arrRows = mainArr.map (el => el.join(''));
// console.log (arrRows);

// let arrColumns = mainArr.map((el,i) => el.map((el2,j) => mainArr[j][i]).join('') )
// console.log (arrColumns)
// // проверка

// for (let i =0; i < arrRows.length; i +=1 ){
//  for (let n =0; n < arrRows[i].length; n +=1 ){
//  if (arrRows[i][n] === '-') { 
//        //  функция проверки 1 

//        for (let k = 0; k<arrCheck.length; k++) {
//         if (!arrRows[i].split('').includes(arrCheck[k]) && !arrColumns[i].includes(arrCheck[k])) {
//                 arrRows[i][n] = arrCheck[k]
//                 break;
//             }
//     }
//  }
// }
// }
//  return arrRows
// }
// console.log(playSudoku(templateSudoku))

// // let arrRows = ''
// // for (let r = 0; r < mainArr.length; r += 1){
// //     if (ArrisArray(mainArr[r])){
// //         arrRows += arrRows[r] + mainArr[r];
// //     } else {
// //         arrRows += mainArr[r];  
// //     }
// //     }

