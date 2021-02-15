// const board = [[1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],
// [1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],
// [1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]
const prettyBoard = (board) => {
  //console.clear()
  let consoleString = '---------------------\n'
  board.forEach((line) => consoleString += '| ' + line.join(' ') + ' |\n')
  consoleString += '---------------------\n'
  return consoleString;
}
// console.log(prettyBoard(board));
module.exports = prettyBoard;
