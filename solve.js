const fs = require("fs");
const solve = (string) => {
    
  const puzzle = fs
    .readFileSync("./puzzles.txt", "utf-8")
    .split("\n")
    .slice(0, 1)
    .map((el) => el.trim("\r"))
    .join()
    .split("");
    const puzzleWrapper = [];
    for (let i = 0; i < 9; i++) {
        puzzleWrapper.push(puzzle.splice(0, 9));
      }
      return puzzleWrapper;
};

console.log(solve(fs));
















// const puzzle = fs.readFileSync("./puzzles.txt", "utf-8");
// const puzzleWrapper = [];
// const newPuzzleString = puzzle // строка в массиве
//   .split("\n")
//   .slice(0, 1)
//   .map((el) => el.trim("\r"))
//   .join();

// function who(string) {
//   // let splite = newPuzzleString.slice()
//   let splite = newPuzzleString.split("");

//   for (let i = 0; i < 9; i++) {
//     puzzleWrapper.push(splite.splice(0, 9));
//   }
//   return puzzleWrapper;
// }
// //console.log(   puzzle.split('\n').slice(0,1).map((el) => el.trim('\r')))
// console.log(who(newPuzzleString));
