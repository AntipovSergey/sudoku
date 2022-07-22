const fs = require('fs');
let str = fs.readFileSync('./puzzles.txt', 'utf8');
let str1 = ''
let arr =[]
let sudoku = []
for (let i = 0; i < 81; i ++) {
    str1 += str[i]
}

str = str1.replaceAll('-', 0).split('')
for (let j = 1; j <= 81; j += 1) {
    arr.push(Number(str[j - 1]))
    if((j % 9 === 0) && (j !== 0)) {
        sudoku.push(arr)
        arr = []
    }
}
console.log(str);
console.log(sudoku);
