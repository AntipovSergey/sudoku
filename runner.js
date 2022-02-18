const { modelData } = require("./model.js");
let model = modelData();
// Переменные;
// sudokuBoard - данные нашего поля;
// row - данные ряда;
// column - данные колоки;
// valueFromTile - данные из solver;
//
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
function solver(arr) {
  for (let i = 0; i < 9; i++) {
    // первым циклом проходим по горизонтальной строке и ищем индекс где находится "-"
    for (let j = 0; j < 9; j++) {
      // вторым циклом ищем индекс где находится "-" в вертикальмом столбце
      if (arr[i][j] === "-") {
        // условие - если находит координаты где "-" запускается цикл,
        // который подбирает цифру на это
        // место
        for (let k = 1; k <= 9; k++) {
          // цикл подбора цифры
          if (validator(arr, i, j, k)) {
            // если функция "validator" дает true, подставляем цифру
            arr[i][j] = `${k}`;
            if (solver(arr)) {
              //
              return true;
            }
            arr[i][j] = "-";
            // если функция validator дает false то подставляется обратно "-"
          }
        }
        return false;
      }
    }
  }
  return true;
}
solver(model);
console.table(model);
