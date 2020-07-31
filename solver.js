const { finalArr, arrFirst } = require('./getSudoku');
const { massiveArrColumn } = require('./massiveArrColumn');
//        finalArrPossibleValues.push(k);
// // цикл который ищет совпадающие значения
let massAdder = [];
let k = 1;
// функция горизонтального поиска
function gorisontSearch(k) {
  while (k <= 9) {
    let j = 0;
    for (let i = 0; i < 9; i++) {
      if (String(k) === finalArr[0][j]) {
        k += 1;}
      j += 1;
    }
    if (j === 9) {
      if (verticalSearch(k) > 0) massAdder.push(k);
    }
    k += 1;
  }

  return massAdder;
}

gorisontSearch(k);

// функция вертикального поиска
function verticalSearch(k) {
  let vert = 0;
  for (let counter = 0; counter < 9; counter++) {
    if (String(k) !== massiveArrColumn[0][vert]) {
      vert += 1;//        finalArrPossibleValues.push(k);
    }
  }
  if (vert === 9) {
    return k;
  } return -1;
}

console.log(massAdder);



module.exports = {
  massiveArrColumn,

};
