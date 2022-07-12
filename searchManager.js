/**
 * clear all neighbours of cell by it own value
 * @param {[Cell...]} cellMap -> array with all cells
 * @param {Cell} cell -> cell to take from value
 */
function clearPossibleValues(cellMap, cell) {
  // * getting all neighbours -> neighbourType ( row / col / sq)
  Object.values(cell.neighbours).forEach((neighbourType) => {
    // * forEach coords get -> Cell and check it possibleValues
    // * remove cell.value from possibleValues of neighbours -> if it exist
    neighbourType.forEach(([rowInd, colInd]) => {
      const cellPossibleVals = cellMap[rowInd][colInd].possibleValues;
      if (cellPossibleVals.length === 1) return;
      const indPosValToRemove = cellPossibleVals.indexOf(cell.value);
      if (indPosValToRemove === -1) return;
      // console.log('cellPossibleVals before:', cellPossibleVals);
      // const test = cellPossibleVals.splice(indPosValToRemove, 1);
      // console.log('removed value:', test);
      cellPossibleVals.splice(indPosValToRemove, 1);
      // console.log('cellPossibleVals after:', cellPossibleVals);
      // console.log('\n');
    });
  });
}

function clearPossibleValuesInArr(cellMap, coords, possValsToRemove) {
  possValsToRemove.forEach((valToRemove) => {
    coords.forEach(([rowInd, colInd]) => {
      const cellPossibleVals = cellMap[rowInd][colInd].possibleValues;
      if (cellPossibleVals.length === 1) return;
      console.log('~ cellPossibleVals', cellPossibleVals);
      const indPosValToRemove = cellPossibleVals.indexOf(valToRemove);
      console.log('~ indPosValToRemove', valToRemove);
      console.log('~ indPosValToRemove', indPosValToRemove);
      console.log('\n');
      if (indPosValToRemove === -1) return;
      console.log('remove', valToRemove);
      cellPossibleVals.splice(indPosValToRemove, 1);
    });
  });
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) return false;
  return array1.every((elToCheck, elInd) => elToCheck === array2[elInd]);
}

function clearArr(arrToClean, whiteList) {
  return arrToClean.filter((elToCheck) => {
    if (
      whiteList.findIndex(
        (whiteEl) => whiteEl[0] === elToCheck[0] && whiteEl[1] === elToCheck[1],
      ) === -1
    ) return true;
    return false;
  });
}
/**
 * Funct to convert raw hash data to hashEntryCount -> containing count of every possibleValues
 * in square and hashDublicates -> containing pairs with same possibleValues and different coords
 * @param {HashMap} hashPosValsInSq
 * @return {hashEntryCount, hashDublicates}
 */
function hashWrapper(hashPosValsInSq) {
  const hashDublicates = [];
  const hashEntryCount = [];
  hashPosValsInSq.forEach((hashSquare) => {
    // * check hash table hashPosValsInSq
    // * and count every entry in possibleValues
    const hashKeys = Object.keys(hashSquare);
    const hashVals = Object.values(hashSquare);

    const hashEntryToAdd = {};
    for (
      let indChecker = 0, checkerCount = hashKeys.length, toCheckCount = hashKeys.length;
      indChecker < checkerCount;
      indChecker += 1
    ) {
      hashVals[indChecker].forEach((val) => {
        if (!hashEntryToAdd[val]) hashEntryToAdd[val] = [];
        hashEntryToAdd[val].push(hashKeys[indChecker]);
      });

      for (let indToCheck = indChecker + 1; indToCheck < toCheckCount; indToCheck += 1) {
        if (
          hashVals[indChecker].length === 2
          && compareArrays(hashVals[indChecker], hashVals[indToCheck])
        ) {
          hashDublicates.push({
            coords: [hashKeys[indChecker], hashKeys[indToCheck]],
            possibleValues: hashVals[indToCheck],
          });
        }
      }
    }
    for (let hashVal = 1; hashVal < 10; hashVal += 1) {
      if (hashEntryToAdd[hashVal]) {
        if (hashEntryToAdd[hashVal].length !== 1) delete hashEntryToAdd[hashVal];
      }
    }
    // console.log('~ hashEntryToAdd', hashEntryToAdd);
    // console.log('\n\n');
    hashEntryCount.push(hashEntryToAdd);
  });
  return { hashEntryCount, hashDublicates };
}

function searchManager(cellMap) {
  // * convert our cellMar from [[...],[...]], to [...]
  const cells = cellMap.flat();
  // * first init check of possibleValues of all cells with value
  // * if value is exist
  cells.forEach((cell) => {
    if (!cell.value) return;
    clearPossibleValues(cellMap, cell);
  });
  // * while we found even one cell.value -> circle will work
  // * we try to find cell.value by checking array -> possibleValues.lenght
  const findedCells = ['toStartWile'];
  while (findedCells.length > 0) {
    findedCells.length = 0;
    // ! first check stage
    // * simple logic
    // eslint-disable-next-line no-loop-func
    cells.forEach((cell) => {
      if (cell.possibleValues.length === 1 && !cell.value) {
        cell.setVal();
        clearPossibleValues(cellMap, cell);
        findedCells.push(cell);
      }
    });
    // ! second stage
    // * logic builded on theory about static positions in squares
    // * if we have same possibleValues in one row/cell of square
    // * -> clean it from another rows/colls of cellMap
    //
    // * also we check for single possibleValues
    const hashPosValsInSq = [];
    if (findedCells.length === 0) {
      // * init hash table hashPosValsInSq
      for (let sqRowInd = 0; sqRowInd < 3; sqRowInd += 1) {
        for (let sqColInd = 0; sqColInd < 3; sqColInd += 1) {
          const hashToAdd = {};
          let hashCount = 0;
          const cellCoordsInSq = cells[sqRowInd * 27 + sqColInd * 3].neighbours.sq;
          cellCoordsInSq.forEach(([rowInd, colInd]) => {
            if (!cellMap[rowInd][colInd].value) {
              hashCount += 1;
              hashToAdd[`${rowInd}${colInd}`] = cellMap[rowInd][colInd].possibleValues;
            }
          });
          if (hashCount) hashPosValsInSq.push(hashToAdd);
        }
      }
      // * convert raw data hashPosValsInSq -> dataToChange
      const dataToChange = hashWrapper(hashPosValsInSq);
      // console.log('~ dataToChange', dataToChange);
      Object.keys(dataToChange.hashEntryCount).forEach((singleEntry) => {
        const val = Object.keys(dataToChange.hashEntryCount[singleEntry])[0];
        if (!val) return;
        const [rowInd, colInd] = dataToChange.hashEntryCount[singleEntry][val][0]
          .split('')
          .map((coord) => Number(coord));
        cellMap[rowInd][colInd].setVal(val);
        clearPossibleValues(cellMap, cellMap[rowInd][colInd]);
        findedCells.push(cellMap[rowInd][colInd]);
      });

      dataToChange.hashDublicates.forEach((dublicatForCheck) => {
        const dublKeys = dublicatForCheck.coords.map((coordEl) => coordEl.split('').map((coord) => Number(coord)));
        const [rowInd, colInd] = dublKeys[0];
        const dublPosVals = dublicatForCheck.possibleValues;

        console.log('~ dublicatForCheck', dublicatForCheck);
        // console.log('~ dublicatForCheck', dublicatForCheck);
        if (dublKeys[0][0] !== dublKeys[1][0] && dublKeys[0][1] === dublKeys[1][1]) {
          const neighboursToChange = clearArr(cellMap[rowInd][colInd].neighbours.col, dublKeys);
          clearPossibleValuesInArr(cellMap, neighboursToChange, dublicatForCheck.possibleValues);
        }

        if (dublKeys[0][0] === dublKeys[1][0] && dublKeys[0][1] !== dublKeys[1][1]) {
          const neighboursToChange = clearArr(cellMap[rowInd][colInd].neighbours.row, dublKeys);
          clearPossibleValuesInArr(cellMap, neighboursToChange, dublicatForCheck.possibleValues);
        }
      });
      // console.log('~ hashDublPosVals', hashDublPosVals);
      // Object.keys(dataToChange.hashDublicates).forEach();
      // const { hashDublicates } = dataToChange;
      // console.log('~ dataToChange', dataToChange);
    }
  }
}

module.exports = { clearPossibleValues, searchManager };
