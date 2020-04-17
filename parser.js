const fs = require('fs');

// Функция парсинга строки файла (номер указывается).
const sudokuParse = (filename, rowNumber) => {

  const text = fs.readFileSync(filename, 'utf8');           // парсим файл в строку.
  const stringsArray = text.split('\n');                    // разбиваем строки на массивы строк по разделителю \n

  const arr = stringsArray[rowNumber].split('');            // Выбираем конкретную строку с судоку и превращаем ее в одномерный массив
  let result = [];

  for (let i = 0; i < arr.length; i += 9) {
    result.push(arr.slice(i, i + 9));                       // Одномерный массив в многомерный 9х9
  }
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[i][j] !== '-') {
        result[i][j] = +result[i][j]                        // буква в числа
      };
    }
  }
  return result;
}

console.table(sudokuParse('./sudoku-puzzles.txt', 13));

module.exports = { sudokuParse };
