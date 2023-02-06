// const board = require('./board');

function checkSquare(board, coords, value) {
  //определяем начальные координаты квардата для поиска значения
  const squareRow = parseInt(coords[0] / 3) * 3;
  const squareCol = parseInt(coords[1] / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      //проверяем в определенном квадрате наличие заданного значения value
      if (board[i + squareRow][j + squareCol] === value.toString()) 
        return false;
    }
  }
  return true;
}
module.exports = {
  checkSquare,
};
