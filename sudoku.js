const fs = require('fs');

function read(num) {
  const strRead = fs.readFileSync('./puzzles.txt', 'utf8')
    .trim()
    .split('\n');

  const strReadnum = strRead[num - 1]
    .split('');

  const mapStr = strReadnum.map((el) => {
    if (el === '-') {
      return 0;
    }
    return Number(el);
  });

  function slice(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 9) {
      result.push(arr.slice(i, i + 9));
    }
    return result;
  }

  return slice(mapStr);
}
// функция которая ищет первый нулевый элемент
function findFirstZero(arr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (arr[i][j] === 0) { return [i, j]; }
    }
  }
  return [-1, -1];
}
// функция которая проверяет есть ли элемент в строке
function checkRow(arr, row, number) {
  for (let j = 0; j < 9; j++) {
    if (arr[row][j] === number) { return false; }
  }
  return true;
}
// функция которая проверяет есть ли элемент в столбце
function checkColomn(arr, colomn, number) {
  for (let i = 0; i < 9; i++) {
    if (arr[i][colomn] === number) { return false; }
  }
  return true;
}
// функция которая проверяет элемент в квадрате
function checkSquare(arr, row, colomn, number) {
  const squareRow = Math.floor(row / 3) * 3;
  const squareColomn = Math.floor(colomn / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (arr[squareRow + i][squareColomn + j] === number) { return false; }
    }
  }
  return true;
}
// проверка всех трех функий
function checkAll(arr, row, colomn, number) {
  if (checkRow(arr, row, number) && checkColomn(arr, colomn, number) && checkSquare(arr, row, colomn, number)) { return true; }
  return false;
}
function solve(arr) {
  const position = findFirstZero(arr);

  const rowPosition = position[0];
  const colomnPosition = position[1];
  if (rowPosition === -1) {
    return true;
  } // больше нет пустых позиций
  for (let number = 1; number < 10; number++) {
    if (checkAll(arr, rowPosition, colomnPosition, number)) {
      arr[rowPosition][colomnPosition] = number;
      const result = solve(arr);
      if (result) {
        return result;
      }
      arr[rowPosition][colomnPosition] = 0;
    }
  }
  return false;
}
// const array1 = [[1, 0, 5, 8, 0, 2, 0, 0, 0], [0, 9, 0, 0, 7, 6, 4, 0, 5],
//   [2, 0, 0, 4, 0, 0, 8, 1, 9],
//   [0, 1, 9, 0, 0, 7, 3, 0, 6], [7, 6, 2, 0, 8, 3, 0, 9, 0], [0, 0, 0, 0, 6, 1, 0, 5, 0], [
//     0, 0, 7, 6, 0, 0, 0, 3, 0], [4, 3, 0, 0, 2, 0, 5, 0, 1], [6, 0, 0, 3, 0, 8, 9, 0, 0]];
// console.table(array1);
// solve(array1);
// console.table(array1);

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

// const arr = [[1, 2, 3, 4, 5, 6, 7, 8, 9],
// [1, 2, 3, 4, 5, 6, 7, 8, 9],
// [1, 2, 3, 4, 5, 6, 7, 8, 9],
// [1, 2, 3, 4, 5, 6, 7, 8, 9],
// [1, 2, 3, 4, 5, 6, 7, 8, 9],
// [1, 2, 3, 4, 5, 6, 7, 8, 9],
// [1, 2, 3, 4, 5, 6, 7, 8, 9],
// [1, 2, 3, 4, 5, 6, 7, 8, 9],
// [1, 2, 3, 4, 5, 6, 7, 8, 9]]
function prettyBoard(array) {
  // let resultBoard=board.map((row)=> {return row.map((el) => {return emojis[el]})});
  return array.map((el) => el.join(' ')).join('\n');
}
// let findArray=read(15);
// console.table(findArray);

// solve(findArray);
// console.table(findArray);

module.exports = { read, findFirstZero, checkRow, checkColomn, checkSquare, checkAll, solve, prettyBoard };
