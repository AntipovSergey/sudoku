const fs = require('fs')

const sudoku = fs.readFileSync('./puzzles.txt', 'utf-8')

function SudokuTable(sudoku){
let arr = [];
const newPuzzle = sudoku.split('\n')
const puzzleNum = process.argv[2] || 1
for(let i = 0; i < 81; i += 9){
    arr.push(newPuzzle[puzzleNum].slice(i,i + 9).split(''));
    }
    return arr
}


