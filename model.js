// формируем модель данных для передачи в контроллер:

const fs = require('fs');
const rawData = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
function modelData() {

}

module.exports = { modelData }