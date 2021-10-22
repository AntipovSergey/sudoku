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

  // Здесь мы не смогли выйти из рекурсии не сломав вывод 😢
  // TODO Михаил: Моя версия - это то, что нам надо больше функций
  // Всё нужно переписывать блок со строчки 29 до 34
  // И перестроить зависимости, чтобы рекурсия выходила куда надо.

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
  // Итерируемся через массивы массивов
  for (let row = 0; row < size; row++) {
    //  Итерируемся по массиву выбирая массивы с значениями
    for (let column = 0; column < size; column++) {
      // Если элемент в строке row и на озиции column
      // === '.'
      if (board[row][column] === "-") {
        return [row, column];
      }
    }
  }
  return false;
}

function isSolved(board) {} // We didn't have enough time for this one

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

// TODO А ещё мы умеем гуглить и ниже рабочая версия кода :D
// Челендж был написать всё самим.
// Добавлено во время презентации.

// let solveSudoku = function(board) {
//   const size = 9;
//   const boxSize = 3;

//   const findEmpty = (board) => {
//       for (let r = 0; r < size; r++) {
//           for (let c = 0; c < size; c++) {
//               if(board[r][c] === '.') {
//                   return [r,c];
//               }
//           }
//       }
//       return null;
//   }

//   const validate = (num, pos, board) => {
//       const [r,c] = pos;

//       //Check rows
//       for (let i = 0; i < size; i++) {
//           if (board[i][c] === num && i !== r) {
//               return false;
//           }
//       }

//       //Check cols
//       for (let i = 0; i < size; i++) {
//           if (board[r][i] === num && i !== c) {
//               return false;
//           }
//       }

//       //Check box
//       const boxRow = Math.floor( r/boxSize ) * boxSize;
//       const boxCol = Math.floor( c/boxSize ) * boxSize;

//       for (let i = boxRow; i < boxRow + boxSize; i++) {
//           for (let j = boxCol; j < boxCol + boxSize; j++) {
//               if (board[i][j] === num && i !== r && j !== c) {
//                   return false;
//               }
//           }
//       }

//       return true;
//   }

//   const solve = () => {
//       const currPos = findEmpty(board);

//       if (currPos === null) {
//           return true;
//       }
//       //console.log('------------------------------');
//       for (let i = 1; i < size + 1; i++) {
//           const currNum = i.toString();
//           const isValid = validate(currNum, currPos, board);
//           //console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
//           if (isValid) {
//               const [x,y] = currPos;
//               board[x][y] = currNum;

//               if(solve()) {
//                   return true;
//               }

//               board[x][y] = '.';
//           }
//       }

//       return false;
//   }

//   solve();
//   return board;
// };

// console.table(input);
// console.table(solveSudoku(input));
