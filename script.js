const fs = require('fs');

function createField(current) {
  const playFieldStr = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8').split('\r\n').filter(e => e != '');

  console.log(playFieldStr[current]);
  const res = [];
  for (let i = 0; i < playFieldStr[0].split('').length; i += 9) {
    res.push(playFieldStr[0].split('').splice(i, 9))
  }
  finndMatchVert(res)
}

function finndMatchVert(arr) {
  console.table(arr) 
  const arrToCheck = []
  for (let i = 1; i <= 9; i++) {
    arrToCheck.push(i)
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[j][0]);
      if (arr[j][i] === '-') {
        let emptyСellX = i;
        console.log(emptyСellX);
        return
      }
    }
  }
}
// console.log('Это arr ', arr[j][i]);
createField(0)