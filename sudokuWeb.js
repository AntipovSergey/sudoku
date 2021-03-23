
// Веб часть!
for (let i=0; i<=80; i++){
  document.querySelector('.wrapper').innerHTML+=`<div class="cell"></div>`
}

document.querySelector('.button').addEventListener('click', function(){
    let boardSudoku = document.querySelector('input').value
    if (boardSudoku.length === 81 && checkStr(boardSudoku)){
    let cell =document.querySelectorAll('.cell')

    for (let i=0; i<=80; i++){
      cell[i].textContent = boardSudoku.split('')[i]
    }
    document.querySelector('.ii').textContent = `Думаю...`

    setTimeout(() => {
      for (let i=0; i<=80; i++){
        if (document.querySelectorAll('.cell')[i].textContent !== solve(boardSudoku).flat()[i]){
          document.querySelectorAll('.cell')[i].style.color = 'red'
        }
        document.querySelectorAll('.cell')[i].textContent = solve(boardSudoku).flat()[i]
      }
      document.querySelector('.ii').textContent = `...`
    }, 100)
    
    for (let i=0; i<=80; i++){
        document.querySelectorAll('.cell')[i].style.color = '#000'
    }
    } else {
      document.querySelector('.alert').classList.add('alert2_active')
      setTimeout(() => {
        document.querySelector('.alert').classList.remove('alert2_active')
      }, 2300)
    }
})
let checkStr = function (str){
  let arrayCheck = []
   for (let i=0; i<str.length; i++){
    
    arrayCheck.push(str[i].search(/([1-9]|[-])/g) ) 
}
  return !arrayCheck.some(elem => elem === -1)
}

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
let cell = document.querySelectorAll('.cell')
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
  return board.flat().join('').indexOf("-")==-1 ? true : false
}


function prettyBoard(board) {
  return board.join('\n');
}






