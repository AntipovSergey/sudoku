const fs = require('fs');
let str = fs.readFileSync('./puzzles.txt', 'utf8');
let str1 = ''
let arr =[]
let sudoku = []
for (let i = 0; i < 81; i ++) {
    str1 += str[i]
}

str = str1.replaceAll('-', 0).split('')
for (let j = 1; j <= 81; j += 1) {
    arr.push(Number(str[j - 1]))
    if((j % 9 === 0) && (j !== 0)) {
        sudoku.push(arr)
        arr = []
    }
}


function final(sudoku){
    
    // Grid это маленький квадрат 3х3;
    // axis это ось;
  
    const minOfGrid = (axis) => {
      if (axis >= 6) {
        return 6;
      } else if (axis >= 3) {
        return 3;
      }
      return 0;
    };
  
    function GridValues(row, col) {
      const minOfRow = minOfGrid(row);
      const minOfCol = minOfGrid(col);
  
      const firstRow = [sudoku[minOfRow][minOfCol],
        sudoku[minOfRow][minOfCol + 1],
        sudoku[minOfRow][minOfCol + 2]];
  
      const secondRow = [sudoku[minOfRow + 1][minOfCol],
        sudoku[minOfRow + 1][minOfCol + 1],
        sudoku[minOfRow + 1][minOfCol + 2]];
  
      const thirdRow = [sudoku[minOfRow + 2][minOfCol],
        sudoku[minOfRow + 2][minOfCol + 1],
        sudoku[minOfRow + 2][minOfCol + 2]];
  
      const grid = [firstRow, secondRow, thirdRow];
  
      return grid.concat.apply([], grid).filter((a) => a > 0).sort((a, b) => {return a - b});
    }

    let moveHoriz = (row) => {
        // console.log(JSON.parse(JSON.stringify(sudoku))[row]); 
        return JSON.parse(JSON.stringify(sudoku))[row].sort((a, b) => { return a - b }).filter(a => a > 0);
    }

    

    function moveVert(col){
        let stepVert = sudoku.map((row) => { return row[col] })
        let sortStepVert = stepVert.sort((a,b) => {return a-b})
        return sortStepVert.filter(el => el > 0)
    }

    
    let valOfCross = (x, y) => {
        return moveHoriz(x).concat(moveVert(y)).filter(a => a > 0).sort((a, b) => { return a - b })
    }
    
    
    let getPotentVal = (gridNums, crossVals) => {
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let numsFilt = nums.filter(el => !gridNums.includes(el) && !crossVals.includes(el))
        // console.log(numsFilt);
        return numsFilt
      }
    
      function examination(sudoku) {
        for (let x = 0; x < sudoku.length; x++){
            for (let y = 0; y < sudoku.length; y++){
                
                if(sudoku[x][y] === 0) {
                    let gridNums = GridValues(x, y)
                    let crossVals = valOfCross(x, y)  
                    let potentialNumbers = getPotentVal (gridNums, crossVals); //подбор цифр
                    if (potentialNumbers.length === 1){
                        sudoku[x][y] = potentialNumbers[0]
                    }
                }
            }
        }
        for (let index = 0; index < sudoku.length; index++) {
            if (sudoku[index].includes(0)) {
                return examination(sudoku)

            }  
        }
            return sudoku
    }

return examination(sudoku)
  }
// console.log(sudoku);
console.table(final(sudoku))
