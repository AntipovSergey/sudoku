function squareSearch() {
    const boxRow = Math.floor(r/boxSize) * boxSize;
    const boxCol = Math.floor(c/boxSize) * boxSize;
    for (let i = boxRow; i< boxRow + boxSize; i++){
        for (let j = boxCol; j < boxRow + boxSize; j++){
            if(board[i][j] === num && i !== r && j !== c) {
                return false;
            }
        }
    }
};