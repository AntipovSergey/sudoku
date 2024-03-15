const read = require('./read.js');

const solve = (num) => {
  const arr = read(num);

  for (let i = 0; i < arr.length; i += 1) {
    const columns = [];
    for (let j = 0; j < arr.length; j += 1) {
      const column = [];
      columns.push(column);
      for (let m = 0; m < arr.length; m += 1) {
        column.push(arr[m][j]);
      }
    }

    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === 0) {
        for (let k = 1; k <= 9; k += 1) {
          if (!arr[i].includes(k) && !columns[j].includes(k)) {
            arr[i][j] = k;
          }
        }
      }
    }
  }
  return arr;
};

module.exports = solve;
