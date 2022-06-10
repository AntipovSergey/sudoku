// const {
//   checkLine,
//   checkColumn,
//   checkSqure
//  } = require('./checkers.js')

function validator() { // TEST
// function validator(matrix, point) {
  const mabyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // let byArr = []
  // byArr = byArr.concat(checkLine(matrix, point));
  // byArr = byArr.concat(checkColumn(matrix, point));
  // byArr = byArr.concat(checkSqure(matrix, point));
  let byArr = [3,2,6]; // TEST
  byArr = byArr.concat([3,9,2])
  byArr = byArr.concat([8,2])
  byArr = byArr.concat([1, 5,7])
  console.log(byArr);

  for (let i = 0; i < byArr.length; i++) {
    const indexArr = mabyArr.indexOf(byArr[i])
    if (indexArr >= 0) mabyArr.splice([indexArr], 1);
  };

  console.log(mabyArr);
  if (mabyArr.length !== 1) return false;
  return mabyArr[0]
};

console.log(validator());
