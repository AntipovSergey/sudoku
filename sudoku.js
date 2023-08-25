const fs = require('fs');

const newBoard = [];

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

  console.log(arrPazzle);
  return arrPazzle;
}

read();

// function solve() {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции read.
//    * Возвращает игровое поле после попытки его решить.
//    */

// }
function missingNumbers(arr) {
  const findmissingNumbers = [];
  for (let num = 1; num <= 9; num++) {
    if (!arr.includes(num)) {
      findmissingNumbers.push(num);
    }
  }
  return findmissingNumbers;
}

function checkColums(arrPazzle) {
  const arr1 = [];
  for (let col = 0; col < 9; col++) {
    const rowValues = [];
    for (let row = 0; row < 9; row++) {
      rowValues.push(arrPazzle[row][col]);
    }
    const missNum = missingNumbers(rowValues);
    arr1.push({ column: col + 1, missing: missNum });
  }
  return arr1;
}

function checkRow(arrPazzle) {
  const arr1 = [];
  for (let row = 0; row < 9; row++) {
    const colValues = [];
    for (let col = 0; col < 9; col++) {
      colValues.push(arrPazzle[col][row]);
    }
    const missNum = missingNumbers(colValues);
    arr1.push({ row: row + 1, missing: missNum });
  }
  return arr1;
}



function isSolved() {  
  const boardRow = solve();
  for ( let i = 0; i < boardRow.lenght; i++) {
  
   if (boardRow[i].lenght !== new Set(boardRow[i])) {
    return false
   } return true 
  }

  const boardColumn = function rotate(source) {
    const res = source[0].map(() => [])
    for (let i = 0; i < source.length; i++) {
      for (let j = 0; j < source[0].length; j++) {
        res[j][source.length - 1 - i] = source[i][j]
      }
    }
  
    return res
  }


  for ( let i = 0; i < boardRow.lenght; i++) {
  
    if (boardRow[i].lenght !== new Set(boardRow[i])) {
    return false
   } return true
  }

  const checkSq = threeByThree
  for (let i = 0; i < checkSq.length; i++ ) {
    
  }
}

  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
  


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
  isSolved,
  prettyBoard,
  checkColums,
  checkRow,
  missingNumbers,
};