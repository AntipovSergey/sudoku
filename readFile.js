// Подключить модуль работы с файловой системой.
const fs = require('fs');

function read(whichPuzzle) { // whichPuzzle - выбираем судоку
  const arrPuzzle = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n'); // читаем файл ,преобразуем в масив и запис.в переменную
  const newRow = arrPuzzle[whichPuzzle].split(''); // отрезаем одну строку
  const table = [];
  for (let i = 0; i < newRow.length; i += 1) {
    table.push(newRow.splice(0, 9)); // делим массив на на подмассивы по 9 элементво
  }
  return table; // возвращает многомерный массив из строки
}
console.table(read(1));
