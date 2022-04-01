// const sudokuParse = require('./runner')
// const text = sudokuParse.sudokuParse()

function strToArr(text) {
  const strTwo = text.split('')
  const arr = []
  for (let i = 0; i < 81; i += 9) {
    arr.push(strTwo.slice(i,i+9))
  }
  return arr
}

module.exports = { strToArr }


