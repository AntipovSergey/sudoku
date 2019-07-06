const newSudoku1 = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
const newSudoku2 = '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3';
const newSudoku3 = '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9';
const newSudoku4 = '-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-';
const newSudoku5 = '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--';
const newSudoku6 = '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----';
const newSudoku7 = '-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--';
const newSudoku8 = '-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7';
const newSudoku9 = '----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----';
const newSudoku10 = '3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--';
const newSudoku11 = '3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-';
const newSudoku12 = '-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-';
const newSudoku13 = '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--';
const newSudoku14 = '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------';
const newSudoku15 = '---------------------------------------------------------------------------------';

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

function searchPointer(numbers) { // Ищет индекс квадрата, в котором лежит пустая клетка
  let ans = [];
  if (numbers[0] <= 2 && numbers[1] <= 2) {
    ans = [0, 0];
    return ans;
  }
  if (numbers[0] <= 2 && numbers[1] >= 3 && numbers[1] <= 5) {
    ans = [0, 3];
    return ans;
  }
  if (numbers[0] <= 2 && numbers[1] >= 6) {
    ans = [0, 6];
    return ans;
  }
  if (numbers[0] >= 3 && numbers[0] <= 5 && numbers[1] <= 2) {
    ans = [3, 0];
    return ans;
  }
  if (numbers[0] >= 3 && numbers[0] <= 5 && numbers[1] >= 3 && numbers[1] <= 5) {
    ans = [3, 3];
    return ans;
  }
  if (numbers[0] >= 3 && numbers[0] <= 5 && numbers[1] >= 6) {
    ans = [3, 6];
    return ans;
  }
  if (numbers[0] >= 6 && numbers[1] <= 2) {
    ans = [6, 0];
    return ans;
  }
  if (numbers[0] >= 6 && numbers[1] >= 3 && numbers[1] <= 5) {
    ans = [6, 3];
    return ans;
  }
  if (numbers[0] >= 6 && numbers[1] >= 6) {
    ans = [6, 6];
    return ans;
  }
  return false;
}

// Функция принимает массив координат текущего квадрата(Ex.: [3, 5]) и исходный массив.
// разбивает квадрат на одномерный массив.
const squareArr = (item, array) => {
  const newArr = [];
  const variations = [];
  const ref = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = item[0]; i < item[0] + 3; i += 1) {
    for (let j = item[1]; j < item[1] + 3; j += 1) {
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
  // console.log(finalVariations);

  let i = 0;
  while (i <= finalVariations.length) { // Решили судоку
    if (finalVariations.length === 0) {
      return false;
    }
    sudoku[emptyCellCoord[0]][emptyCellCoord[1]] = finalVariations[i];
    if (recursion(sudoku) === false) {
      i += 1;
      if (i < finalVariations.length) {
        sudoku[emptyCellCoord[0]][emptyCellCoord[1]] = finalVariations[i];
      } else {
        sudoku[emptyCellCoord[0]][emptyCellCoord[1]] = '-';
        return false;
      }
    }
    if (recursion(sudoku) !== false) {
      return recursion(sudoku);
    }
  }
  return false;
};

// console.log(solve(newSudoku));

// console.log(recursion(solve(newSudoku1)));
// console.log('\n');
// console.log(recursion(solve(newSudoku2)));
// console.log('\n');
// console.log(recursion(solve(newSudoku3)));
// console.log('\n');
// console.log(recursion(solve(newSudoku4)));
// console.log('\n');
// console.log(recursion(solve(newSudoku5)));
// console.log('\n');
// console.log(recursion(solve(newSudoku6)));
// console.log('\n');
// console.log(recursion(solve(newSudoku7)));
// console.log('\n');
// console.log(recursion(solve(newSudoku8)));
// console.log('\n');
console.log(recursion(solve(newSudoku9))); // 3min
// console.log('\n');
// console.log(recursion(solve(newSudoku10)));
// console.log('\n');
// console.log(recursion(solve(newSudoku11)));
// console.log('\n');
// console.log(recursion(solve(newSudoku12)));
// console.log('\n');
// console.log(recursion(solve(newSudoku13)));
// console.log('\n');
// console.log(recursion(solve(newSudoku14)));
// console.log('\n');
// console.log(recursion(solve(newSudoku15)));
