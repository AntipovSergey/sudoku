const fs = require('fs');
function read(sud) {
  const file = fs
    .readFileSync('./puzzles.txt', 'utf-8')
    .split('\n')
    .map((el) => el.split(''))
    .map((arr) => arr.map((el) => (el === '-' ? 0 : Number(el))));
  const newArr = [];
  for (let i = 0; i < 9; i++) {
    newArr.push(file[sud].splice(0, 9));
  }
  return newArr;
}
const sud = process.argv[2] ?? 0;
const field = read(sud);
console.table(field);

function findEmpty(board) {
  // const line = 9;
  // const side = 3;
  // const gameField = read()

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[r][c] === 0) {
        return [r, c];
      }
    }
  }
  return null;
}

const empty = findEmpty(board);
if (!empty) {
  return true;
}

const [row, col] = empty;

console.log(empty);

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

function prettyBoard(board) {
  for (let row = 0; row < 9; row++) {
    if (row % 3 === 0 && row !== 0) {
      console.log('-'.repeat(27)); // Горизонтальная линия для разделения блоков
    }
    for (let col = 0; col < 9; col++) {
      if (col % 3 === 0 && col !== 0) {
        process.stdout.write('| '); // Вертикальная черта для разделения блоков
      }
      process.stdout.write(board[row][col] + ' ');
    }
  }
}
