const fs = require('fs')
const path = 'sudoku-puzzles.txt'

function readFile(link) {
  let newArr = fs.readFileSync(link, 'utf-8').split('\n')
  return newArr
}
console.log(readFile(path));

module.exports = {
  read: readFile,
}
