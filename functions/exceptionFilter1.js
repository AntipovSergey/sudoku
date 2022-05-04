function excF1 (i=0,j=0,array) {
  let excArray = [];
  // let counter = 0;
  for (let k = 0; k < array.length; k += 1) {
    
      if ( typeof (array[i][k]) === 'number' ) excArray.push(array[i][k]);
    
  }
  for (let g = 0; g<array.length; g++){
    if ( typeof (array[g][j]) === 'number' ) excArray.push(array[g][j]);
  }
  return excArray;
}

module.exports = excF1;