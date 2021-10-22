function solve(boardString) {
  let board = parseBoard(boardString);
  insertNumber(board); // Вставляем числа
  return board;
}

function parseBoard(board) {
  let reg = /.{9}/g;
  let arr = board.match(reg);
  // список строк
  let newArr = arr.map((board) => board.split(""));
  return newArr;
}

function prettyBoard(board) {
  console.table(board);
}

function insertNumber(board) {
  let coordinates = findEmpty(board);
  if (!coordinates) {
    return board;
  }
  // Перебираем числа для вставки
  for (let i = 1; i <= 9; i++) {
    let target = i;
    // Проверяем может ли стоять здесь num
    if (test(board, coordinates, target)) {
      let finalTarget = target;
      deployNumber(board, coordinates, target);
      insertNumber(board);
    }
  }
  // insertNumber(board)
  // Бесконечная рекурсия
}

function deployNumber(board, cord, number) {
  const row = cord[0];
  const col = cord[1];
  board[row][col] = number;
}

function findEmpty(board) {
  // find '.'
  const size = 9;
  // Найти пустую клетку
  // На входе полная таблица
  // Итерируемся через строки
  for (let row = 0; row < size; row++) {
    //  Итерируемся по строке выбирая c  значения
    for (let column = 0; column < size; column++) {
      // Если элемент в строке r и на её позиции column
      // === '.'
      if (board[row][column] === "-") {
        return [row, column];
      }
    }
  }
  return false;
}

function isSolved(board) {} // We don't have time for this one

function test(board, coordinates, target) {
  return (
    squareCheck(board, coordinates, target) &&
    crossCheck(board, coordinates, target)
  );
}
function crossCheck(array, position, num) {
  // column право-лево
  let [row, column] = position;
  let number = array[row][column];

  for (let i = 0; i < array.length; i++) {
    let row = position[0];
    let column = position[1];

    for (let i = 0; i < array.length; i++) {
      for (let g = 0; g < array.length; g++) {
        if (+array[row][g] === num) {
          return false;
        } else if (+array[i][column] === num) {
          return false;
        }
      }
    }
    return true;
  }
}

function squareCheck(arr, pos, target) {
  let tests = { 0: /[0-2]/, 3: /[3-5]/, 6: /[6-8]/ };
  const [row, column] = pos;
  let startRow;
  let startColumn;
  let element;

  // Приведение к нормальной точке отсчёта)
  for (i in tests) {
    regex = tests[i];
    if (regex.test(row)) {
      startRow = i;
    }
    if (regex.test(column)) {
      startColumn = i;
    }
  }
  // Тест
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startColumn; j < startColumn + 3; j++) {
      element = arr[i][j];
      if (element !== "-") {
        if (Number(element) === target) {
          return false;
        }
      }
    }
  }
  // Совпадение
  // На входе полная таблица

  return true;
}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
