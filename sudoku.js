
function columnFunc(puzzle, number){
  for(let i = 0; i < puzzle.length; i += 1){
    let column = '';
    for(let j = 0; j < puzzle.length; j += 1){
      column += puzzle[j][i]
    }
    if(column.includes(number)) return false
    return true 
  }
  
}

// const puzzle = [
//   [1, "-", 5, 8, "-", 2, "-", "-", "-"],
//   ["-", 9, "-", "-", 7, 6, 4, "-", 5],
//   [2, "-", "-", 4, "-", "-", 8, 1, 9],
//   ["-", 1, 9, "-", "-", 7, 3, "-", 6],
//   [7, 6, 2, "-", 8, 3, "-", 9, "-"],
//   ["-", "-", "-", "-", 6, 1, "-", 5, "-"],
//   ["-", "-", 7, 6, "-", "-", "-", 3, "-"],
//   [4, 3, "-", "-", 2, "-", 5, "-", 1],
//   [6, "-", "-", 3, "-", 8, 9, "-", "-"],
// ];

// console.log(columnFunc(puzzle, 7))