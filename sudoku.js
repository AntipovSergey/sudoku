let arr = [
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--",
];


function read(array) {
  const replaceOnZero  = array.join("").replaceAll("-", "0").split("");
  const numbersInArray = replaceOnZero.map((a) => +a);
  let sudokuTable = [];
  const numbersInArrayLength = numbersInArray.length;
  for (let i = 0; i < numbersInArrayLength; i+=9) {
    const numbersInArrayCopy = [...numbersInArray];
    sudokuTable.push(numbersInArrayCopy.splice(i, 9));
  }
  return sudokuTable;
}

console.table(read(arr));

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

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

function findCellValues(sudoku, row, column) {
  const allPossibleValues = [];
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  allPossibleValues = allPossibleValues.concat(checkRow(sudoku, row, values));
  allPossibleValues = allPossibleValues.concat(checkColumn(sudoku, column, values));
  allPossibleValues = allPossibleValues.concat(checkCube(sudoku, row, column, values));
  return allPossibleValues;
}

// проверит все значения в строчке
function checkRow(sudoku, i, values) {
  const result = [...values];
  for (let k = 0; k < sudoku[i].length; k += 1) {
    if (sudoku[i][k] !== 0) {
      if (result.includes(sudoku[i][k])) {
        const index = result.indexOf(sudoku[i][k]);
        result.splice(index, 1);
      }
    }
  }
  return result;
}

function checkColumn(sudoku, j, values) {
  const result = [...values];
  for (let k = 0; k < sudoku.length; k += 1) {
    if (sudoku[k][j] !== 0) {
      if (result.includes(sudoku[k][j])) {
        const index = result.indexOf(sudoku[k][j]);
        result.splice(index, 1);
      }
    }
  }
  return result;
}

function checkCube(sudoku, i, j, values) {
  const result = [...values];
  // i need to find in which cube i am
  const rowIndex = Math.floor(i / 3);
  const columnIndex = Math.floor(j / 3);
  const cubeArray = [];
  const cubeIndexRow = rowIndex * 3;
  const cubeIndexColumn = columnIndex * 3;
  let rowStart;
  let rowEnd;
  let columnStart;
  let columnEnd;
  if (cubeIndexRow === 0) {
    rowStart = 0;
    rowEnd = 3;
  } else {
    rowStart = cubeIndexRow;
    rowEnd = cubeIndexRow + 3;
  }
  if (cubeIndexColumn === 0) {
    columnStart = 0;
    columnEnd = 3;
  } else {
    columnStart = cubeIndexColumn;
    columnEnd = cubeIndexColumn + 3;
  }
  for (let k = rowStart; k < rowEnd; k += 1) {
    for (let f = columnStart; f < columnEnd; f += 1) {
      cubeArray.push(sudoku[k][f]);
    }
  }
  for (let g = 0; g < cubeArray.length; g += 1) {
    if (result.includes(cubeArray[g])) {
      const index = result.indexOf(cubeArray[g]);
      result.splice(index, 1);
    }
  }
  return result;
}

const testPuzzle = [
  [0, 1, 2, 0, 0, 0, 4, 9, 7],
  [0, 0, 2, 0, 0, 0, 4, 9, 7],
  [3, 1, 2, 0, 0, 0, 4, 0, 7],
  [8, 0, 2, 0, 5, 0, 4, 9, 7],
  [6, 1, 2, 0, 0, 0, 4, 0, 7],
  [0, 0, 2, 0, 0, 0, 4, 9, 7],
  [0, 1, 2, 0, 0, 0, 4, 0, 7],
];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // console.log(checkRow(testPuzzle, 0, values))
// console.log(checkColumn(testPuzzle, 0, values))
console.log(checkCube(testPuzzle, 2, 5, values));
