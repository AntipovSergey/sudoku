const {
  checkLine,
  checkColumn,
  checkSqure
 } = require('./checkers.js');


function validator(matrix, point) {
  const mabyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let byArr = []; // создаю массив и пушу в него все числа которые есть в судоку
  byArr = byArr.concat(checkLine(matrix, point));
  byArr = byArr.concat(checkColumn(matrix, point));
  byArr = byArr.concat(checkSqure(matrix, point));

  for (let i = 0; i < byArr.length; i++) { // прохожусь по массиву с существующими числами
    const indexArr = mabyArr.indexOf(byArr[i]); // узнаю есть ли число в mabyArr и получаю его индкс
    if (indexArr >= 0) mabyArr.splice([indexArr], 1); 
  };

  if (mabyArr.length !== 1) return false;
  return mabyArr[0];
};


module.exports = validator();
