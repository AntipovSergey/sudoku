function boardStringToArr (boardString) {
  const arr = [];
  let boardArr = [];
  for (let i = 0; i < 81; i++) {
    arr.push(isNaN(+boardString[i]) ? 0 : +boardString[i]);
  }
  for (let i = 0; i < 9; i++) {
    boardArr.push(arr.slice(0, 9))
    arr.splice(0, 9)
  }
  return boardArr;
}

function rowIsCorrect(boardArr, rowIndex) {
    for(let i = 1; i < 10; i++) {
      if (!boardArr[rowIndex].includes(i)) return false
    }
    return true;
  }

function columnIsCorrect(boardArr, colIndex) {

    function transposeArray(array){
    var newArray = [];
    for(var i = 0; i < 9; i++){
        newArray.push([]);
    };

    for(var i = 0; i < 9; i++){
        for(var j = 0; j < 9; j++){
            newArray[j].push(array[i][j]);
        };
    };
    return newArray;
    }

    return rowIsCorrect(transposeArray(boardArr),colIndex)
  }
  
    function squareIsCorrect (boardArr,colIndex,rowIndex){
      const minRowIndex = Math.floor((rowIndex + 1) / 3) * 3    
      const maxRowIndex = Math.ceil((rowIndex + 1) / 3) * 3 - 1
      const minColIndex = Math.floor((colIndex + 1) / 3) * 3
      const maxColIndex = Math.ceil((colIndex + 1) / 3) * 3 - 1

      const squareArr =[];
      for (let row=0; row<9; row++) {
        for (let col=0; col<9; col++){
          if ((row => minRowIndex)&&
             (row <= maxRowIndex)&&
             (col => minColIndex)&&
             (col <= maxColIndex)) { squareArr.push(boardArr[row][col])}
        }
      }
      for(let i = 1; i < 10; i++) {
        if (!squareArr.includes(i)) return false
      }
      return true;
    }

    function boardIsCorrect (boardArr){
      for (let i = 0; i < 9; i++){
        if (!rowIsCorrect(boardArr,i)) return false
        if (!columnIsCorrect(boardArr,i)) return false 
        if (!squareIsCorrect(boardArr,(i%3)*3,Math.floor(i/3))) return false
      }
      return true;
    }

    module.exports = {
      columnIsCorrect,
      rowIsCorrect,
      squareIsCorrect,
      boardIsCorrect
    }