/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
function getBoard(str) {
  const arr = [...str.split('')];
  const result = [];
  for (let i = 0; i < 81; i += 9) {
    result.push(arr.slice(i, i + 9));
  }

  const board = result.map((el) => el.map((e) => {
    if (!Number.isNaN(+e)) {
      return +e;
    }
    return '-';
  }));
  return board;
}

function getPossibleNumsInHorizontal(board, i, j) {
  const res = [];
  for (let k = 0; k < 9; k++) {
    if (typeof board[i][j + k] === 'number') {
      res.push(board[i][j + k]);
    }
    return getPossibleNums(res);
  }
}

function getPossibleNumsInVertica(board, i, j) {
  const currentNums = [];

  for (let k = 0; k < 9; k++) {
    if (typeof board[i + k][j] === 'number') {
      currentNums.push(board[i + k][j]);
    }
  }
  return getPossibleNums(currentNums);
}

function getPossibleNumsInSquare(board, i, j) {

}

// ——> arr Set with numbers

function getPossibleNums(arr, arr2, arr3) {
  if (!arr2) {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return nums.filter((x) => !arr.includes(x));
  }

  return arr.filter((x) => arr2.includes(x)).filter((x) => arr3.includes(x));
}

// ——> arr with nums

function hasPossibleNums(arr, arr2, arr3) {}

// ——> true or false

function getRandomNumFromArr(arr) {
  const index = Math.floor(Math.random() * (arr.length));

  return arr[index];
}

const str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

let brrrr = getBoard(str);
console.table(getBoard(str));
console.log(getPossibleNumsInVertica(brrrr, 0,0));

module.exports = {
  getBoard,
  getPossibleNums,
  getRandomNumFromArr,
  hasPossibleNums,
  getPossibleNumsInSquare,
  getPossibleNumsInVertica,
  getPossibleNumsInHorizontal,
};
