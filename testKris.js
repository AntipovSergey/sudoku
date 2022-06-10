const fs = require('fs');
let filterContent = fs.readFileSync('sudoku-puzzles.txt', 'utf8') //доступ к файлу с цифрами
let sud = filterContent.split('\n')[0];

//создаем массив из файла sudoku-puzzles.txt
function getSplit(sud){
    let result = sud.split('')
 for(let i = 0; i < result.length; i++) {
     if(result[i] === '-') {
     result[i] = '0'
     }
 } 
     return result

}
// console.log(getSplit(sud));

let newNum = getSplit(sud)

//перевод в цифры
function arrNum(newNum) {
    for(let i = 0; i < newNum.length; i++){
        newNum[i] = Number(newNum[i])  
    }
    return newNum
}
// console.log(arrNum(newNum));

let allNumArr = arrNum(newNum);

// разбивка по 3 цифры
function numThree(allNumArr) {
 let size = 3;
 let arrThree = [];
 for(let i = 0; i < Math.ceil(allNumArr.length/size); i++) {
     arrThree[i] = allNumArr.slice((i*size), (i*size) + size)
 }
    return arrThree
}

console.log(numThree(allNumArr));
