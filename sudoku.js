// Метод для заполнения доски
function solve(boardString) {
  // Создаем двухуровневый массив из строки
  function createSudArr() {
    const arr = boardString.replace('\n', '').split('');
    const sudokuArr = [];
    for (let i = 0; i < 9; i += 1) {
      const stringArr = [];
      for (let j = 0; j < 9; j += 1) {
        stringArr.push(arr[j + (i * 9)]);
      }
      sudokuArr.push(stringArr);
    }
    return sudokuArr;
  }

  // Созданный двумерный массив присваиваем переменной
  const sudArr = (typeof (boardString) === 'string') ? createSudArr() : boardString;

  // Получаем группу 3 на 3, в которой находится незаполненная ячейка
  function getGroup(arr, width, height) {
    function getNums(num) {
      if (num <= 2) return [0, 1, 2];
      if (num > 2 && num <= 5) return [3, 4, 5];
      return [6, 7, 8];
    }

    // Координаты групп 3 на 3
    const x = getNums(width);
    const y = getNums(height);
    return [arr[x[0]][y[0]], arr[x[0]][y[1]], arr[x[0]][y[2]], arr[x[1]][y[0]], arr[x[1]][y[1]],
      arr[x[1]][y[2]], arr[x[2]][y[0]], arr[x[2]][y[1]], arr[x[2]][y[2]]];
  }

  // Получаем незаполненный элемент
  function getElem(arr1, arr2, arr3) {
    const allNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // Проверка и добавление в массив возможных вариантов для заполнения ячейки в финальном массиве
    const leftNums = [];
    for (let i = 0; i < allNums.length; i += 1) {
      if (!arr1.includes(allNums[i]) && !arr2.includes(allNums[i]) && !arr3.includes(allNums[i])) {
        leftNums.push(allNums[i]);
      }
    }
    // Если для данной ячейки возможен только один вариант то мы его возвращаем
    if (leftNums.length === 1) return leftNums[0];
    return 0;
  }

  // Метод заполнения судоку
  function searchEmptyEl() {
    for (let i = 0; i < sudArr.length; i += 1) {
      for (let j = 0; j < sudArr[i].length; j += 1) {
        if (sudArr[i][j] === '-') { // Если ячейка не заполнена
          const strArr = [sudArr[i][0], sudArr[i][1], sudArr[i][2], sudArr[i][3], sudArr[i][4],
            sudArr[i][5], sudArr[i][6], sudArr[i][7], sudArr[i][8]];
          const colArr = [sudArr[0][j], sudArr[1][j], sudArr[2][j], sudArr[3][j], sudArr[4][j],
            sudArr[5][j], sudArr[6][j], sudArr[7][j], sudArr[8][j]];
          const groupArr = getGroup(sudArr, i, j);
          const num = getElem(strArr, colArr, groupArr);
          if (num) {
            sudArr[i][j] = num;
          }
        }
      }
    }
  }

  // Проверка массива на пустые элементы
  function haveEmptyEl() {
    for (let i = 0; i < sudArr.length; i += 1) {
      if (sudArr[i].includes('-')) return true;
    }
    return false;
  }
  // Входная точка, запуск функции заполнения
  searchEmptyEl();
  // Если массив не заполнен, запускаем функнцию заполнения,
  // если заполнение прошло удачно, то возвращаем массив заполненных данных
  if (haveEmptyEl()) return solve(sudArr);
  return sudArr;
}

// Метод проверки заполнения строк и столбцов
function isSolved(board) {
  const check = () => {
    for (const array of board) {
      const str = array.join('');
      if (new Set(str).size !== str.length) {
        return false;
      } return true;
    }
  };
  // Создание данных для проверки методом check()
  let strArr = [];
  let colArr = [];
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      strArr = [board[i][0], board[i][1], board[i][2], board[i][3], board[i][4],
        board[i][5], board[i][6], board[i][7], board[i][8]];
      if (!check(strArr)) {
        return false;
      }
      colArr = [board[0][j], board[1][j], board[2][j], board[3][j], board[4][j],
        board[5][j], board[6][j], board[7][j], board[8][j]];
      if (!check(colArr)) {
        return false;
      }
    }
  }
  return true;
}

// Метод для отрисовки решенного судоку в консоль
function prettyBoard(board) {
  const result = [];
  board.map((el) => {
    result.push(el.join(' '));
  });
  return result.join('\n');
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
