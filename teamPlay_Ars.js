


const size=9;
const boxsize=3;
 
function findEmpty (board){
    for(let i=0;i<size;i+=1){
        for(let j=0;j<size;j+=1){
            if(board[i][j]==='-'){
                return [i,j];
            } 
        }
    }
    return null
}


console.log(findEmpty(board))