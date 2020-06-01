const sudoku_a = require('./sudoku_a');
const sudoku_s = require('./sudoku_s');

function calculateScope(arr) {

  const scopeOfRows = new Array(9).fill([]);
  const scopeOfBlocks = {
    0: new Set,
    1: new Set,
    2: new Set,
    3: new Set,
    4: new Set,
    5: new Set,
    6: new Set,
    7: new Set,
    8: new Set,
  };
  const scopeOfColumns = {
    0: new Set,
    1: new Set,
    2: new Set,
    3: new Set,
    4: new Set,
    5: new Set,
    6: new Set,
    7: new Set,
    8: new Set,
  };
  let totalScope = new Set;
  const newArr = new Array(9).fill([]);

  for (let i = 0; i < 9; i += 1) {
    scopeOfRows[i] = new Set;
    newArr[i].push([0, []]);
    for (let j = 0; j < 9; j += 1) {
      scopeOfRows[i].add(arr[i][j]);
      scopeOfColumns[j].add(arr[i][j]);

      if (i <= 2 && j <= 2) scopeOfBlocks[0].add(arr[i][j]);
      else if (i <= 2 && j >= 3 && j <= 5) scopeOfBlocks[1].add(arr[i][j]);
      else if (i <= 2 && j >= 6) scopeOfBlocks[2].add(arr[i][j]);

      else if (i >= 3 && i <= 5 && j <= 2) scopeOfBlocks[3].add(arr[i][j]);
      else if (i >= 3 && i <= 5 && j >= 3 && j <= 5) scopeOfBlocks[4].add(arr[i][j]);
      else if (i >= 3 && i <= 5 && j >= 6) scopeOfBlocks[5].add(arr[i][j]);

      else if (i >= 6 && j <= 2) scopeOfBlocks[6].add(arr[i][j]);
      else if (i >= 6 && j >= 3 && j <= 5) scopeOfBlocks[7].add(arr[i][j]);
      else if (i >= 6 && j >= 6) scopeOfBlocks[8].add(arr[i][j]);
    }
    scopeOfRows[i].delete(0);
  }

  for (let i = 0; i < 9; i += 1) {
    scopeOfBlocks[i].delete(0);
    scopeOfColumns[i].delete(0);
  }

  // console.log('LINES', scopeOfRows);
  // console.log('COLUMNS', scopeOfColumns);
  // console.log('BLOCKS', scopeOfBlocks);

  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (arr[i][j] === 0) {
        let scopeOfCell = [];
        totalScope.clear();
        totalScope.add(scopeOfRows[i]);
        totalScope.add(scopeOfColumns[j]);
        console.log('totalScope', totalScope, 'scopeof Rows', scopeOfRows[i], 'scopeof Columns', scopeOfColumns[j])
        if (i <= 2 && j <= 2) totalScope.add(scopeOfColumns[0]);
        else if (i <= 2 && j >= 3 && j <= 5) totalScope.add(scopeOfColumns[1]);
        else if (i <= 2 && j >= 6) totalScope.add(scopeOfColumns[2]);

        else if (i >= 3 && i <= 5 && j <= 2) totalScope.add(scopeOfColumns[3]);
        else if (i >= 3 && i <= 5 && j >= 3 && j <= 5) totalScope.add(scopeOfColumns[4]);
        else if (i >= 3 && i <= 5 && j >= 6) totalScope.add(scopeOfColumns[5]);

        else if (i >= 6 && j <= 2) totalScope.add(scopeOfColumns[6]);
        else if (i >= 6 && j >= 3 && j <= 5) totalScope.add(scopeOfColumns[7]);
        else if (i >= 6 && j >= 6) totalScope.add(scopeOfColumns[8]);

        for (let k = 1; k <= 9; k += 1) {
          if (totalScope.has(k) === false) scopeOfCell.push(k);
        }
        newArr[i][j][0] = scopeOfCell.length;
        newArr[i][j][1] = newArr[i][j][1].concat(scopeOfCell);
      }
    }
  }
  // console.log(newArr);
  return newArr;
}


function solve(str) {
  const originalArray = sudoku_a.stringToArr(str);

  const arrayOfScopes = calculateScope(originalArray);
  let flag = true;
  let tempArray;
  while (flag) {
    console.log('NO??', sudoku_s.pasteElem(originalArray, arrayOfScopes))
    if (sudoku_s.pasteElem(originalArray, arrayOfScopes)) {
      console.log('YES!!!');
      tempArray = sudoku_s.pasteElem(originalArray, arrayOfScopes);
    }
    else flag = false;
  }
  console.log('!!!!!', tempArray);
  return tempArray;
}


module.exports = {
  solve: solve,
  calculateScope: calculateScope,
}
