const { Linter } = require('eslint');
const fs = require('fs');
function read(num) { 

}
// console.log(read(0));

const game = read(0);

function solve(game) {
 
//   console.table(game);
//   let findings = [];
//   game.forEach(line => {
//     const sum = line.reduce((acc,cv)=>acc+cv,0);
//     const missing = 45-sum;
// let emptyFiguresIndices = []
// line.forEach(fig,index => {
//   fig === '-' ?  emptyFiguresIndices.push(index):console.log("Линия заполнена")
//   console.log(emptyFiguresIndices)
// });
// if (missing <=9 && emptyFiguresIndices/length === 1){
//   line[emptyFiguresIndices[0]] = missing;
// }
//     findings.push(missing);
//   });
//   return findings;  
}
// Проверки:


  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */

solve(game);

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

// module.exports = {
//   read,
//   solve,
//   isSolved,
//   prettyBoard
// }
