const fs = require('fs');

function read() {
  const sudokuText = fs.readFileSync('./puzzles.txt', 'utf-8');
  const lines = sudokuText.trim().split('\n')[0].split('');
  const puzzles = [];
  for (let i = 0; i < lines.length; i += 9) {
    const puzzle = lines.slice(i, i + 9);
    puzzles.push(puzzle);
  }
  const puzzlesWithNull = puzzles.map((elArr) => elArr.map((el) => (el === '-' ? 0 : Number(el))));
}

read();

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

function prettyBoard(isSolved) {
  for (let i = 0; i < isSolved.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      console.log('---- ---- ---- ----');
    }
    let newStr = '';
    for (let j = 0; j < isSolved[i].length; j++) {
      if (j % 3 === 0 && j !== 0) {
        newStr += '|';
      }
      newStr += `${isSolved[i][j]} `;
    }
    console.log(newStr);
  }
}
