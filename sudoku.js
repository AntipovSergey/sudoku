const fs = require('fs');

const sudoky = [
  ['1 - 5 8 - 2 - - -'],
  ['- 9 - - 7 6 4 - 5'],
  ['2 - - 4 - - 8 1 9'],
  ['- 1 9 - - 7 3 - 6'],
  ['7 6 2 - 8 3 - 9 -'],
  ['- - - - 6 1 - 5 -'],
  ['- - 7 6 - - - 3 -'],
  ['4 3 - - 2 - 5 - 1'],
  ['6 - - 3 - 8 9 - -'],
];

function read() {
  const str = (fs.readFileSync('puzzles.txt', 'utf8')).split('\n')[0];

  const newStr = [...str.replace(/-/g, 0)];

  const arrPazzle = [];
  const smallArr = [];
  for (let i = 0; i < newStr.length; i++) {
    if (smallArr.length < 9) {
      smallArr.push(newStr[i]);
      arrPazzle.push(smallArr);
    }
  }


  console.log(arrPazzle)
  return arrPazzle;
}

read();

// function solve() {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции read.
//    * Возвращает игровое поле после попытки его решить.
//    */

// }
function checkColums(sudokuBoard) {
  const arr = [];
  for (let col = 0; col < 9; col++) {
    const colValues = [];
    for (let row = 0; row < 9; row++) {
      colValues.push(sudokuBoard[row][col]);
    }
  }
}

function checkRow(sudokuBoeard) {
  const arr = [];
  for (let row = 0; row < 9; row++) {
    const rowValues = [];
    for (let col = 0; col < 9; col++) {
      rowValues.push(sudokuBoeard[col][row]);
    }
  }
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
  
}

function prettyBoard() {
  const divider = '+-------+-------+-------+';
  let sudoku = `${divider}\n`;

  for (let i = 0; i < 9; i += 1) {
    let row = '| ';
    for (let j = 0; j < 9; j += 1) {
      if (j === 3 || j === 6) {
        row += '| ';
      }
      row += `${isSolved()[i][j]} `;
    }
    row += '|\n';
    sudoku += row;

    if (i === 2 || i === 5) {
      sudoku += `${divider}\n`;
    }
  }
  sudoku += divider;
  return sudoku;
}

module.exports = {
  read,
  solve,
  isSolved,
  prettyBoard,
};
