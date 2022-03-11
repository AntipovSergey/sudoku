
let input = [
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
];

let solveSudoku = function(board){
  const size = 9;
  const boxSize = 3;
  
  function findEmpty(board) {
    // const board = [];
    // const boardString = input;
    // console.log(boardString)
    for (let r = 0; r < size; r += 1){ // идем по строке
      for (let c = 0; c < size; c += 1){ // идем по колонке
        if(board[r][c] === '.') {
          return [r, c]; //текущая строка и колонка
        }
      }
    }
    return null
    //console.log('first changes');
  }
  console.log(findEmpty())
}
console.table(input)
