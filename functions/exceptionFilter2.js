function excF2(i=0, g=0, arr, arrB) {
  let st_i;
  let end_i;
  switch (i) {
    case 0: case 1: case 2: st_i = 0; end_i = 2; break;
    case 3: case 4: case 5: st_i = 3; end_i = 5; break;
    case 6: case 7: case 8: st_i = 6; end_i = 8; break;
    default: break;
  }
  let st_j;
  let end_j;
  switch (g) {
    case 0: case 1: case 2: st_j = 0; end_j = 2; break;
    case 3: case 4: case 5: st_j = 3; end_j = 5; break;
    case 6: case 7: case 8: st_j = 6; end_j = 8; break;
    default: break;
  }
  
  for (; st_i <= end_i; st_i+=1) {
    for(let j = st_j; j <= end_j; j++) {      
            if (typeof (arr[st_i][j]) === 'number') {
              arrB.push(arr[st_i][j])
            }
          }
  }
  return arrB
}


module.exports = excF2