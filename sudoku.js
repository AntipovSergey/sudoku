/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const regEx =
  /(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})/;

const string =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
const str = string
  .replace(
    regEx,
    '$1s$4s$7, $2s$5s$8, $3s$6s$9, $10s$13s$16, $11s$14s$17, $12s$15s$18, $19s$21s$25, $20s$23s$26, $21s$24s$27'
  )
  .split(', ');

for (let index = 0; index < str.length; index++) {
  str[index] = str[index].split('s');
}

for (let index = 0; index < str.length; index++) {
  for (let j = 0; j < str[index].length; j++) {
    str[index][j] = str[index][j].split('');
  }
}
// функция решения 3х3
function putIntegersIntoSmallSquere(arr) {
const resultArr = [...arr];
for (let c = 0; c < arr.length; c++) {
  for (let d = 0; d < arr.length; d++) {
    // находим пустые элементы
    if (arr[c][d] === '-') {
      for (let index = 1; index <= 9; index++) {
        // подставляем числа от 1 до 9
        const arrToString = arr.flat().join('');
        // проверяем, что предложенное число 'index' не существуем в массиве 3х3
        if (arrToString.indexOf(index) === -1) {
          for (let i = 0; i < arr.length; i++) {
            // проверяем, что предложенное число 'index' не повторяется в строках массива
            if (!arr[i].includes(index.toString())) {
              // проверяем, что предложенное число 'index' не повторяется в столбцах массива
              for (let j = 0; j < arr.length; j++) {
                if (arr[j][i] !== index.toString()) {
                  // после 3х проверок меняем значение в массиве на цифру index
                  resultArr[c][d] = index.toString();
                }
              }
            }
          }
        }
      }
    }
  }
}
return resultArr
}

for (let index = 0; index < str.length; index++) {
  str[index] = putIntegersIntoSmallSquere(str[index]);
}

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};


