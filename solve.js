// let { toArray } = require('..');
// el = [obj]
// obj = {i, j, square, value = el[i][j], potentialValues = [], solved = true/false}

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
    y: 2, x: 1, square: 1, value: 0, potentialValues: [1], solved: false,
  },
  {
    y: 2, x: 2, square: 1, value: 1, potentialValues: [], solved: true,
  },
];

function solve(boardString) {
  const counter = 0;

  for (let k = 0; k < boardString.length; k++) {
    if (!boardString[k].solved) { // checking if the element isn't solved
      if (boardString[k].potentialValues.length <= 1) { // checking the number of potentialValues
        boardString[k].solved = true;
        boardString[k].potentialValues = [];
      }
    }
  }

  console.log(boardString);
  if (counter == 0) { // checking exit condition: no cells have clarified since previous iteration
    console.log('Не знаю, что делать дальше');
    return false;
  }
  solve(boardString);
}

solve(boardString);
