// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

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

  const sudArr = (typeof (boardString) === 'string') ? createSudArr() : boardString;
  prettyBoard(sudArr);
  // const originArr = JSON.parse(JSON.stringify(sudArr));

  // Получаем группу, в которой находится незаполненная ячейка
  function getGroup(arr, width, height) {
    function getNums(num) {
      if (num <= 3) return [0, 1, 2];
      if (num > 3 && num <= 6) return [3, 4, 5];
      return [6, 7, 8];
    }

    const x = getNums(width);
    const y = getNums(height);

    return [arr[x[0]][y[0]], arr[x[0]][y[1]], arr[x[0]][y[2]], arr[x[1]][y[0]], arr[x[1]][y[1]],
      arr[x[1]][y[2]], arr[x[2]][y[0]], arr[x[2]][y[1]], arr[x[2]][y[2]]];
  }

  // Получаем незаполненный элемент
  function getElem(arr1, arr2, arr3) {
    const allNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const leftNums = [];
    for (let i = 0; i < allNums.length; i += 1) {
      if (!arr1.includes(allNums[i]) && !arr2.includes(allNums[i]) && !arr3.includes(allNums[i])) {
        leftNums.push(allNums[i]);
      }
    }

    // если не хватает одного элемента в трех массивах, то возвращаем его
    if (leftNums.length === 1) return leftNums[0];
    return 0;
  }

  function getEl(arr) {
    const allNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const leftNums = [];
    for (let i = 0; i < allNums.length; i += 1) {
      if (!arr.includes(allNums[i])) {
        leftNums.push(allNums[i]);
      }
    }
    if (leftNums.length === 1) return leftNums[0];
    return 0;
  }

  // проходим по массиву судоку
  function searchEmptyEl() {
    for (let i = 0; i < sudArr.length; i += 1) {
      for (let j = 0; j < sudArr[i].length; j += 1) {
        if (sudArr[i][j] === '-') { // Если ячейка не заполнена
          const strArr = [sudArr[i][0], sudArr[i][1], sudArr[i][2], sudArr[i][3], sudArr[i][4],
            sudArr[i][5], sudArr[i][6], sudArr[i][7], sudArr[i][8]];
          if (getEl(strArr)) {
            sudArr[i][j] = getEl(strArr);
            continue;
          }
          const colArr = [sudArr[0][j], sudArr[1][j], sudArr[2][j], sudArr[3][j], sudArr[4][j],
            sudArr[5][j], sudArr[6][j], sudArr[7][j], sudArr[8][j]];
          if (getEl(colArr)) {
            sudArr[i][j] = getEl(colArr);
            continue;
          }
          const groupArr = getGroup(sudArr, i, j);
          if (getEl(groupArr)) {
            sudArr[i][j] = getEl(groupArr);
            continue;
          }
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

  searchEmptyEl();
  prettyBoard(sudArr);
  // if (haveEmptyEl()) return solve(sudArr);
  return sudArr;
}

const a = solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');
solve(a);

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

function prettyBoard(board) {
  let result = [];

  board.map((el) => {
    result.push(el.join(' '));
  })
  // return result.join('\n');
  console.log(result.join('\n'));
  console.log('\n');
};

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

