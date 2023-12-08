let arrTest = [
  ["1", "7", "5", "8", "9", "2", "3", "4", "6"],
  ["3", "9", "0", "0", "7", "6", "4", "0", "5"],
  ["2", "0", "0", "4", "0", "0", "8", "1", "9"],
  ["0", "1", "9", "0", "0", "7", "3", "0", "6"],
  ["7", "6", "2", "0", "8", "3", "0", "9", "0"],
  ["0", "0", "0", "0", "6", "1", "0", "5", "0"],
  ["0", "0", "7", "6", "0", "0", "0", "3", "0"],
  ["4", "3", "0", "0", "2", "0", "5", "0", "1"],
  ["6", "0", "0", "3", "0", "8", "9", "0", "0"],
];
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === target) {
        return { row: i, column: j };
      }
    }
  }
  return -1;
}
const transpose = (matrix) =>
  matrix[0].map((col, i) => matrix.map((row) => row[i]));
const arrTestTranspose = transpose(arrTest);
console.log(findIndex(arrTestTranspose, "0"));
