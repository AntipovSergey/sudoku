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
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

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
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
