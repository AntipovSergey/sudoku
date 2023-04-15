
const fs = require('fs');
const readFile = fs
  .readFileSync('./puzzles.txt', 'utf-8')
  .split('\r\n')
  .slice(0, 10);
// console.log(readFile);

function solve(boardString) {
  const board = boardString.map((el) => el.split(''));
  const array = board.map((el) => {
    const sudokuG = [];
    for (let i = 0; i < el.length; i += 9) {
      sudokuG.push(el.slice(i, i + 9));
    }
    return sudokuG;
  });
  return array.flat();
}
