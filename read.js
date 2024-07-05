const fs = require('fs');

const index = process.argv[2];

const readFile = () => {
  const data = fs.readFileSync('./puzzles.txt', 'utf8').trim().split('\n')[index];

  const result = [];
  for (let i = 0; i < data.length; i += 9) {
    const chunky = data.slice(i, i + 9).split('').map((el) => (el === '-' ? el = null : Number(el)));
    result.push(chunky);
  }
  return result;
};

console.log(readFile());

module.exports = { readFile };
