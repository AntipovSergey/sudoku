function read() {


  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

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

function prettyBoard(arr) {
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
console.log(prettyBoard())
