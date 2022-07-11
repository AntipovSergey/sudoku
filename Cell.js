class Cell {
  constructor(val, coords) {
    this.value = val === '-' ? undefined : val;
    this.possibleValues = val === '-' ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [val];
    this.neighbours = { row: [], col: [], sq: [] };
    this.#initNeighbours(coords);
  }

  #initNeighbours(coords) {
    const [rowInd, colInd] = coords;
    // for row neighbours
    for (let colIndNeig = 0; colIndNeig < 9; colIndNeig += 1) {
      this.neighbours.row.push([rowInd, colIndNeig]);
    }
    // for col neighbours
    for (let rowIndNeig = 0; rowIndNeig < 9; rowIndNeig += 1) {
      this.neighbours.col.push([rowIndNeig, colInd]);
    }
    // for square neighbours
    const rowIndStart = Math.floor(rowInd / 3) * 3;
    const colIndStart = Math.floor(colInd / 3) * 3;
    for (
      let rowIndSq = rowIndStart, rowCount = rowIndStart + 3, ColCount = colIndStart + 3;
      rowIndSq < rowCount;
      rowIndSq += 1
    ) {
      for (let colIndSq = colIndStart; colIndSq < ColCount; colIndSq += 1) {
        this.neighbours.sq.push([rowIndSq, colIndSq]);
      }
    }
  }
}

module.exports = { Cell };
