function prettyBoard(board) {
  const resultArr = [];
  for (let i = 0; i < board.length; i += 9) {
    resultArr.push(board.slice(i, i + 9));
  }
  const newArr = resultArr.map((el) => el.split('').join(' '));

  return newArr;
}

module.exports = { prettyBoard };
