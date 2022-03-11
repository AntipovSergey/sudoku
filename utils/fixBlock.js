function checkBlock(board) {
  console.log('checkBlock has been imported');
}

let arrBoard = [];
let strBoard = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
let cells = strBoard.split('');
let blocks = [];

for (let i = 0; i < 9; i += 1) {
  arrBoard.push(cells.splice(0, 9));
}

// console.log(arrBoard)
let start = 0, end = 3;
for (let k = 0; k < arrBoard.length; k += 1) {
  for (let i = start; i < end; i += 1) {
    for(let j = start; j < end; j += 1) {
      blocks.push(arrBoard[i][j])
    }
  }
  if (end <= 8) {end += 3;
  start += 3}
}
console.log(blocks)

module.exports = checkBlock;
