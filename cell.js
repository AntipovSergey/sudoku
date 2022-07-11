class Cell {
  constructor(val, coords) {
    this.value = val;
    this.possibleValues = [1,2,3,4,5,6,7,8,9];
    this.neighbords = {row: [], col: [], sqare: []};
    this.init(coords);
  }
  init(coords) {
    this.neighbords.row.push(coords)
    if (this.value) this.possibleValues = [this.value]
  }
}

const test = new Cell(55, [5,2])

console.log(test);