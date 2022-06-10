const { emit } = require('process');

function getSudoku () {
    let num = process.argv[2] -1
    const fs = require('fs');
    let fileContent = fs.readFileSync("sudoku-puzzles.txt", "utf8");
    let newArray = fileContent.split('\n');
    let result =[]
    let arr = newArray[num].split('');
for (let i = 0; i < arr.length; i+= 9) {
    result.push(arr.slice(i, i+9));
}
    return result;
}

module.exports = {getSudoku};