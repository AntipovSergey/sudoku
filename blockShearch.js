const array = [
  [' ', '2', '1', '2'],
  ['4', '3', '3', '4'],
  ['1', '2', '1', '2'],
  ['3', '4', '3', '4'],
];

function blockSearch(arr, r, c, num) {
  const blokLength = 4;
  const miniblok = 2;
  const BoxRow = Math.floor(r / miniblok) * miniblok;
  const BoxCol = Math.floor(c / miniblok) * miniblok;
  // return [BoxCol, BoxRow];
  for (let i = BoxRow; i < BoxRow + miniblok; i += 1) {
    for (let j = BoxCol; j < BoxCol + miniblok; j += 1) {
      if (arr[i][j] === num) {
        console.log('Цифра быть не может');
        return false;
      }
    }
  }
  return true;
}
console.log(blockSearch(array, 0, 0, '3'));
module.exports = {
  blockSearch,
};
