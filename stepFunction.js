function makeStep(array) {
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++){
      if (array[i][j] === '-') {
        for (let k = 1; k < 10; k++){
          if (!(funStr(k, arr[i])/*&&funColumn(k, arr, i)&&funSquare(k)*/)) {
            array[i][j] = k
            break
          }
        }
      }
    }
  }
  return array
}
