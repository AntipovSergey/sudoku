const { modelData } = require("./model.js");
// Переменные;
// sudokuBoard - данные нашего поля;
// row - данные ряда;
// column - данные колоки;
// valueFromTile - данные из solver;
//
// Validator - пропускает значения из функции solver для проверки
// в соответствии с правилами игры и возвращает boolean значение
// в зависимости от результата;
function validator(sudokuBoard, row, column, valueFromTile) {
  for (let i = 0; i < 9; i += 1) {
    // Ось X
    const checkX = 3 * Math.trunc(row / 3) + Math.trunc(i / 3);
    // Ось Y
    const checkY = 3 * Math.trunc(column / 3) + (i % 3);
    if (
      sudokuBoard[row][i] == valueFromTile ||
      sudokuBoard[i][column] == valueFromTile ||
      sudokuBoard[checkX][checkY] == valueFromTile
    ) {
      return false;
    }
  }
  return true;
}

module.exports = { validator, solver };
