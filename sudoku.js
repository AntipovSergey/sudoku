const fs = require('fs');

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {}
  

// console.table(getSudoku(text, 0));
// const sud = getSudoku(data, el);
const terminal = process.argv[2];
const text = fs.readFileSync('puzzles.txt', 'utf8');
function solve(data, el) {
  const arr = data.split('\n');
  const finArr = arr.slice(0, arr.length - 1);
  const str = finArr[el];
  const newStr = [];
  for (let i = 0; i < str.length; i += 9) {
    newStr.push(str.slice(i, i + 9));
  }
  let trans = newStr.map((el) => el.split('').map((el2) => {
    for ( let i = 0; i < el.length; i++) {
      let math = Math.ceil(Math.random() * (9));
      const math1 = Math.ceil(Math.random() * (9))
      if (!el.includes(math) &&  ( el2[i] === '-')) {
        return math
      } if (el.includes(math) &&  ( el2 === '-')) { 
return math1
      }
      return el2
    }
  // }

    // if ( el2 === '-') {
    //   return math; // el2.toString().replace(math);
    // }
    // return el2;
  }));
  return trans;
  
}
console.table(solve(text, terminal));

function solve1(boardString) {
  // let numberOfDef = boardString.map((el) => el.split('').reduce(((acc, cur) =>
  // => cur.includes('-') ? acc + 1 : acc + 0), 0));
  const defReplace = boardString.map((el) => el.split('').map((el2) => {
    const math = Math.ceil(Math.random() * (9));
    if /*!el.includes(math) &&*/ (el2 === '-') {
      return `${math}`; // el2.toString().replace(math);
    }
    return el2;
  }));
  return defReplace;
}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(data, el) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
}
