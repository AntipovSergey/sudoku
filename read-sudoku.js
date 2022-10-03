const fs = require('fs');

function readMap() {
  const file = fs.readFileSync('./puzzles.txt', 'utf8');
  const tr = file.split('\n').filter((line) => line !== '');
  // console.log(tr);
  return tr;
}
// console.log(readMap());
// const read = readMap();
function numSud(arr) {
  const num = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '-') {
        num.push(0);
      } else if (Number(arr[i][j]) >= 1 && Number(arr[i][j]) <= 9) {
        num.push(arr[i][j]);
      }
    }
  }
  console.log(num);
  return num;
}

console.log(numSud(readMap()));
// console.log(numSud(readMap()))
