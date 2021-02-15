const prettyBoard = (board) => {
  //console.clear()
  console.log('---------------------')
  board.forEach((line) => console.log('| ' + line.join(' ') + ' |'))
  console.log('---------------------')
}

module.exports = prettyBoard;
