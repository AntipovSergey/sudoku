function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        for (let num = 1; num <= 9; num++) {
          let check = true;
          for (let k = 0; k < 9; k++) {
            if (arr[i][k] === num || arr[j][k] === num) {
              check = false;
            }
          }
          if (check) {
            arr[i][j] = num;
          }
        }
      }
    }
  }
  return arr;
}
module.exports = { solve };
