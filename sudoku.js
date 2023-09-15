const arr = [
  ['1-58-2---'],
  ['-9--764-5'],
  ['2--4--819'],
  ['-19--73-6'],
  ['762-83-9-'],
  ['----61-5-'],
  ['--76---3-'],
  ['43--2-5-1'],
  ['6--3-89--'],
];

function read(nomer) {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  const resArr = [];
  resArr.push(arr[nomer - 1]);
  const resArr2 = [];
  for (let i = 0; i < resArr[0].length; i += 9) {
    resArr2.push([resArr[0].slice(i, i + 9)]);
  }
}

function solve(board) {
  const bigSide = 9;
  const squareSide = 3;

  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */

  // Находим пустые клетки для заполнения
  function findEmpty() {
    for (let x = 0; x < bigSide; x += 1) {
      for (let y = 0; y < bigSide; y += 1) {
        if (board[x][y] === '-') {
          return [x, y];
        }
      }
    }
    return undefined;
  }

  function checkBoard(num, position) {
    const [x, y] = position;

    // Проверка строки
    for (let i = 0; i < bigSide; i += 1) {
      if (board[x][i] === num && i !== y) {
        return false;
      }
    }

    // Проверка колонок

    for (let i = 0; i < bigSide; i += 1) {
      if (board[i][y] === num && i !== x) {
        return false;
      }
    }
    // Проверка квадратиков
    const squareX = Math.floor(x / squareSide) * squareSide;
    const squareY = Math.floor(y / squareSide) * squareSide;
    for (let i = 0; i < squareX + squareSide; i += 1) {
      for (let j = 0; j < squareY + squareSide; j += 1) {
        if (board[i][j] === num && i !== x && j !== y) {
          return false;
        }
      }
    }
    return true;
  }

  // Подставляем числа в судоку

  const position = findEmpty();
  if (position === undefined) {
    return true;
  }

  for (let i = 1; i < 10; i += 1) {
    const num = i.toString();
    const valid = checkBoard(board, num, position);
    if (valid) {
      const [row, col] = position;
      board[row][col] = num;

      if (solve()) {
        return true;
      }
    }
    board[row][col] = '-';
  }
  return false;
}

function isSolved(board) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */

  if (solve(board)) {
    return true;
  }
  return false;
}




   function prettyBoard(board) {
let newBoard = board.map((row) => row.join(' ')).join('\n');
  return newBoard;
  }

  console.log(prettyBoard(board));

  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve. Принимает массивы строк [2, 5, 7, 3, 1, 6, 4, 8, 9] в массиве судоку 
   * 
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

console.log(solve(arr));





