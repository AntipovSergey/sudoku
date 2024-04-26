// render the puzzle
const container = document.querySelector(".container");
const puzzle = [
  ["a", "k", "f", "o", "x", "e", "s"],
  ["s", "o", "a", "w", "a", "h", "p"],
  ["i", "t", "c", "k", "e", "t", "n"],
  ["o", "t", "s", "d", "h", "o", "h"],
  ["s", "e", "x", "g", "s", "t", "a"],
  ["u", "r", "p", "i", "w", "e", "u"],
  ["z", "s", "b", "n", "u", "i", "r"],
];

// 1 - 5 8 - 2 - - -
// - 9 - - 7 6 4 - 5
// 2 - - 4 - - 8 1 9
// - 1 9 - - 7 3 - 6
// 7 6 2 - 8 3 - 9 -
// - - - - 6 1 - 5 -
// - - 7 6 - - - 3 -
// 4 3 - - 2 - 5 - 1
// 6 - - 3 - 8 9 - -

const puzzleDiv = document.createElement("div");
puzzleDiv.className = "puzzle";

for (let i = 0; i < puzzle.length; i += 1) {
  const puzzleRow = document.createElement("div");
  puzzleRow.className = "puzzle__row";
  for (let j = 0; j < puzzle[0].length; j += 1) {
    const puzzleLetter = document.createElement("div");
    puzzleLetter.className = "puzzle__letter";
    puzzleLetter.innerText = puzzle[i][j];
    puzzleRow.append(puzzleLetter);
  }
  puzzleDiv.append(puzzleRow);
}

container.append(puzzleDiv);
