// формируем модель данных для передачи в контроллер:

const fs = require("fs");

const rawData = fs.readFileSync("./sudoku-puzzles.txt", "utf-8");

// передаем номер строки из файла
const numberSudoku = 12;

function modelData() {
  const str = rawData.split("\n")[numberSudoku];
  return str.split("").reduce((acc, el, ind) => {
    const i = Math.trunc(ind / 9);
    if (acc[i] === undefined) acc[i] = [];
    acc[i].push(el);
    return acc;
  }, []);
}

module.exports = { modelData };
