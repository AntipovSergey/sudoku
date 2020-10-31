let newArr = [
  [1,0,3,4,5,6,7,8,9],
  [2,3,4,1,0,6,7,8,9],
  [1,0,3,4,5,6,7,8,9],
]
   
function getColumn(j) {
  const columnArr = []
  for (let i = 0; i < newArr.length; i += 1) {
    columnArr.push(newArr[i][j])
  }
  return columnArr
  }

function getGroup(i,j) {
  function getCoords (a) {
    if (a < 3) {
      return {start: 0,
      finish: 3 }
    }
    if (a >= 3 && a < 6) {
      return {start: 3,
      finish: 6 }
    }
    if (a >= 6 ) {
      return {start:6, 
      finish: 9 }  
    }
  }

  const coordsI = getCoords(i);
  const coordsJ = getCoords(j);
  let arrGroup = [];

  console.log(coordsI.start);
  console.log(coordsI.finish);


  for (let k = coordsI.start; k < coordsI.finish; k += 1 ){
    for (let r = coordsJ.start; r < coordsJ.finish; r += 1){
      arrGroup.push(newArr[k][r])
    }
  }
  return arrGroup;
  }

  // const rowContent = newArr[i];
  // const colContent = getColumn(j);
  // const groupContent = getGroup(i,j);

  console.log(getGroup(1,1));
