const fs = require('fs')

const read = (num) => {
    const arr = []
    const data = fs.readFileSync('puzzles.txt', 'utf-8')
    const lines = data.split('\n')
    const line = lines[num].split('')
    for (let i = 0; i < line.length; i++){
        arr.push(line.splice(0, 9).map((el) => Number(el.replaceAll('-', '0'))))
    }
    return arr
}
console.log(read(1))