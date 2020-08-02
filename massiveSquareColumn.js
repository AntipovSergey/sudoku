const { finalArr, arrFirst } = require('./getSudoku');
const { massiveArrColumn } = require('./massiveArrColumn');

const squareMas = [];
const squareRow = [];
for (let p = 0; p < 9; p++) {
  // let jCounter = 0;
  // let ICounter = 0;
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      squareRow.push(finalArr[j][i]);
    }
  }
  squareMas.push(squareRow);
}
console.log(squareMas);
// дальше нужно передвинуть индексы на плюс три , но это утром
