const fs = require('fs');

const sudokuTxt = fs.readFileSync('./puzzles.txt', 'utf-8');

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  const line = sudokuTxt.trim().split('\n')[0].split('');
  // console.log(line);
  const puzless = [];
  for (let i = 0; i < line.length; i += 9) {
    const puzle = line.slice(i, i + 9);
    puzless.push(puzle);
  }

  const puzleDone = puzless.map((elArr) => elArr.map((el) => (el === '-' ? 0 : Number(el))));
  console.log(puzleDone);
}
read();

function solve(puzleDone) {
  for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (puzleDone[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(puzleDone, row, col, num)) {
                        puzleDone[row][col] = num;
                        if (solveSudoku(puzleDone)) {
                            return true;
                        }
                        puzleDone[row][col] = 0; // Backtrack
                    }
                }
                return false; // Не найдено подходящего числа для этой ячейки
            }
        }
    }
    return true

}
//solve()
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
