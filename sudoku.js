// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.

const { parse } = require("path");

// How you represent your board is up to you!
function solve(boardString) {
  const resultArr = [];
  const boardArr = boardString.split('');
  while (boardArr.length > 0) {
    resultArr.push(boardArr.splice(0, 9));
  }
  return resultArr;
}

const checkCell=(num, array, i, j)=>{
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
  return true;
 }
 }
const solution =(arr)=>{
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
// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) { 
  const arr=solve(board);
  solution(arr);
  console.log(solution(arr));
  while (arr.flat().indexOf('-')!==-1){
    const copyArr=JSON.parse(JSON.stringify(arr));
    solution(arr);
    if (copyArr.flat().join('')===arr.flat().join('')){
      console.log('Doesnt work');
      nextLevelCheck(arr);
      break;
    }
  }
  // console.log(prettyBoard(arr))
  return console.log(prettyBoard(arr));
}
console.log(isSolved('---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----'))

function nextLevelCheck(array){
  
}

function prettyBoard(board) {
  return board.join('\n');
}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
