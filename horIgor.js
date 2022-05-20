// uuyu
let puzzle = [
  [1, 0, 5, 8, 0, 2, 0, 45, 0],
  [1, 0, 5, 8, 0, 2, 0, 0, 0],
  [1, 0, 5, 8, 0, 2, 0, 0, 0],
]
let num = 45
function getResult(puzzle, num) {

  for (let i = 0; i < puzzle.length; i++) {
    const word = [];
    for (let j = 0; j < puzzle[i].length; j++) {
      word.push(puzzle[j][i])
    }
    if (word.join('').includes(num)) return true;
  }
  return false;
}

console.log(getResult(puzzle, num))
