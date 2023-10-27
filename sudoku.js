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


function read() {
  let puzzleRead = fs.readFileSync('./puzzles.txt', 'utf-8');
  puzzleRead = puzzleRead.split('\n').join('');
  let cnt = 0;
  const allPuzzlesArr = new Array(135);
  for (let i = 0; i < allPuzzlesArr.length; i++) {
    allPuzzlesArr[i] = [];
  }

  let arrayCounter = 0;
  for (let i = 0; i < puzzleRead.length; i++) {
    allPuzzlesArr[arrayCounter].push(puzzleRead[i]);
    cnt++;
    if (cnt === 9) {
      cnt = 0;
      arrayCounter++;
    }
  }

  const finalPuzzlesArr = new Array(15);
  for (let i = 0; i < finalPuzzlesArr.length; i++) {
    finalPuzzlesArr[i] = [];
  }
  cnt = 0;
  arrayCounter = 0;
  for (let i = 0; i < allPuzzlesArr.length; i++) {
    finalPuzzlesArr[arrayCounter].push(allPuzzlesArr[i]);
    cnt++;
    if (cnt === 9) {
      cnt = 0;
      arrayCounter++;
    }
  }
  return finalPuzzlesArr;
}
console.table(read()[0][0]);


function read() { 
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  const data = fs.readFileSync('./puzzles.txt','utf-8');
  console.log(data);

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
