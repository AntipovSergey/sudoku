function findEmptyCell(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === '-'){
                return [i, j];
            }
        }
    }
    return -1;
}

module.exports = findEmptyCell;
