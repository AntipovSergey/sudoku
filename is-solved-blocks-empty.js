//проверка на отсутствие дублей в каждом "квадратике"
function isSolvedBlocks(board) {
  //создаем массив из "квадратиков"
  let blocks = []
  for (let j = 0; j < 81; j += 27){
    for (let i = j; i < (j + 7); i += 3) {
      let blockItem = [];
      blockItem.push(board[i], board[i+1], board[i+2], board[i+9], board[i+10], board[i+11], board[i+18], board[i+19], board[i+20]);
      blocks.push(blockItem);
    }
  }

  //проверяем на дубли в каждом квадратике
  let counter = 0
  for (let i = 0; i < blocks.length; i += 1) {
    for (let j = 0; j < blocks[i].length; j += 1) {
      if (blocks[i].indexOf(blocks[i][j]) !== blocks[i].lastIndexOf(blocks[i][j])) {
        counter += 1;
      }
    }
  }
  return counter > 0 ? false : true;
}
//console.log(isSolvedBlocks('123456789456789123789123456214365897365897214897214365531642978642978531978531642'))


//проверка на отсутствие пустых ячеек
function isSolvedEmptyCells(board) {
  return board.split('').includes('-') ? false : true;
}
// console.log(isSolvedEmptyCells('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))
// console.log(isSolvedEmptyCells('123456789456789123789123456214365897365897214897214365531642978642978531978531642'))

// function checkRaw(board) {
//   let raws = [];
//   for (let i = 0; i < 81; i += 9) {
//     raws.push(board.slice(i, i + 9).split(''));
//   }

//   let counter = 0
//   for (let i = 0; i < raws.length; i += 1) {
//     for (let j = 0; j < raws[i].length; j += 1) {
//       if (raws[i].indexOf(raws[i][j]) !== raws[i].lastIndexOf(raws[i][j])) {
//         counter += 1;
//       }
//     }
//   }
//   return counter > 0 ? false : true
// }
// console.log(checkRaw('123456789456789123789123456214365897365897214897214365531642978642978531978531642'))
// console.log(checkRaw('122456789456789123789123456214365897365897214897214365531642978642978531978531642'))


module.exports = {
  isSolvedBlocks,
  isSolvedEmptyCells
};
