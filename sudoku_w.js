const sudoku_a = require('./sudoku_a');
const sudoku_s = require('./sudoku_s');

function calculateScope(arr) {

  function numOfBlock(x, y) {
    let block = 0;
    if (x <= 2 && y >= 3 && y <= 5) block = 1;
    else if (x <= 2 && y >= 6) block = 2;
    else if (x >= 3 && x <= 5 && y <= 2) block = 3;
    else if (x >= 3 && x <= 5 && y >= 3 && y <= 5) block = 4;
    else if (x >= 3 && x <= 5 && y >= 6) block = 5;
    else if (x >= 6 && y <= 2) block = 6;
    else if (x >= 6 && y >= 3 && y <= 5) block = 7;
    else if (x >= 6 && y >= 6) block = 8;
    return block;
  }

  const scopeOfRows = new Array(9).fill([]);
  const scopeOfBlocks = { 0: new Set(), 1: new Set(), 2: new Set(), 3: new Set(), 4: new Set(), 5: new Set(), 6: new Set(), 7: new Set(), 8: new Set() };
  const scopeOfColumns = { 0: new Set(), 1: new Set(), 2: new Set(), 3: new Set(), 4: new Set(), 5: new Set(), 6: new Set(), 7: new Set(), 8: new Set() };
  const newArr = new Array(9).fill([]);

  for (let i = 0; i < 9; i += 1) {
    scopeOfRows[i] = new Set();
    newArr[i].push([0, []]);
    for (let j = 0; j < 9; j += 1) {
      scopeOfRows[i].add(arr[i][j]);
      scopeOfColumns[j].add(arr[i][j]);
      scopeOfBlocks[numOfBlock(i, j)].add(arr[i][j]);
    }
    scopeOfRows[i].delete(0);
  }

  for (let i = 0; i < 9; i += 1) {
    scopeOfBlocks[i].delete(0);
    scopeOfColumns[i].delete(0);
  }

  let tempScopeOfBlock;
  let totalScope;
  let scopeOfCell;
  // let count = 1;
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (arr[i][j] === 0) {
        // console.log(count++);
        scopeOfCell = [];
        totalScope = {};
        totalScope[1] = scopeOfRows[i];
        totalScope[2] = scopeOfColumns[j];
        tempScopeOfBlock = scopeOfBlocks[numOfBlock(i, j)];

        for (let k = 1; k <= 9; k += 1) {
          if (totalScope[1].has(k) === false && totalScope[2].has(k) === false && tempScopeOfBlock.has(k) === false) {
            scopeOfCell.push(k);
            // console.log('k', k, totalScope[1], totalScope[2], tempScopeOfBlock);
          }
        }
        newArr[i][j][0] = scopeOfCell.length;
        newArr[i][j][1] = newArr[i][j][1].concat(scopeOfCell);
      }
    }
  }
  return newArr;
}


function solve(str) {

  const originalArray = sudoku_a.stringToArr(str);
  const arrayOfScopes = calculateScope(originalArray);
  sudoku_a.prettyBoard(originalArray);

  let flag = true;
  let tempArray1 = originalArray;
  let tempArray2 = arrayOfScopes;
  while (flag) {
    if (sudoku_s.pasteElem(tempArray1, tempArray2)) {
      tempArray1 = sudoku_s.pasteElem(originalArray, arrayOfScopes);
      tempArray2 = calculateScope(tempArray1);
    }
    else flag = false;
  }
  return tempArray1;
}

module.exports = {
  solve: solve,
  calculateScope: calculateScope,
}
