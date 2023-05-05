const fs = require('fs');

function returnArr() {
  const puzzle = fs.readFileSync(
    './puzzles.txt',
    'utf-8',

  );

  const newArr = puzzle.trim().split('\n');

  return newArr.map((el) => {
    const arr = [];
    for (let i = 0; i < 81; i += 9) {
      arr.push(el.slice(i, i + 9));
    }
    return arr.map((str) => str.split(''));
  });
}
console.log(returnArr());
