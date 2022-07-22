function sudoku(puzzle) {
    // returns the minimum row or column number for a 3x3 grid, given an axis
    let minCalc = (axis) => {
      if (axis >= 6){
        return 6
      } else if (axis >= 3){
        return 3
      }
      return 0
    }
    
    // returns the values in the same 3x3 grid
    let threeGridValues = (row, col) => {
      let rowMin = minCalc(row)
      let colMin = minCalc(col)
      let firstRow = [puzzle[rowMin][colMin], puzzle[rowMin][colMin + 1], puzzle[rowMin][colMin + 2]]
      let secondRow = [puzzle[rowMin + 1][colMin], puzzle[rowMin + 1][colMin + 1], puzzle[rowMin + 1][colMin + 2]]
      let thirdRow = [puzzle[rowMin + 2][colMin], puzzle[rowMin + 2][colMin + 1], puzzle[rowMin + 2][colMin + 2]]
      let grid = [firstRow, secondRow, thirdRow]
      return grid.concat.apply([], grid).filter(a => a > 0).sort((a, b) => { return a - b })
    }
    
  
    // function getX (row){
    //     let stepHoriz = puzzle[row].sort((a, b) => { return a - b }).filter(a => a > 0)
    // return stepHoriz
    // }

    let getX = (row) => {
        return JSON.parse(JSON.stringify(puzzle))[row].sort((a, b) => { return a - b }).filter(a => a > 0);
      }

    //   let getY = (col) => {
    //     return puzzle.map((row) => { return row[col] }).sort((a, b) => { return a - b }).filter(a => a > 0)
    //   }

    function getY(col){
        let stepVert = puzzle.map((row) => { return row[col] })
        let sortStepVert = stepVert.sort((a,b) => {return a-b})
        return sortStepVert.filter(el => el > 0)
    }

    
    let crossValues = (x, y) => {
        return getX(x).concat(getY(y)).filter(a => a > 0).sort((a, b) => { return a - b })
      
    }
    
    // let remainingNumbers = (gridNums, crossVals) => {
    //     return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(val => !gridNums.includes(val) && !crossVals.includes(val));
    //   }
    let remainingNumbers = (gridNums, crossVals) => {
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let numsFilt = nums.filter(el => !gridNums.includes(el) && !crossVals.includes(el))
        // console.log(numsFilt);
        return numsFilt
      }
    // solves the sudoku puzzle
    let solve = (puzzle) => {
      for (let x = 0; x < puzzle.length; x++){
        for (let y = 0; y < puzzle.length; y++){
          if (puzzle[x][y] === 0){
            let gridNums = threeGridValues(x, y)
            let crossVals = crossValues(x, y)
            let potentialNumbers = remainingNumbers(gridNums, crossVals);
            if (potentialNumbers.length === 1){
              puzzle[x][y] = potentialNumbers[0];
            }
          }
        }
      }
      for (let z = 0; z < puzzle.length; z++){
        if (puzzle[z].includes(0)){
          return solve(puzzle) 
        }
      }
      return puzzle;
    }
  
    return solve(puzzle)
  }
  
//   let puzzle = [
//     [5,3,0,0,7,0,0,0,0],
//     [6,0,0,1,9,5,0,0,0],
//     [0,9,8,0,0,0,0,6,0],
//     [8,0,0,0,6,0,0,0,3],
//     [4,0,0,8,0,3,0,0,1],
//     [7,0,0,0,2,0,0,0,6],
//     [0,6,0,0,0,0,2,8,0],
//     [0,0,0,4,1,9,0,0,5],
//     [0,0,0,0,8,0,0,7,9]];
  const fs = require('fs');
let str = fs.readFileSync('./puzzles.txt', 'utf8');
let str1 = ''
let arr =[]
let puzzle = []
for (let i = 0; i < 81; i ++) {
    str1 += str[i]
}

str = str1.replaceAll('-', 0).split('')
for (let j = 1; j <= 81; j += 1) {
    arr.push(Number(str[j - 1]))
    if((j % 9 === 0) && (j !== 0)) {
        puzzle.push(arr)
        arr = []
    }
}
  console.log(sudoku(puzzle))