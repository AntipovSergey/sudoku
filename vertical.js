function vert(arr, argv) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      console.log(arr[j][i]);
      if (arr[j][i] === argv) {
        return true;
      }
    }
  }
  return false;
}
console.log(vert(sudoku, 8));

module.exports = vert;
