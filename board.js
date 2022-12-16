const fs = require('fs');

const String = fs.readFileSync('./puzzles.txt', 'utf8');

function board(boardString, num) {
  const games = boardString.split('\n');
  const game = games[num].split('');
  const result = [];
  for (let i = 0; i < game.length; i += 9) {
    result.push(game.slice(i, i + 9));
  }
  return result;
}
console.log(board(String, 2));
