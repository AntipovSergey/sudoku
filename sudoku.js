
console.log(solve('--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--'))


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
          console.log(`число ${k}`, i, j)
          if (solution(arr)) {
           return true;
          } else {
            console.log('откат')
            arr[i][j] = '-';
          }
        }
      }
    console.log('false')
    return false;
   }
 }
}
//solution1(i,j=1 => solution2(i,j=3 => solution3(false =>  solution2(false => solution1(
  // i,j = "-" => i,j=2 => solution

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
  return board.flat().join('').indexOf("-") === -1 ? true : false
}


function prettyBoard(board) {
  return board.join('\n');
}

//Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}



