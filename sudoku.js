
function solve(boardString) {
  let arr = [];
  if (checkStr(boardString)){
    const boardArr = boardString.split('');
  
    for (let i=0; i<boardArr.length; i++){
      arr.push(boardArr.splice(0,9))
  }
    solution(arr)
    console.log(arr.join());
    return arr
  } else {
    throw Error('Invalid Input');
  }
}
console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--'));
function checkStr (str){
  let arrayCheck = []
   for (let i=0; i<str.length; i++){
    
    arrayCheck.push(str[i].search(/([1-9]|[-])/g) ) 
}
  return !arrayCheck.some(elem => elem === -1)
}

function solution(arr) {

for (let i=0; i<arr.length; i++) {
  for (let j=0; j<arr.length; j++) {
    if (arr[i][j] === '-') {
      for (let k = 1; k < 10; k++) {
        if (checkCell(arr, i, j, k)) {
          arr[i][j] = k.toString();
          if (solution(arr)) {
           return true;
          } else {
            arr[i][j] = '-';
          }
        }
      }
    //console.log(positiveArr)
    return false;
   }
 }
}
return arr;
}

function checkCell(array, i, j, num){
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
      }
    }
  return true;
 }

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.

function isSolved(board) { 
  return board.flat().join('').indexOf("-")==-1 ? true : false
}


function prettyBoard(board) {
  return board.join('\n');
}
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
