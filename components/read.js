const fs = require('fs');

function read() {
  const result = [];
  const getTxt = fs
    .readFileSync('./assets/puzzles.txt', 'utf8')
    .trim()
    .split('\n');

  const row = getTxt[process.argv[2] || 0].split('');

  for (let i = 0; i < 9; i += 1) {
    result.push(row.splice(0, 9));
  }

  return result;
}

module.exports = read;
