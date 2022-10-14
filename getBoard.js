const { log } = require('console');
const fs = require('fs');

function getBoards(sudokuNumber) {
  const readTxt = fs.readFileSync('./puzzles.txt', 'utf-8');
  const strings = readTxt.split('\n');
  strings.pop();
  const getArrays = strings.map((el) => el.split(''));
  


  return getArrays[sudokuNumber];
  
}
console.log(getBoards(process.argv[2]));