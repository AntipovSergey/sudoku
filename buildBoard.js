function buildBoard(boadrString) {
  const str = boadrString;
  const arr = str.split('');
  const arr1 = arr.map((el) => (el === '-' ? 0 : +el));
  const board = [];
  for (let i = 0; i < arr1.length; i += 9) {
    board.push(arr1.slice(i, i + 9));
  }
  return board;
}
module.exports = buildBoard;
