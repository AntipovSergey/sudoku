/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  let splittedBoardString = boardString.split('')
  let rows = [];
  let counter = 0;
  for (let i = 1; i <= 9; i += 1) {
    let row = [];
    for (let j = 1; j <= 9; j += 1) {
      row.push(splittedBoardString[counter])
      counter++;
    }
    rows.push(row);
  }

  let columns = [];
  let tableArr = [];

  for (let j = 0; j < rows.length; j += 1) {
      let column = [];
      for (let i = 0; i < rows[j].length; i += 1) {
          column.push(rows[i][j])
      }
      columns.push(column);
  }
  console.log('rows', rows)

let boxes = [];


let s = 0;
let k = 0;
for (let b = 0; b < 9; b += 1) {

  let box = [];
  for (let i = 0; i < 3; i += 1) {
    let boxRow = [];
    for (let j = 0; j < 3; j += 1) {
      boxRow.push(rows[i + s*3][j + k*3])
    }

    box.push(boxRow)
  }
  s += 1;
  if (s % 3 === 0) {
    k +=1;
    s = 0;
  }
  boxes.push(box)
}
console.log(boxes)
}


solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--')
//solve('123456789------------------------------------------------------------------------')


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

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
};
