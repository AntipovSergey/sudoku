const fs = require('fs');
const puzzlesAll = fs.readFileSync('./puzzles.txt', 'utf-8');
// console.log(puzzlesAll);

// function makeStr (str, size) {
// let arrStr = str.split('\n');
// let result = [];
// for(let i = 0; i < arrStr.length; i+=size){
// result.push(arrStr.slice(i,i+size));
// }
// return result;
// }
//console.table(makeStr(puzzlesAll, 1))



let str1 = "'1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---'";
// function makeKvadr (str) {
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//     }
// }
// console.log(makeKvadr(str))

// из строки "'1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---'" пполучить квадрат
function makeStr (str) {
    let res = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] !== "'") {
            res = res + str[i]
        }
    }

    return res
    
}
console.log(makeStr(str1))