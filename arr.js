const fs = require('fs');
const fileRead = './sudokuFirst.txt'
const sudoku = fs.readFileSync(fileRead, 'utf-8')

function converArr(sudoku){
let regex = /(.{9})(.{9})(.{9})(.{9})(.{9})(.{9})(.{9})(.{9})(.{9})/gm
const arr = sudoku.replace(regex, "$1,$2,$3,$4,$5,$6,$7,$8,$9")
const arrFinish = arr.split(",")
return arrFinish.map((str) =>Array.from(str))
}

