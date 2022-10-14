const fs = require('fs');

function readFile() {
  const file = fs.readFileSync('./puzzles.txt', 'utf-8');
  // for ()
  const sud = file.split('\n');
  console.log(sud);
}
console.log(readFile('./puzzles.txt'));
