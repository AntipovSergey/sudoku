//Let's find empty spaces
​
function findEmpty(array) {
  for (let row = 0; row < array.length; row += 1) {
    for (let col = 0; col < array.length; col += 1) {
      if (array[row][col] === "-") {
        return [row, col];
      }
    }
  }
  return null;
}
module.exports = findEmpty;
