
//console.log(solve('3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--'))


// Веб часть!
for (let i=0; i<=80; i++){
  document.querySelector('.wrapper').innerHTML+=`<div class="cell"></div>`
}
// for (let i=0; i<80; i++){
//   document.querySelectorAll('.cell')[0].textContent = sudokuParse(data)
// }
document.querySelector('.button').addEventListener('click', function(){
    let boardSudoku = document.querySelector('input').value
    for (let i=0; i<=80; i++){
      document.querySelectorAll('.cell')[i].textContent = boardSudoku.split('')[i]
    }
    setTimeout(()=>{
      for (let i=0; i<=80; i++){
        document.querySelectorAll('.cell')[i].textContent = solve(boardSudoku).flat()[i]
      }
    },1500)
  document.querySelector('.wrapper').classList.toggle('wrapper_transparent')
})


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




//Exports all the functions to use them in another file.
// module.exports = {
// 	solve: solve,
// 	isSolved: isSolved,
// 	prettyBoard: prettyBoard
// }



