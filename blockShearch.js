function blockSearch(arr, r, c, num) {
  const miniblok = 2;
  const BoxRow = Math.floor(r / miniblok) * miniblok;
  const BoxCol = Math.floor(c / miniblok) * miniblok;
  for (let i = BoxRow; i < BoxRow + miniblok; i += 1) {
    for (let j = BoxCol; j < BoxCol + miniblok; j += 1) {
      if (arr[i][j] === num) {
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
