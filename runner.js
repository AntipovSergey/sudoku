// Use filesystem.
const { isModuleSpecifier } = require('babel-types');
const fs = require('fs');
const { exp, mod } = require('prelude-ls');
// Use functions from sudoku.js file.
const sudoku = require('./sudoku');
let parsedPuzzle = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
let content = parsedPuzzle.split('\n')

console.log(content);

function sudokuParse(content, puzzlenumber) {
 let puzzle = content[puzzlenumber - 1].split('');
 let arrayOfArrays = []
 let num = 9;
 for (let i = 0; i < puzzle.length; i += 9) {
   arrayOfArrays.push(puzzle.slice(i, num));
   num = num + 9
 } return arrayOfArrays;
 // console.log(puzzle);
 // return puzzle;
}
console.table(sudokuParse(content, 1))


module.exports = sudokuParse
