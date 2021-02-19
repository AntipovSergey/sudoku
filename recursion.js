const { validation } = require('./validation');

const decision = (board) => {
  if (Math.sqrt(board.length) % 1 !== 0) return false;
  const size = board.length;
  const empty = getFirstEmpty(board);

  if (empty === null) return true;

  for (let i = 1; i < size + 1; i += 1) {
    const chekingValue = i.toString();
    const isValid = validation(board, empty, chekingValue);
    // console.log('validation ---> ', isValid);

    if (isValid) {
      // console.log(chekingValue);
      board[empty[0]][empty[1]] = chekingValue;
      if (decision(board))
        return true;

      board[empty[0]][empty[1]] = '-';
    }
  }
  return false;
}


const getFirstEmpty = (board) => {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board.length; j += 1) {
      if (board[i][j] === '-') return [i, j];
    }
  }
  return null;
}



// const str = '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------';
// const strLength = Math.sqrt(str.length);
// const tempArr = str.replace(new RegExp(`(.{` + strLength + `})`, 'g'), function (p1) { return p1 + '\n' }).split('\n');
// tempArr.length = strLength;
// const newArr = tempArr.map(element => element.split(''));

module.exports = {
  decision,
  validation
}

