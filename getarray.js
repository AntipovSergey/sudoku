const fs = require('fs');

function getArray(n) {
  const dataArray = fs.readFileSync('./puzzles.txt', 'utf8').split('\n');
  if (dataArray[dataArray.length - 1] === '') dataArray.pop();
  console.log(dataArray[n]);
  const arr = [];
  for (let j = 0; j < dataArray[n].length; j += 9) {
    arr.push(dataArray[n].slice(j, j + 9).split(''));
  }
  return arr;
}

module.exports = getArray;
