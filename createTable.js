const fs = require('fs')
let readFile = fs.readFileSync('puzzles.txt', 'utf8')
let splitText = readFile.split('\n')

//Укажи индекс это строки, которую нужно вывести из puzzles.txt
let pickString = 0
let stringByIndex = splitText[pickString]

function convertStringToBoard() {
  let board = []  
  for (let j = 0; j < stringByIndex.length; j += 9) {
    let arr = []
    for (let i = j; i < j + 9 ; i++) {
      arr.push(stringByIndex[i])
    }
    board.push(arr)
  }  
  return board
}
module.exports = convertStringToBoard
