const fs = require('fs');

const num = process.argv[2] - 1;

function read(num) {
  const readFile = fs.readFileSync('./puzzles.txt', 'utf8');
  const arr = readFile.split('\n');
  const sudokuLine = arr[num];
  const splitSud = sudokuLine.split('');
  const arrSudLine = [];

  arrSudLine.push(splitSud.slice(0, 9));
  arrSudLine.push(splitSud.slice(9, 18));
  arrSudLine.push(splitSud.slice(18, 27));
  arrSudLine.push(splitSud.slice(27, 36));
  arrSudLine.push(splitSud.slice(36, 45));
  arrSudLine.push(splitSud.slice(45, 54));
  arrSudLine.push(splitSud.slice(54, 63));
  arrSudLine.push(splitSud.slice(63, 72));
  arrSudLine.push(splitSud.slice(72, 81));
  return arrSudLine;
}

read(num);

module.exports = {num, read}




