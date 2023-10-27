const { mod } = require("prelude-ls");

function reshalla(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-') {
      for (let j = 1; j <= 9; j++) {
        if (!arr.includes(j)) {
          arr[i] = j;
        }
      }
    }
  }
  return arr;
}

// const arr = ['-', 2, 3, 5, '-', 6, '-', '-', 1];
// console.log(reshalla(arr));
 module.exports {
    reshalla
 }