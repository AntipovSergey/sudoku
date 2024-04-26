const fs = require('fs');

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  const sudokuTxt = fs.readFileSync('puzzles.txt', 'utf-8');
  const line = sudokuTxt.trim().split('\n')[0].split('');
  // console.log(line);
  const puzless = [];
  for (let i = 0; i < line.length; i += 9) {
    const puzle = line.slice(i, i + 9);
    puzless.push(puzle);
  }

  const puzleDone = puzless.map((elArr) => elArr.map((el) => (el === '-' ? 0 : Number(el))));
  return puzleDone;
}

function solve(puzleDone) {
  return puzleDone.map((subArr) => subArr.map((num) => (num === 0 ? Math.floor(Math.random() * 9) + 1 : num)));
}


function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      console.log('---- ---- ---- ----');
    }
    let newStr = '';
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 3 === 0 && j !== 0) {
        newStr += '|';
      }
      newStr += `${arr[i][j]} `;
    }
    console.log(newStr);
  }
}
prettyBoard(solve(read()));
// prettyBoard(read());
