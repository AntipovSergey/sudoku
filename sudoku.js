// function solve(puzzle) {}

// function isSolved(board) {}

// function prettyBoard(puzzleStr) {
//   let array = [];
//   for (let i = 0; i < 9; i++) {
//     array[i] = puzzleStr.slice(i * 9, i * 9 + 9);
//     array[i] = array[i].split('');
//     for (let j = 0; j < 9; j++) {
//       if (array[i][j] == '-') {
//         array[i][j] = '';
//       }
//       if (array[i][j] !== '') {
//         array[i][j] = +array[i][j];
//       }
//     }
//   }
//   return array;
// }

// module.exports = {
//   solve: solve,
//   isSolved: isSolved,
//   prettyBoard: prettyBoard,
// };

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
// const turnedArray = [[], [], [], [], [], [], [], [], []];
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     turnedArray[i][j] = array[j][i];
//   }
// }

// function findCanditates(zeroElementIndexX, zeroElementIndexY) {
//   function candidates(arr, freeDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
//     arr.forEach((item) => {
//       freeDigits[item] = 0;
//     });
//     return freeDigits.filter((item) => item);
//   }
//   function eraser(arr, freeDigits) {
//     freeDigits = freeDigits.join('');
//     arr.forEach((item) => {
//       if (freeDigits.includes(item)) {
//         freeDigits =
//           freeDigits.slice(0, freeDigits.indexOf(item)) +
//           freeDigits.slice(freeDigits.indexOf(item) + 1, freeDigits.length);
//       }
//     });
//     freeDigits = freeDigits.split('').map((element) => element);
//     return freeDigits;
//   }
//   let areaArray = [];

//   if (zeroElementIndexX < 3) {
//     startI = 0;
//     finishI = 3;
//   } else if (zeroElementIndexX < 6) {
//     startI = 3;
//     finishI = 6;
//   } else {
//     startI = 6;
//     finishI = 9;
//   }

//   if (zeroElementIndexY < 3) {
//     startJ = 0;
//     finishJ = 3;
//   } else if (zeroElementIndexY < 6) {
//     startJ = 3;
//     finishJ = 6;
//   } else {
//     startJ = 6;
//     finishJ = 9;
//   }

//   for (let i = startI; i < finishI; i++) {
//     for (let j = startJ; j < finishJ; j++) {
//       areaArray.push(array[i][j]);
//     }
//   }

//   let freeNumbers = [];
//   freeNumbers.push(candidates(array[zeroElementIndexX]));
//   freeNumbers = eraser(turnedArray[zeroElementIndexY], freeNumbers);
//   freeNumbers = eraser(areaArray, freeNumbers)
//     .filter((el) => !isNaN(+el))
//     .map((element) => +element);

//   console.log(freeNumbers);
// }

function recursive(inpArr) {
  const newArr = JSON.parse(JSON.stringify(inpArr));
  let indexX = 0;
  let indexY = 0;
  let zeroElementIndexX = 0;
  let zeroElementIndexY = 0;
  let run = true;

  while (indexX < newArr.length && indexY < newArr.length && run) {
    if (newArr[indexX][indexY] === 0) {
      zeroElementIndexX = indexX;
      zeroElementIndexY = indexY;
      run = false;
    }
    indexX++;
    if (indexX === newArr.length) {
      indexX = 0;
      indexY++;
    }
  }
  newArr[zeroElementIndexX][zeroElementIndexY] = 'z';
  console.log('индексы', zeroElementIndexX, zeroElementIndexY, 'Array', newArr);

  if (indexX < newArr.length && indexY < newArr.length) {
    recursive(newArr);
  }
}
console.log(recursive(array));
