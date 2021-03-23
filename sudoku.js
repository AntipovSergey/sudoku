const { parse } = require("path");

function solve(boardString) {
  const arr=stringToArray(boardString);
  const newArr=solution(arr);
  while (newArr.flat().indexOf('-')!==-1){
    const copyArr=JSON.parse(JSON.stringify(newArr));
    solution(newArr);
    if (copyArr.flat().join('')===newArr.flat().join('')){
      console.log('Doesnt work');
      nextLevelCheck(arr);
    }
  }
  return newArr;
  

}

function isSolved(board) {
  if (board.flat().includes('-')){
    return false;
  } else {
    return true;
  }
 }

function prettyBoard(board) {
  return board.join('\n');
}

function stringToArray(string){
  const resultArr = [];
  const boardArr = string.split('');
  while (boardArr.length > 0) {
    resultArr.push(boardArr.splice(0, 9));
}
return resultArr;
}
function checkCell(num, array, i, j){
  if (array[i].includes(num.toString())){
    return false;
  }
 
  for (let f=0; f<array.length; f++){
    if (array[f][j] === num.toString()) {
     return false;
    }}
     const boxRow=Math.floor(i/3)*3;
     const boxCol=Math.floor(j/3)*3;
     for (let n=boxRow; n<boxRow+3; n++){
     for (let m=boxCol; m<boxCol+3; m++){
       if (array[n][m] === num.toString()) {
         return false;
       }
  }}
  return true;
 }

 function solution(arr){
let possibleArr=[];
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length; j++){
      if (arr[i][j]==='-'){
        for (let k=1; k<10; k++){
        if (checkCell(k, arr, i, j)){
          possibleArr.push(k)
        }
      } 
    if (possibleArr.length === 1) {
      arr[i][j] = possibleArr[0].toString();
    } else {
      possibleArr = [];
    }
    } 
    }
  }
  return arr;
 }

function nextLevelCheck(arr){
  let copyArr=JSON.parse(JSON.stringify(arr));
  let possibleArr=[];
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length; j++){
      if (arr[i][j]==='-'){
        for (let k=1; k<10; k++){
        if (checkCell(k, arr, i, j)){
          possibleArr.push(k);
      } }
    if (possibleArr.length === 2) {
      copyArr[i][j] = possibleArr[0].toString();
      // const maybe1Arr=solution(copyArr);

      while (copyArr.flat().indexOf('-')!==-1){
        let copyOfCopyArr=JSON.parse(JSON.stringify(copyArr));
        let resultArr=solution(copyArr);
        if (copyOfCopyArr.flat().join('')===resultArr.flat().join('')){
          console.log('Doesnt work');
          arr[i][j]=possibleArr[1].toString;
          console.log(arr[i][j]);
copyArr=JSON.parse(JSON.stringify(arr));
console.log(copyArr);
break;
        }
      }
        } else {
      possibleArr = [];
    }
    } 
    }
  }
  return copyArr;
}

module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}

