const fs = require("fs");
function read(n) {
  const sudokuMass = []
  n = process.argv[2]-1
  let size =9
  const readText = fs.readFileSync("./puzzles.txt","utf-8").split('\n')
  for (let i = 0; i <readText[n].length/size; i++){
    sudokuMass[i] = readText[n].slice((i*size), (i*size) + size);
}
  return sudokuMass 
}
console.table(read(4))


function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
module.exports = read;



