
console.log(solve('---------------------------------------------------------------------------------'))


// Веб часть!
for (let i=0; i<=80; i++){
  document.querySelector('.wrapper').innerHTML+=`<div class="cell"></div>`
}

document.querySelector('.button').addEventListener('click', function(){
    let boardSudoku = document.querySelector('input').value
    for (let i=0; i<=80; i++){
      document.querySelectorAll('.cell')[i].textContent = boardSudoku.split('')[i]
    }
    setTimeout(()=>{
      for (let i=0; i<=80; i++){
        if (document.querySelectorAll('.cell')[i].textContent !== solve(boardSudoku).flat()[i]){
          document.querySelectorAll('.cell')[i].style.color = 'red'
        }
        document.querySelectorAll('.cell')[i].textContent = solve(boardSudoku).flat()[i]
      }
    },1500)
    for (let i=0; i<=80; i++){
        document.querySelectorAll('.cell')[i].style.color = '#000'
    }
})


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
//let positiveArr = []
for (let i=0; i<arr.length; i++) {
  for (let j=0; j<arr.length; j++) {
    if (arr[i][j] === '-') {
      for (let k = 1; k < 10; k++) {
        if (checkCell(arr, i, j, k)) {
          //positiveArr.push(k)
          arr[i][j] = k.toString();
          console.log(k, i, j)
          //console.log(positiveArr, i, j)
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




//Exports all the functions to use them in another file.
// module.exports = {
// 	solve: solve,
// 	isSolved: isSolved,
// 	prettyBoard: prettyBoard
// }



