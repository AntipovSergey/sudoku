/* eslint-disable max-len */
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

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
  const transudokuArr = [[], [], [], [], [], [], [], [], []];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (boardString.length > 81) return 'Неправильный формат судоку';

  for (let i = 0; i < boardString.length; i += 9) { // Распределение строки по 9 символов (цифры и не только)
    sudokuArr.push(sudokuBoard.slice(i, i + 9));
  }

  console.log(RenderSudoku(sudokuArr));
  // console.log('^-.._..-^-.._..-^-.._..-^');
  // console.log(getAvailableSqrNum(sudokuArr, 5, 5));
  // console.log(getAvailableRowNum(sudokuArr, 5));
  // console.log(getAvailableColNum(sudokuArr, 5));
  // console.log('^-.._..-^-.._..-^-.._..-^');
  // console.log(findCommonNum(getAvailableSqrNum(sudokuArr, 5, 5), getAvailableRowNum(sudokuArr, 5), getAvailableColNum(sudokuArr, 5)));

  const solutions = [[], [], [], [], [], [], [], [], []]; // двумерный массив массовов решений - по сути трехмерный массив
  for (let i = 0; i < sudokuArr.length; i += 1) {
    for (let j = 0; j < sudokuArr[i].length; j += 1) {
      if (sudokuArr[i][j] === null) {
        solutions[i][j] = findCommonNum(getAvailableSqrNum(sudokuArr, j, i), getAvailableRowNum(sudokuArr, i), getAvailableColNum(sudokuArr, j));
      } else solutions[i][j] = null;
    }
  }

  let minSolutions = 9; // ищем минимальное количество решений(отсюда сложнее)
    for (let i = 0; i < solutions.length; i += 1) {
      for (let j = 0; j < solutions[i].length; j += 1) {
        if (solutions[i][j] !== null) {
          if (solutions[i][j].length < minSolutions) minSolutions = solutions[i][j].length;
        } 
      }
    }

    solutions = solutions.map(x => x.map(x => x === null ? null : x.length === minSolutions ? x : null)); // отсеиваем решения с не минимальным кол-вом вариантов

    function pickRandomSolution(solutions) {
      let retObj = {
        rowIndex: -1,
        colIndex: -1,
        solNumber: 0
      };
      const solutionsCount = solutions.reduce((acc,x) => acc + x.filter(x => x !== null).length, 0); // считаем количество минимальных решений
      let randomSolutionCounter = Math.ceil(Math.random() * solutionsCount); // пикаем номер случайного решения
      let [i, j] = [-1, 0];
      while (randomSolutionCounter > 0) { 
        i += 1;
        if (i>8) [i, j] = [0, j + 1]; // немного хитрости вместо каскадов фор
        if (solutions[i][j] !== null) randomSolutionCounter -= 1; // отсчитываем номер пробегая по массиву
      }
      retObj.colIndex = j; // получаем координаты вектора случайных решений
      retObj.rowIndex = i;
      retObj.solNumber = solutions[i][j][Math.floor(Math.random()*solutions[i][j].length)] // получаем случайное решение случайного вектора решений
      return retObj;
    }
  
    const solutionObj = pickRandomSolution(solutions); // вот и решение подъехало
    sudokuArr[solutionObj.rowIndex][solutionObj.colIndex] = solutionObj.solNumber; // ааакуратненько карандашиком пишем на поле судоку
   while (sudokuArr.reduce((acc,x) => acc + x.filter(x => x === null).length, 0)>0); // повторяем пока есть пустые места (да, надо бы проверить на отсутствие решений еще)

  return sudokuArr;
}

console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function RenderSudoku(sudokuArr) {
  const tmpArr = [];
  for (let i = 0; i < sudokuArr.length; i += 1) {
    tmpArr.push(sudokuArr[i].map((x) => (x === null ? '0' : x)).join(' '));
  }
  return tmpArr.join('\n');
}

function prettyBoard(board) {
  const sudokuBoard = board.split('').map((el) => (Number(el) ? Number(el) : null));
  const sudokuArr = [];
  if (board.length > 81) return 'Неправильный формат судоку';

  for (let i = 0; i < board.length; i += 9) {
    sudokuArr.push(sudokuBoard.slice(i, i + 9));
  }
  return sudokuArr;
}
 //console.table(prettyBoard('123456789fffffffffzzzzzzzzzooooooooojjjjjjjjjnnnnnnnnnmmmmmmmmmlllllllllkkkkkkkkk'))

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
