function checkBlock(board) {
  console.log('checkBlock has been imported');

}

let arrBoard = [];

let strBoard = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
let cells = strBoard.split('');
// console.log(cells)

for (let i = 0; i < 9; i += 1) {
  arrBoard.push(cells.splice(0, 9));
  // console.log(arrBoard)
}



// console.log(cells)
console.log(arrBoard)


module.exports = checkBlock;
