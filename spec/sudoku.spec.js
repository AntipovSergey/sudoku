// const sudoku = require('../sudoku.js')
const {proverka, getNumbers,getArray,addIscl} = require('../proverka')
const fs = require('fs');
const sudoku = fs.readFileSync('./sudoku-puzzles.txt','utf-8');
​

let arr= getArray(1, sudoku);

console.log(arr);


// for(let i =0 ; i<arr.length; i++){
//  for(let j =0 ; j<arr.length; j++){
  
//   // console.log((addIscl(i, j, getNumbers( i, j, arr), arr)));
//  }
// }