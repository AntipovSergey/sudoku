// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

let string =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

function solve(boardString) {
  let board = [];

  let newArray = boardString.split("");
  for (let i = 0; i < boardString.length; i += 9) {
    board.push(newArray.slice(i, i + 9));
  }
  return board;
}

function kub(arr) {
  let generalArray = [];
  let columnKub = [];
  let arrayCubes = [];

  let assistantArray1 = [];
  let assistantArray2 = [];
  let assistantArray3 = [];

  for (let i = 0; i < arr.length; i++) {
    let firstThreeColumns = arr[i].slice(0, 3);
    let secondThreeColumns = arr[i].slice(3, 6);
    let thirdThreeColumns = arr[i].slice(6, 9);
    assistantArray1.push(firstThreeColumns);
    assistantArray2.push(secondThreeColumns);
    assistantArray3.push(thirdThreeColumns);
  }
  generalArray.push(assistantArray1);
  generalArray.push(assistantArray2);
  generalArray.push(assistantArray3);

  for (let i = 0; i < generalArray.length; i++) {
    for (let j = 0; j < generalArray[i].length; j++) {
      columnKub.push(generalArray[i][j].slice(0, 3));
    }
  }

  for (let i = 0; i < columnKub.length; i += 3) {
    let swap = columnKub[i].concat(columnKub[i + 1], columnKub[i + 2]);
    arrayCubes.push(swap);
  }

  console.log(arrayCubes);
}

kub(solve(string));

module.exports = {
  solve: solve
};
