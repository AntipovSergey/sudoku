const fs = require('fs')

const read = (num) => {
    const arr = []
    const data = fs.readFileSync('puzzles.txt', 'utf-8')
    const lines = data.split('\n')
    const line = lines[num].split('')

}
console.log(read(1))