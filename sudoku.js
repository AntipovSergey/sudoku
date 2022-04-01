const sudokuParse = require('./ranner');

const initialBoard = sudokuParse(process.argv[2]);
let tempBoard = JSON.parse(JSON.stringify(initialBoard));




function solve(boardString) {
  while (checkResult(initialBoard)) {
    for (let i = 0; i < initialBoard.length; i++) {
      for (let j = 0; j < initialBoard.length; j++) {
        if (tempBoard[i][j] === '.') {
          tempBoard[i][j] = [];
          for (let k = 1; k <= 9; k++) {
            if (checkLine(tempBoard, [i, j], k) && checkColumn(tempBoard, [i, j], k) && checkBox(tempBoard, [i, j], k)) {
              tempBoard[i][j].push(k);
            }
          }
        }
      }
    }
  }
}

  
    for (let i = 0; i < initialBoard.length; i++) {
      for (let j = 0; j < initialBoard.length; j++) {
        if (Array.isArray(tempBoard[i][j]) && tempBoard[i][j].length === 1) {
          initialBoard[i][j] = `${tempBoard[i][j][0]}`;
        }
      }
    }
    /
    tempBoard = JSON.parse(JSON.stringify(initialBoard));


}




  

}

const checkResult = function (board) {
  for (let i = 0; i < initialBoard.length; i++) {
    for (let j = 0; j < initialBoard.length; j++) {
      if (board[i][j] === '.') return true;
    }
  }
  return false;
}



module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
