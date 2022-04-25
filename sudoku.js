const fs = require('fs');

function solve(text) { 
  let arr = text.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-') {
      arr[i] = '0';
    }
  }
  let text1 = arr.join('');
  let r = '';
  for (let i = 0; i < text1.length; i++) {
    if (i % 9 === 0) {
      r = r + '\n' + text1[i];
    } else {
      r = r + text1[i];
    }
  }
  let arr1 = r.split('\n').slice(1);
  let arr2 = [];
  let arr3 = arr1.map(a => a.split(''));
  for (let i = 0; i < arr1.length; i++) {
   arr2.push(arr3.map(a => +a[i]));
  }
  let sudoku = []
for (let i = 0; i < arr1.length; i++) {
 sudoku.push(arr2.map(a => a[i]));
}

function cordi(arr) {
  for (let i = 0; i < arr.length; i ++) {
    for (let g = 0; g < arr.length; g ++) {
      if (arr[i][g] === 0) {
      return [i,g]
    }
  }
}
return 'end'
}





test()
return sudoku
}

function isSolved(board) {
return true
}


function prettyBoard(board) {
console.table(board)
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
