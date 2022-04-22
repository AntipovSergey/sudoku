const fs = require('fs');
 const sudoku = fs.readFileSync('./sudoku-puzzles.txt','utf-8');



function getArray( index = 0,  string = '' ){
  let puzzle = string.split('\n')[index];
  const sliceArr = [];
  const copy = [...puzzle];
  for(let i = 0; i < 9; i++){
    sliceArr.push(copy.splice(0,9))
   if(string.length === 0) return null;
  }
  return sliceArr.map(line=> {
    return line.map(el=> {
      if(el === '-'){
        return el
      }else {
        return Number(el) 
      }
    })
  });
}
//console.log(getArray(0,sudoku))
// module.exports = {getArray}

const arr = getArray(0,sudoku);


function getNumbers(i,j,array) {
  let expectedArray = [];
  // let counter = 0;
  for (let k = 0; k < array.length; k += 1) {
      if ( typeof (array[i][k]) === 'number' ) expectedArray.push(array[i][k]);
  }
  for (let g = 0; g<array.length; g++){
    if ( typeof (array[g][j]) === 'number' ) expectedArray.push(array[g][j]);
  }
  return expectedArray;
}
//console.log('====>',getNumbers(arr))
console.log(getNumbers(2,2, arr))

let numbers = getNumbers(i,t, arr);
// for (let i = 0; i < array.length; i++) {
//  for (let t = 0; t < array.length; t++) {
//  console.log( getNumbers(i,t, arr ))
//  }
  
// }


function addIscl(i, g, arr, arrB) {
  let startI;
  let endI;
  switch (i) {
    case 0: case 1: case 2: startI = 0; endI = 2; break;
    case 3: case 4: case 5: startI = 3; endI = 5; break;
    case 6: case 7: case 8: startI = 6; endI = 8;
    default: break;
  }
  let startG;
  let endG;
  switch (g) {
    case 0: case 1: case 2: startG = 0; endG = 2; break;
    case 3: case 4: case 5: startG = 3; endG = 5; break;
    case 6: case 7: case 8: startG = 6; endG = 8;
    default: break;
  }
​
​
  for (; startI <= endI; startI += 1) {
    // console.log('------', startI)
    for (let G = startG; G <= endG; G++) {
      // console.log('ходы', 'строчка ход i', startI, 'столбец ход g', G)
      if (typeof (arrB[startI][G]) === 'number') {
        arr.push(arrB[startI][G])
      }
    }
  }
  return arr
}
console.log(addIscl(2,2, [1,2], arr))
console.table(arr);
// console.log('sdfsf', addIscl(2,2,getNumbers(2,2, arr),arr));
 


function proverka(array){
  let result = [];
  for(let j=1; j<=9;j++){
    let count = 0;
    for(let i=0; i < array.length; i++){
      if(j==array[i]){
       count++
      }
    }
    if(count==0)
     result.push(j);
  }
  if(result.length==1){
    return result[0]
  }
   return 0;
}
