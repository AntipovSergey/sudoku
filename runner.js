const fs = require('fs');

const readAndSolve = require('./readAndSolve');

fs.readFile(
  './puzzles.txt',
  'utf-8',
  readAndSolve,
);
