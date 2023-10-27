const fs = require('fs');

function read () {
    let str = [];
    let numbers = fs.readFileSync(`./puzzles.txt`, 'utf8')
    for (let i = 0; i <= 8; i ++) {
        str.push(numbers[i])
    }
    return str;
}

console.log(read())

