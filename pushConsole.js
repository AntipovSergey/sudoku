function pushConsole(matrix){
    let row = 0
    for(let j = 0; j < 9; j++){
      if(j % 3 === 0 && j !== 0){
     row += '| '
      }
      row += matrix[j] + ' '
    }return row
  }

