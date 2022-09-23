const readFile = require('./readTXT');

function getRamdomNumber() {
  return Math.ceil(Math.random() * 9);
}

function findZerosAndReplace(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) {
        arr[i][j] = getRamdomNumber();
      }
    }
  }
  const result = arr.join('\n').split(',').join(' ');
  return result;
}

console.table(findZerosAndReplace(readFile()[0]));
