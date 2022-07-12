
const { Cell } = require('./Cell');
const { searchManager } = require('./searchManager');
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  // eslint-disable-next-line max-len
  const cellMap = Array.from({ length: 9 }, (_, rowInd) => boardString.substring(rowInd * 9, (rowInd + 1) * 9));
  cellMap.forEach((row, rowInd) => {
    cellMap[rowInd] = row.split('').map((val, colInd) => new Cell(val, [rowInd, colInd]));
  });

  searchManager(cellMap);
  // const cells = cellMap.flat();
  // cells.forEach((cell) => console.log('possibleValues', cell.possibleValues, '\n'));

  return cellMap.map((el) => el.map((cell) => (cell.value ? cell.value : '-')).join('')).join('');
}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {
  return !board.includes('-');
}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function prettyBoard(board) {
  let newStr;
  for (let i = 0; i < 9; i++) {
    newStr = board.slice(i * 9, (i + 1) * 9)

  }
}
console.log(prettyBoard(str));
const parentEl1 = document.querySelector('.sudocu__wrapper')

function createEl() {
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    const div = document.createElement('div');
    div.classList.add('sudocu__items');
    parentEl1.append(div)

    for (let colIndex = 0; colIndex < 9; colIndex++) {
      // const parentEl2 = document.querySelectorAll('.sudocu__items')
      // console.log(parentEl2);
        const div1 = document.createElement('div');
        div1.classList.add('sudocu__item');
        div1.innerText = str[rowIndex*9 + colIndex]
        div.append(div1);
    }
  }
}
console.log(createEl());


// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  // solve,
  // isSolved,
  prettyBoard,

};
