const board = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

const fn = require('fs');

function read() {
  const sss = fn.readFileSync('./puzzles.txt', 'utf-8').split('\n');
  console.log(sss);
}
read();

function createSudokuBoard(board) {
  const arr = [[], [], [], [], [], [], [], [], []];
  let counter = 0;
  for (let i = 0; i < board.length; i += 1) {
    if (arr[counter].length < 9) {
      arr[counter].push(board[i]);
    } else {
      ++counter;
      arr[counter].push(board[i]);
    }
  }
  return arr;
}

function solve() {
  function findMissingNumbers(numbers) {
    const missingNumbers = [];
    let counter = 1;

    for (let i = 0; i < numbers.length; i++) {
      while (Number(numbers[i]) !== counter) {
        missingNumbers.push(counter);
        counter++;
      }
      counter++;
    }

    return missingNumbers;
  }
}

console.log(checkNumbers('1-58-2--9'));

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
