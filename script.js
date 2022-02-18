const fs = require('fs');

function createField() {
  const playFieldStr = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8').split('\r\n');
  const lengField = 9;
  const playFildArr = [];
  for (let i = 0; i < lengField; i++) {
    playFildArr[i] = [];
    for (let j = 0; j < lengField; j++) {
      playFildArr[i].push(playFieldStr[i][j]);
    }
  }
  console.log(playFieldStr[0]);
  console.table(playFildArr);
  finndMatchVert(playFildArr, lengField)
}
createField()

function finndMatchVert(arr, leng) {
  const arrToCheck = []
  for (let i = 1; i <= leng; i++) {
    arrToCheck.push(i)
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] == arrToCheck[i])
        console.log(arrToCheck[i]);
    }
  }
}