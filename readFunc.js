const fs = require('fs')
const path = 'sudoku-puzzles.txt'

function readFile(link) {
  let newArr = fs.readFileSync(link, 'utf-8').split('\n')
  return newArr
}

function parseArr(lineNumber = 0, func = readFile(path)) {
  let finishAr=[]
  newArr = func[lineNumber].split('').map(el => { return (el === '-') ? 0 :Number(el); })
  let row0 = newArr.slice(0, 9);
  let row1 = newArr.slice(9, 18);
  let row2 = newArr.slice(18, 27);
  let row3 = newArr.slice(27, 36);
  let row4 = newArr.slice(36, 45);
  let row5 = newArr.slice(45, 54);
  let row6 = newArr.slice(54, 63);
  let row7 = newArr.slice(63, 72);
  let row8 = newArr.slice(72, 81);
  finishAr.push(row0, row1, row2, row3, row4, row5, row6, row7, row8)
  return finishAr
}
console.log(parseArr(0));


module.exports = {
  read: readFile,
  parse: parseArr,
}
