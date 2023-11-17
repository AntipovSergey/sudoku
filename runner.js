// Используйте для решения судоку необходимые функции из файла sudoku.js
function free(arr) {
    let coord = []
    for (let i=0; i < arr.length; i++){
      for (let j=0; j < arr[i].length; j++){
        if(arr[i][j] === '-'){
          coord.push(i)
          coord.push(j)
        }
    }
    }
    return coord
}
  
  console.log(free([['1','2','3','4','5','-','7','8','9'],
    ['1','2','3','4','-','6','7','8','9'],
    ['1','-','3','4','-','-','-','8','9'],
    ]))

