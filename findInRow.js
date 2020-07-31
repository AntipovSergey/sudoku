

let board = [['9','','1','4','5','6','7','8','1'],['5','2','','4','5','6','7','8','9'],['8','7','','','5','6','7','8','9']];
let variants = ['1','2','3','4','5','6','7','8','9'];

function findInRow(board,variants){
 newArr = [];
    for(let j = 0; j < 3; j++){
        for (let i=0; i < 3; i++){
            newArr.push(board[j][i]);
             // variants = variants.filter(el => el !== board[i]);
        }
    }
    

    for (let i=0; i < newArr.length; i++){
            variants = variants.filter(el => el !== newArr[i]);
    }
  return variants;
}






console.log(findInRow(board,variants));