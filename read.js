const fs = require('fs');

function read() {
  const readPuzzel = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n');
  const smallArr = readPuzzel[0];
  const nineXnine = [];
  for (let i = 0; i < smallArr.length; i += 9) {
    const nine = smallArr.slice(i, i + 9);
    nineXnine.push(nine.split(''));
  }

  return nineXnine;
}
// console.log(read());
