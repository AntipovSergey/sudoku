
// How you represent your board is up to you!
function solve(boardString) {
  let arr = [];
  const boardArr = boardString.split('');
  
  for (let i=0; i<boardArr.length; i++){
    arr.push(boardArr.splice(0,9))
  }
  solution(arr)
  return arr
}

function solution(arr) {
for (let i=0; i<arr.length; i++) {
  for (let j=0; j<arr.length; j++) {
    if (arr[i][j] === '-') {
      for (let k = 1; k < 10; k++) {
        if (checkCell(arr, i, j, k)) {
          arr[i][j] = k.toString();
          console.log(k, i, j)
          if (solution(arr)) {
           return true;
          } else {
            arr[i][j] = '-';
          }
        }
      }
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

function isSolved(board) { 
  return board.flat().join('').indexOf("-")===-1 ? true : false
}
console.log(isSolved('-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--'))


function prettyBoard(board) {
  return board.join('\n');
}




// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}



