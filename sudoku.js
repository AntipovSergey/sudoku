/* eslint-disable max-len */
function Transpose(arr) { // Транспонирование матрицы , для проверки ее 'столбов'
  const trArr = [[], [], [], [], [], [], [], [], []];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      trArr[i].push(arr[j][i]);
    }
  }
  return trArr;
}

function getAvailableRowNum(sudokuArr, rowIndex) {  // Поиск доступных цифр для строки
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < sudokuArr[rowIndex].length; i += 1) {
    if (sudokuArr[rowIndex][i] !== null) numbers = numbers.filter((x) => x !== sudokuArr[rowIndex][i]);
  }
  return numbers;
}

function getAvailableColNum(sudokuArr, colIndex) {  // Поиск доступных цирф для столбцов
  return getAvailableRowNum(Transpose(sudokuArr), colIndex);
}

function getAvailableSqrNum(sudokuArr, colIndex, rowIndex) {
  const [ri, ci] = [Math.floor(rowIndex / 3) * 3, Math.floor(colIndex / 3) * 3]; // ri, ci - индексы верхнего левого угла квадрата [colIndex, rowIndex]
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const tmpArr = sudokuArr[ri].slice(ci, ci + 3).concat(sudokuArr[ri + 1].slice(ci, ci + 3), sudokuArr[ri + 2].slice(ci, ci + 3)); // квадрат в одномерный массив
  for (let i = 0; i < tmpArr.length; i += 1) {
    if (tmpArr[i] !== null) numbers = numbers.filter((x) => x !== tmpArr[i]); // фильтруем numbers - получаем решения
  }
  return numbers;
}

function sqrConcat(sudokuArr) {
  const strArr = [];
  for (let i = 0; i <= 6; i += 3) {
    for (let j = 0; j <= 6; j += 3) {
      strArr.push(sudokuArr[i].slice(j, j + 3).concat(sudokuArr[i + 1].slice(j, j + 3), sudokuArr[i + 2].slice(j, j + 3))); // квадрат в одномерный массив
    }
  }
  return strArr;
}

function findCommonNum(arr1, arr2, arr3) { // чекаем пересекающиеся значения массивов (это массивы решений)
  const tmpArr = arr1.concat(arr2, arr3);
  function countIt(arr, num, start) {
    let counter = 0;
    for (let i = start; i < arr.length; i += 1) {
      if (arr[i] === num) counter += 1;
    }
    return counter;
  }
  return tmpArr.filter((x, _, arr) => countIt(arr, x, 0) === 3).filter((x, i, arr) => countIt(arr, x, i) > 2);
}

function solve(boardString) {
  const sudokuBoard = boardString.split('').map((el) => (Number(el) ? Number(el) : null)); // Превращение строки в массив с заменой всех 'не чисел' на null
  const sudokuArr = [];
  // const transudokuArr = [[], [], [], [], [], [], [], [], []];
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (boardString.length > 81) return 'Неправильный формат судоку';

  for (let i = 0; i < boardString.length; i += 9) { // Распределение строки по 9 символов (цифры и не только)
    sudokuArr.push(sudokuBoard.slice(i, i + 9));
  }

  do { // там внизу while с повторением
    let solutions = [[], [], [], [], [], [], [], [], []]; // двумерный массив массовов решений - по сути трехмерный массив
    for (let i = 0; i < sudokuArr.length; i += 1) {
      for (let j = 0; j < sudokuArr[i].length; j += 1) {
        if (sudokuArr[i][j] === null) {
          solutions[i][j] = findCommonNum(getAvailableSqrNum(sudokuArr, j, i), getAvailableRowNum(sudokuArr, i), getAvailableColNum(sudokuArr, j));
        } else solutions[i][j] = null;
      }
    }

    let minSolutions = 9; // ищем минимальное количество решений
    for (let i = 0; i < solutions.length; i += 1) {
      for (let j = 0; j < solutions[i].length; j += 1) {
        if (solutions[i][j] !== null) {
          if (solutions[i][j].length < minSolutions) minSolutions = solutions[i][j].length;
        }
      }
    }

    solutions = solutions.map(x => x.map(x => x === null ? null : x.length === minSolutions ? x : null)); // отсеиваем решения с не минимальным кол-вом вариантов

    function pickRandomSolution(solutions) {
      const retObj = {
        rowIndex: -1,
        colIndex: -1,
        solNumber: 0,
      };
      const solutionsCount = solutions.reduce((acc, x) => acc + x.filter(x => x !== null).length, 0); // считаем количество минимальных решений
      let randomSolutionCounter = Math.ceil(Math.random() * solutionsCount); // пикаем номер случайного решения
      let [i, j] = [-1, 0];
      while (randomSolutionCounter > 0) {
        i += 1;
        if (i > 8) [i, j] = [0, j + 1]; // немного хитрости вместо каскадов фор
        if (solutions[j][i] !== null) randomSolutionCounter -= 1; // отсчитываем номер пробегая по массиву
      }
      retObj.colIndex = i; // получаем координаты вектора случайных решений
      retObj.rowIndex = j;
      retObj.solNumber = solutions[j][i][Math.floor(Math.random() * solutions[j][i].length)] // получаем случайное решение случайного вектора решений
      return retObj;
    }

    const solutionObj = pickRandomSolution(solutions); // вот и решение подъехало
    sudokuArr[solutionObj.rowIndex][solutionObj.colIndex] = solutionObj.solNumber; // ааакуратненько карандашиком пишем на поле судоку
  } while (sudokuArr.reduce((acc, x) => acc + x.filter(x => x === null).length, 0) > 0); // повторяем пока есть пустые места (да, надо бы проверить на отсутствие решений еще)

  return sudokuArr;
}

function isSolved(board) {
  let counterRight = 0;
  for (let i = 0; i < board.length; i += 1) {
    if (board[i].reduce((acc, el) => acc + el) === 45) counterRight += 1;
    if (Transpose(board)[i].reduce((acc, el) => acc + el) === 45) counterRight += 1;
    if (sqrConcat(board)[i].reduce((acc, el) => acc + el) === 45) counterRight += 1;
  }
  return counterRight === 27;
}

function renderSudoku(sudokuArr) {
  const tmpArr = [];
  for (let i = 0; i < sudokuArr.length; i += 1) {
    tmpArr.push(sudokuArr[i].map((x) => (x === null ? '0' : x)).join(' '));
  }
  return tmpArr.join('\n');
}

function prettyBoard(board) {
  const sudokuArr = [];
  if (board.length > 81) return 'Неправильный формат судоку';

  for (let i = 0; i < board.length; i += 9) {
    sudokuArr.push(board.slice(i, i + 9));
  }
  return renderSudoku(sudokuArr.flat(1));
}

module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
