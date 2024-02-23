const fs = require('fs');

const read = () => {
    const num = process.argv[2];
    const data = fs.readFileSync('./puzzles.txt', 'utf-8').trim().split('\n');
    
    const sudoku = data[num].split('')
    
    const arr = [];
    for (let i = 0; i < 81; i += 9) {
        arr.push(sudoku.slice(i, i + 9));
    }
    return arr;
}

console.log(read())

module.exports = read;