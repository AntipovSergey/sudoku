/* function prettyBoard(puzzleStr) {
  let array = [];
  for (let i = 0; i < 9; i++) {
    array[i] = puzzleStr.slice(i * 9, i * 9 + 9);
    array[i] = array[i].split('');
    for (let j = 0; j < 9; j++) {
      if (array[i][j] == '-') {
        array[i][j] = '';
      }
      if (array[i][j] !== '') {
        array[i][j] = +array[i][j];
      }
    }
  }
  return array;
} */

// function solve(puzzle) {}

function isSolved(board) {
  let sum = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sum[i] += board[i][j];
    }
  }
  for (i = 0; i < 9; i++) {
    if (sum[i] != 45) return false;
  }
  return true;
}

const array = [
  [1, 0, 5, 8, 0, 2, 0, 0, 0],
  [0, 9, 0, 0, 7, 6, 4, 0, 5],
  [2, 0, 0, 4, 0, 0, 8, 1, 9],
  [0, 1, 9, 0, 0, 7, 3, 0, 6],
  [7, 6, 2, 0, 8, 3, 0, 9, 0],
  [0, 0, 0, 0, 6, 1, 0, 5, 0],
  [0, 0, 7, 6, 0, 0, 0, 3, 0],
  [4, 3, 0, 0, 2, 0, 5, 0, 1],
  [6, 0, 0, 3, 0, 8, 9, 0, 0],
];

function findCanditates(array1, zeroElementIndexX, zeroElementIndexY) {
  const turnedArray = [[], [], [], [], [], [], [], [], []];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      turnedArray[i][j] = array1[j][i];
    }
  }
  function candidates(arr, freeDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    arr.forEach((item) => {
      freeDigits[item] = 0;
    });
    return freeDigits.filter((item) => item);
  }

  function eraser(arr, freeDigits) {
    freeDigits = freeDigits.join('');
    arr.forEach((item) => {
      if (freeDigits.includes(item)) {
        freeDigits =
          freeDigits.slice(0, freeDigits.indexOf(item)) +
          freeDigits.slice(freeDigits.indexOf(item) + 1, freeDigits.length);
      }
    });
    freeDigits = freeDigits.split('').map((element) => element);
    return freeDigits;
  }

  /*   let areaArray = [];

  if (zeroElementIndexX < 3) {
    startI = 0;
    finishI = 3;
  } else if (zeroElementIndexX < 6) {
    startI = 3;
    finishI = 6;
  } else {
    startI = 6;
    finishI = 9;
  }

  if (zeroElementIndexY < 3) {
    startJ = 0;
    finishJ = 3;
  } else if (zeroElementIndexY < 6) {
    startJ = 3;
    finishJ = 6;
  } else {
    startJ = 6;
    finishJ = 9;
  }

  for (let i = startI; i < finishI; i++) {
    for (let j = startJ; j < finishJ; j++) {
      areaArray.push(array1[i][j]);
    }
  } */

  let freeNumbers = [];
  freeNumbers.push(candidates(array1[zeroElementIndexX]));
  freeNumbers = eraser(turnedArray[zeroElementIndexY], freeNumbers);
  freeNumbers = /* eraser(areaArray,  */ freeNumbers /* ) */
    .filter((el) => !isNaN(+el))
    .map((element) => +element);

  return freeNumbers;
}

let finishArray = [];
let sudokuIsSolved = false;
let iterations = 0;

function recursive(inpArr) {
  sudokuIsSolved = isSolved(array);
  console.log('sudokuIsSolved = ', sudokuIsSolved, 'iterations = ', iterations);
  if (sudokuIsSolved) return inpArr;
  console.table(inpArr);
  iterations++;

  const newArr = JSON.parse(JSON.stringify(inpArr));
  let indexX = 0;
  let indexY = 0;
  let zeroElementIndexX = 0;
  let zeroElementIndexY = 0;
  let run = true;

  while (
    indexX < newArr.length &&
    indexY < newArr.length &&
    run &&
    !sudokuIsSolved &&
    iterations < 1000
  ) {
    if (newArr[indexX][indexY] === 0) {
      zeroElementIndexX = indexX;
      zeroElementIndexY = indexY;
      run = false;
    }
    indexY++;
    if (indexY === newArr.length) {
      indexY = 0;
      indexX++;
    }
  }

  const canditates = findCanditates(
    newArr,
    zeroElementIndexX,
    zeroElementIndexY
  );

  let index = 0;

  while (!sudokuIsSolved && index < canditates.length && iterations < 1000) {
    newArr[zeroElementIndexX][zeroElementIndexY] = canditates[index];
    console.log(
      'индексы:',
      zeroElementIndexX,
      zeroElementIndexY,
      'длина массива кандидатов:',
      canditates.length,
      'индекс итерации:',
      index,
      'кандидаты',
      canditates
    );
    recursive(newArr);
    index++;
  }

  /* if (indexX < newArr.length && indexY < newArr.length) {
    newArr[zeroElementIndexX][zeroElementIndexY] = canditates.join('');
    recursive(newArr);
  } */
}

recursive(array);

// module.exports = {
//   solve: solve,
//   isSolved: isSolved,
//   prettyBoard: prettyBoard,
// };
