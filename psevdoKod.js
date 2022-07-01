const fs = require('fs');

const readPuzzles = () => {
  let puzzleString = (fs.readFileSync('puzzles.txt', 'utf-8')).split('\n');

  let puzzle = puzzleString[process.argv[2] - 1 || 1].split('');

  let puzzleMatix = [];
  for (let i = 0; i < 81; i += 9) {
    puzzleMatix.push(puzzle.slice(i, i + 9));
  }

  return puzzleMatix;
}
 
const findElem = (arr) => {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (arr[y][x] === '-') {
        return [y, x];
      }
    }
  }
}
let y = (findElem(readPuzzles()))[0];
let x = (findElem(readPuzzles()))[1];

const checkX = (arr) => {
        for (let i = 0; i <= 9; i++) {
            for (let j = 0; j <= 9; j++) {
                
                
            }
           if (arr[y][i] != i){

           }
            
        }
        
        
    }
}

module.exports = readPuzzles;
console.table(readPuzzles());
console.log(y, x);



