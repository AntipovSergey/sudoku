function isSolved(board){           // проверяем пустые ячейки
    for(let i = 0; i < 9; i += 1){
        for(let j = 0; j < 9; j += 1){
            if(board[i][j] === 0){
                return false;
            }
          }
        }
        for(let i = 0; i < 9; i += 1){ //проверяем строки
            let row = new Set(board[i]);
            if(row.size !== 9){
                return false;
            }
        }
           //проверяем столбцы
        for(let j = 0; j < 9 ; j += 1){
            let column = new Set();
            for(let i = 0; i < 9; i += 1){
                column.add(board[i][j]);
            }
            if(column.size !== 9){
                return false;
            }
        }
        //проверяем квадраты
        for(let a = 0; a < 9; a += 1){
            let square = new Set()
            let iStart = Math.floor(a /3)*3;
            let jStart = (a % 3)*3;
            for(let i = iStart; i < iStart + 3; i += 1){
                for(let j = jStart; j < jStart + 3; j += 1){
                    square.add(board[i][j])
                }
            }
            if(square.size !== 9){
                return false;
            }
        }                                        
        return true;

    }
    