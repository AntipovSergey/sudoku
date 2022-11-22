
    let board =[[1, 4, 5, 8, 9, 2, 6, 7, 3],
                [8, 9, 3, 1, 7, 6, 4, 2, 5],
                [2, 7, 6, 4, 3, 5, 8, 1, 9],
                [5, 1, 9, 2, 4, 7, 3, 8, 6],
                [7, 6, 2, 5, 8, 3, 1, 9, 4],
                [3, 8, 4, 9, 6, 1, 7, 5, 2],
                [9, 5, 7, 6, 1, 4, 2, 3, 8],
                [4, 3, 8, 7, 2, 9, 5, 6, 1],
                [6, 2, 1, 3, 5, 8, 9, 4, 7]];
function isSolved(board) {
    // Проверка строк
    for (let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length - 1; j++){
            for(let k = j + 1; k < board[i].length; k++){
                if(board[i][j] === board[i][k]){
            return false
            }
        }
    }
    }
     //Проверка столбцов 
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[i].length - 1; j++){
            for(let k = j + 1; k < board[i].length; k++){
       if(board[j][i] === board[k][i]){
        return false
    }
            }
        }
    }
    
    return true
}
  console.log(isSolved(board));
