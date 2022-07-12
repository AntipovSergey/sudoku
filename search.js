// let indArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 18, 19, 20, 28, 37, 46, 55, 64, 73];
/* let sudoku = [
  ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
  ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
  ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
  ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
  ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
  ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
  ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
  ['6', '-', '-', '3', '-', '8', '9', '-', '-'],
]; */
let sudoku = [
  ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
];

function solvePuzzle (fullArr) {
  const findEmpty = (fullArr) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (fullArr[i][j] === '-') {
          return [i, j];
        }
      }
    }
    return 'URAAA!';
  };

  const isValid = (num, pos, fullArr) => {
    const [r, c] = pos;

    for (let i = 0; i < 9; i++) {
      if (fullArr[i][c] === num) {
        return false;
      }
    }

    for (let i = 0; i < 9; i++) {
      if (fullArr[r][i] === num) {
        return false;
      }
    }

    const boxR = Math.floor(r / 3) * 3;
    const boxC = Math.floor(c / 3) * 3;

    for (let i = boxR; i < boxR + 3; i++) {
      for (let j = boxC; j < boxC + 3; j++) {
        if (fullArr[i][j] === num) {
          return false;
        }
      }
    }
    return true;
  };

  const search = () => {
    const currPos = findEmpty(fullArr);

    if (currPos === 'URAAA!') {
      return true;
    }

    for (let i = 1; i <= 9; i++) {
      const currNum = i.toString();
      const validate = isValid(currNum, currPos, fullArr);
      if (validate) {
        const x = currPos[0];
        const y = currPos[1];
        fullArr[x][y] = currNum;
        if (search()) {
          return true;
        }
        fullArr[x][y] = '-';
      }
    }
    return false;
  };

  search();
  return fullArr;
};


// function searchEl(fullArr, indexArr, el = 1) {
//   for (let i = 0; i < indexArr.length; i++) {
//     if (fullArr[indexArr[i]] == el && el <= 9) {
//       return searchEl(fullArr, indexArr, el += 1);
//     }
//   }
//   return el;
// }

// function search(fullArr, indArr) {
//   let element = searchEl(fullArr, indArr);
//   let result = [];
//   result.push(element);
//   for (let i = element; i < 9; i++) {
//     element = searchEl(fullArr, indArr, i += 1)
//     result.push(element)
//   }
//   return result;
// }

// console.log(search(fullArr, indArr));

/*
1 - 5 | 8 - 2 | - - -
- 9 - | - 7 6 | 4 - 5
2 - - | 4 - - | 8 1 9
---------------------
- 1 9 | - - 7 | 3 - 6
7 6 2 | - 8 3 | - 9 -
- - - | - 6 1 | - 5 -
---------------------
- - 7 | 6 - - | - 3 -
4 3 - | - 2 - | 5 - 1
6 - - | 3 - 8 | 9 - -
*/
