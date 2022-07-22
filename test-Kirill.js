function examination(sudoku) {
    for (let x = 0; x < sudoku.length; x++){
        for (let y = 0; y < sudoku.length; y++){
            if(sudoku[i][j] === 0) {
                let gridNums = артем(x, y)
                let crossVals = максим(x, y)  //let crossValues = (x, y) => {return getX(x).concat(getY(y)).filter(a => a > 0).sort((a, b) => { return a - b })}
                let potentialNumbers = максим(gridNums, crossVals); //подбор цифр
                if (potentialNumbers === 1){
                    sudoku[i][j] = potentialNumbers[0]
                }
            }
        }
    }
    for (let index = 0; index < sudoku.length; index++) {
        if (sudoku[index].includes(0) == true) {
            return examination(sudoku)
        }  
    }
    // return puzzle; в конце основной функции
}