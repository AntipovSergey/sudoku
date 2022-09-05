// вспомогательные функции для isSolved
function getNumbCount(arr) {
  // кол-во уникальных значений
  return arr.reduce(function (prev, next) {
    prev[next] = prev[next] + 1 || 0;
    return prev;
  }, {});
}

function transboard(board) {
  return board[0].map((col, i) => board.map((row) => row[i])); //переворот доски, для проверки вертикали
}

function extractSquares(board) {
  // массив квадратов 3*3
  const squares = [[], [], [], [], [], [], [], [], []];
  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const squareIndex =
        Math.floor(rowIndex / 3) * 3 + Math.floor(columnIndex / 3);
      squares[squareIndex].push(cell);
    });
  });
  return squares;
}

module.exports = {
  getNumbCount,
  transboard,
  extractSquares,
};
