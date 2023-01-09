const fs = require('fs');

const reader = () => fs.readFileSync(`${__dirname}/puzzles.txt`, 'utf-8').split('\n');

module.exports = reader;
