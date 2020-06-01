function calculateScope(arr) {

  const scopeOfBlocks = new Array(9).fill([]);
  const scopeOfRows = new Array(9).fill([]);
  const scopeOfColumns = new Array(9).fill([]);
  let totalScope = new Set;
  const newArr = [];

  for (let i = 0; i < 9; i += 1) {
    newArr[i].push([0, []]);
    for (let j = 0; j < 9; j += 1) {
      scopeOfRows[i].push(arr[i][j]);
      scopeOfColumns[j].push(arr[i][j]);
      if (i <= 2 && j <= 2) scopeOfBlocks[0].push(arr[i][j]);
      else if (i <= 2 && j >= 3 && j <= 5) scopeOfBlocks[1].push(arr[i][j]);
      else if (i <= 2 && j >= 6) scopeOfBlocks[2].push(arr[i][j]);

      else if (i >= 3 && i <= 5 && j <= 2) scopeOfBlocks[3].push(arr[i][j]);
      else if (i >= 3 && i <= 5 && j >= 3 && j <= 5) scopeOfBlocks[4].push(arr[i][j]);
      else if (i >= 3 && i <= 5 && j >= 6) scopeOfBlocks[5].push(arr[i][j]);

      else if (i >= 6 && j <= 2) scopeOfBlocks[6].push(arr[i][j]);
      else if (i >= 6 && j >= 3 && j <= 5) scopeOfBlocks[7].push(arr[i][j]);
      else if (i >= 6 && j >= 6) scopeOfBlocks[8].push(arr[i][j]);
    }
  }

  scopeOfRows.sort();
  scopeOfColumns.sort();
  scopeOfBlocks.sort();
  scopeOfRows.split(0, 1);
  scopeOfColumns.split(0, 1);
  scopeOfBlocks.split(0, 1);

  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if arr[i][j] === 0 {
        let scopeOfCell = [];
        totalScope.clear();
        totalScope.add(scopeOfRows[i]);
        totalScope.add(scopeOfColumns[j]);
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
          if totalScope.has(k) === false scopeOfCell.push(k);
        }
        newArr[i][j][0] = scopeOfCell.length;
        newArr[i][j][1] = newArr[i][j][1].concat(scopeOfCell);
      }
    }
  }
  return newArr;
}


function solve(str) {
  const originalArray = stringToArr(str);

  const arrayOfScopes = calculateScope(originalArray);
  let flag = true;
  while (flag) {
    if (pasteElem(originalArray, arrayOfScopes)) let tempArray = pasteElem(originalArray, arrayOfScopes);
    else flag = false;
  }
  return tempArray;
}


module.exports = {
  solve: solve,
  calculateScope: calculateScope,
}
