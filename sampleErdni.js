// console.log('sample main erdni');

const fs = require('fs');

const data = fs.readFileSync('./puzzles.txt', 'utf8');
console.log(data)