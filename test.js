const fs = require('fs');
const fileData = fs.readFileSync('./puzzles.txt','utf-8');
 
 function puzzle(){
    const puzzles = fileData
    .split('\n')
    .filter((line) => line !== '');

  let puzzleNumber = Number(process.argv[2]) || 1;

  if (puzzleNumber > puzzles.length) {
    puzzleNumber = puzzles.length;
  }
  const puzzle = puzzles[puzzleNumber - 1];

  return puzzle;
}
  module.exports = puzzle;