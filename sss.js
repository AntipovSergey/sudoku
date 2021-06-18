let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function sudoku(str) {
  let arrArrs = [];
  let arr = [];
  reg = /(.{9})/gmi;
  arrArrs = str.match(reg);
  for (let elem of arrArrs) {
    arr.push(elem.split(''));
  }
  return arr;
}

console.log(sudoku(str))
