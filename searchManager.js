function clearPossibleValues(cellMap, cell) {
  if (!cell.value) return;
  Object.values(cell.neighbours).forEach((neighbourType) => {
    neighbourType.forEach(([rowInd, colInd]) => {
      const cellPossibleVals = cellMap[rowInd][colInd].possibleValues;
      if (cellPossibleVals.length === 1) return;
      const indPosValToRemove = cellPossibleVals.indexOf(cell.value);
      if (indPosValToRemove === -1) return;
      cellPossibleVals.splice(indPosValToRemove, 1);
    });
  });
}

function searchManager(cellMap) {
  const cells = cellMap.flat();
  cells.forEach((cell) => clearPossibleValues(cellMap, cell));

  let isFinded = true;
  while (isFinded) {
    isFinded = false;
    // ! first check stage
    // eslint-disable-next-line no-loop-func
    cells.forEach((cell) => {
      if (cell.possibleValues.length === 1 && !cell.value) {
        cell.setVal();
        clearPossibleValues(cellMap, cell);
        isFinded = true;
      }
    });
  }
  cells.forEach((cell) => console.log(cell.possibleValues));
}

module.exports = { clearPossibleValues, searchManager };
