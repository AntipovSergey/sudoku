let board = [['1','','3','4','5','6','7','8','9']];
let variants = ['1','2','3','4','5','6','7','8','9'];

function findSquare(board,variants){
    for (let i=0; i < board.length; i++){
                    variants = variants.filter(el => el !== board[i]);
        }
    return variants;
}

console.log(findSquare(board, variants));