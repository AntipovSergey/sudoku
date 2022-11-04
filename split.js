let stringSudoku = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---'

// const fs = require('fs')

// let sudStr = fs.readFileSync('./puzzles.txt', 'utf-8')

function splitString(str) {
  let regex = /.{9}/gm
  const array = [...str.matchAll(regex)];
  let ar = []
  array.forEach(el => ar.push(el[0].split('')))
  
  return ar
}

// console.log(splitString(stringSudoku))
console.log(splitString(sudStr))

module.exports = {splitString}