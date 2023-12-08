const fs = require('fs');

function read() { 
  const board = fs.readFileSync('./puzzles.txt','utf-8'); 
  let boardSplit = board.split(''); 
  let res=[]; 
  let result=[]; 
  for(let i = 0;i < 81;i++) { 
    res.push(boardSplit[i]); 
  } 
  for(let i=0;i<res.length;i++) { 
    if(i%8===0) { 
      result.push(res.slice(i - 8, i + 1)); 
    } 
  } 
  return result; 
} 
console.log(read());

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
