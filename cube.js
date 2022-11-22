
    let board =[1, 4, 5, 8, 9, 2, 6, 7, 3];
   function sort(board){
    
    for (let i = 0; i < board.length - 1; i++){
        for (let j = i; j < board.length; j++){
            if(board[i] > board[j]){
                [board[i], board[j]] = [board[j], board[i]]    
            }
        }
    }
    return board
}
console.log(sort(board))