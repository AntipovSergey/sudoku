const { isSolved } = require('./isSolved.js');

boardString = [
  {
    y: 0, x: 0, square: 1, value: 2, potentialValues: [], solved: true,
  },
  {
    y: 0, x: 1, square: 1, value: 0, potentialValues: [1, 2, 3], solved: false,
  },
  {
    y: 0, x: 2, square: 1, value: 3, potentialValues: [], solved: true,
  },
  {
    y: 1, x: 0, square: 1, value: 1, potentialValues: [], solved: true,
  },
  {
    y: 1, x: 1, square: 1, value: 0, potentialValues: [1, 2, 3], solved: false,
  },
  {
    y: 1, x: 2, square: 1, value: 0, potentialValues: [1, 2, 3], solved: false,
  },
  {
    y: 2, x: 0, square: 1, value: 0, potentialValues: [1, 2, 3], solved: false,
  },
  {
    y: 2, x: 1, square: 1, value: 0, potentialValues: [1, 2, 3], solved: false,
  },
  {
    y: 2, x: 2, square: 1, value: 1, potentialValues: [], solved: true,
  },
];

function solve(board) {
  let counter = 0;

  for (let k = 0; k < board.length; k++) {
    if (!board[k].solved) { // checking if the element isn't solved
      const arrTech = board.filter((el) => (el.x == board[k].x || el.y == board[k].y)); // || el.square == board[k].square)); // array of all elements from row/column/square
      for (let i = 0; i < board[k].potentialValues.length; i++) { // removing digits from potentialValues
        if (arrTech.find((el) => el.value == board[k].potentialValues[i])) { // if the digit was found in row/column/square
          board[k].potentialValues.splice(i, 1); // remove the digit from the potentialValues
        }
      }

      if (board[k].potentialValues.length == 1) { // checking the number of potentialValues
        board[k].solved = true;
        board[k].value = board[k].potentialValues[0];
        board[k].potentialValues = []; // can be removed, need just for beauty :)
        counter++;
      }
    }
  }

  if (counter == 0) { // checking exit condition: no cells have clarified since previous iteration
    console.log('Не знаю, что делать дальше');
    return false;
  }
  solve(board);
}

solve(boardString);

console.log(boardString);
console.log(isSolved(boardString));

module.exports = { solve };
