const fs = require('fs');

function read() {
  const readFile = fs.readFileSync('./puzzles.txt', 'utf-8');
  const array = readFile.split('\n').map((el) => el.replaceAll('-', 0));
  

  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    const row = array[i];
    const chunkedRow = [];
    for (let j = 0; j < row.length; j += 81) {
      chunkedRow.push(row.slice(j, j + 81));
    }
    resultArray.push(chunkedRow);
  }

  console.log(resultArray);
  return resultArray;
}
read();

