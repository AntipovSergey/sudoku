const newSudoku = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

const massiveFirst = [1, 2, 3, 4, 5];
const massiveSecond = [2, 6, 7, 4, 8, 9];

const verticalTest = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ['-', '2', '3', '-', '5', '6', '-', '8', '9'],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
];

const vertical = (puzzle) => {
  const Massive = [];
  for (let x = 0; x < puzzle.length; x += 1) { // Находит вертикали
    const string = [];
    for (let i = 0; i < puzzle[x].length; i += 1) {
      string.push(puzzle[i][x]);
    }
    Massive.push(string);
  }
  return Massive;
};

const solve = (boardString) => { // Переводит строку в двумерный массив
  const board = [
    [], [], [], [], [], [], [], [], [],
  ];
  let n = 0;
  for (let i = 0; i < 9; i += 1) {
    for (let x = 0; x < 9; x += 1) {
      board[i].push(boardString[n]);
      n += 1;
    }
  }
  return board;
};

const emptyCell = (sudoku) => { // Находит пустую клетку, если их нет возвращает false
  const index = [];
  for (let j = 0; j < sudoku.length; j += 1) {
    for (let i = 0; i < sudoku[0].length; i += 1) {
      if (sudoku[j][i] === '-') {
        index.push(j, i);
        return index;
      }
    }
  }
  return false;
};

const horizonSearch = (coords, sudoku) => { // Создаёт массив из возможных вариантов по горизонтали
  const variations = [];
  const ref = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < sudoku.length; i += 1) {
    if (sudoku[coords[0]].includes(ref[i]) === false) {
      variations.push(ref[i]);
    }
  }
  return variations;
};

const verticalSearch = (coords, sudoku) => {
  const variations = [];
  const ref = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const additionalMassive = [];
  for (let x = 0; x < sudoku.length; x += 1) {
    additionalMassive.push(sudoku[x][coords[1]]);
  }
  for (let i = 0; i < additionalMassive.length; i += 1) {
    if (additionalMassive.includes(ref[i]) === false) {
      variations.push(ref[i]);
    }
  }
  return variations;
};

// console.log(vertical(verticalTest));
// console.log(verticalSearch([0, 1], vertical(verticalTest)));

// Функция принимает массив координат и возвращает массив координат текущего квадрата(Ex.: [3, 5]).
const searchPointer = (coord) => {
  const point = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]];
  for (let i = 0; i < point.length - 1; i += 1) {
    if (coord >= point[i] && coord < point[i + 1]) {
      return point[i];
    }
  }
  return false;
};
// console.log(search(coord))
// Функция принимает массив координат текущего квадрата(Ex.: [3, 5]) и исходный массив.
// разбивает квадрат на одномерный массив.
const squareArr = (item, array) => {
  const newArr = [];
  const variations = [];
  const ref = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = item[0]; i < item[0] + 3; i += 1) {
    for (let j = item[1]; j < item[0] + 3; j += 1) {
      newArr.push(array[i][j]);
    }
  }
  for (let i = 0; i < newArr.length; i += 1) {
    if (newArr.includes(ref[i]) === false) {
      variations.push(ref[i]);
    }
  }
  return variations;
};

// console.log(squareArr(coord, arr))

const unitedMassive = (massvie1, massive2, massive3) => { // Объединяет совпадения из массивов
  const finalMassive = [];
  const ref = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < ref.length; i += 1) {
    if (massvie1.includes(ref[i]) && massive2.includes(ref[i]) && massive3.includes(ref[i])) {
      finalMassive.push(ref[i]);
    }
  }
  return finalMassive;
};

// console.log(unitedMassive(massiveFirst, massiveSecond));

const recursion = (sudoku) => { // Решает судоку
  const emptyCellCoord = emptyCell(sudoku); // Нашли координаты пустой клетки
  if (emptyCellCoord === false) {
    return sudoku;
  }
  // console.log(emptyCellCoord);
  const variations1 = horizonSearch(emptyCellCoord, sudoku); // Нашли варианты по горизонтали
  // console.log(variations1);
  const variations2 = verticalSearch(emptyCellCoord, sudoku); // Нашли варианты по вертикали
  // console.log(variations2);
  const pointer = searchPointer(emptyCellCoord);
  const variations3 = squareArr(pointer, sudoku);
  // console.log(variations3);

  const finalVariations = unitedMassive(variations1, variations2, variations3); // Обобщили варианты
  console.log(finalVariations);
  let i = 0;
  while (i < finalVariations.length) {
    if (unitedMassive.length === 0) {
      return false;
    }
    sudoku[emptyCellCoord[0]][emptyCellCoord[1]] = finalVariations[i];
    if (recursion(sudoku) !== false) {
      return recursion(sudoku);
    }
    i += 1;
  }
  return false
};

console.log(solve(newSudoku));

console.log(recursion(solve(newSudoku)));
// console.log(emptyCell(newSudoku));
// console.log(unitedMassive(massiveFirst, massiveSecond));
