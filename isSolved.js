// const arr = [
// [4,6,3,1,8,2,9,7,5],
// [5,8,7,4,6,9,1,2,3],
// [9,2,1,3,5,7,8,6,4],
// [2,4,8,6,7,1,3,5,9],
// [7,5,9,2,4,3,6,1,8],
// [1,3,6,5,9,8,7,4,2],
// [3,7,5,9,2,6,4,8,1],
// [8,1,4,7,3,5,2,9,6],
// [6,9,2,8,1,4,5,3,7]
// ]
 
function isSolved(arrReady) {

//Проверка по горизонтали
if (checkRepeat(arrReady)){
console.log('Судоку решено по горизонтали');
}
else {console.log('Судоку не решено по горизонтали')
return false
}

// Проверка по вертикали
if (checkVetrical(arrReady)){
console.log('Судоку решено по вертикали');
}
else {console.log('Судоку не решено по вертикали')
return false
}

//Проверка в блоке
if (checkBox(arrReady)){
  console.log('Cудоку решено');
  return true
}

console.log('Cудоку не решено');
return false

}



//Функция для проверки по горизонтали
function checkRepeat(arrReady) {
  const arrCopy = [...arrReady]
  const sortArrs = arrCopy.map((el) => [...el].sort((a,b) => a - b))
  
  for (let i = 0; i < 9; i += 1){
    for (let j = 1; j < 9; j += 1){
      if(sortArrs[i][j] === sortArrs[i][j-1]){
        return false
      }
    }
  }
return true
}

// Функция для проверки по вертикали
  function checkVetrical(arrReady) {
  const vertArr = []
  let newArr = []
  for(let i = 0; i < 9; i += 1){
    newArr = []
    for(let j = 0; j < 9; j += 1){
      newArr.push(arrReady[j][i])
     }
     vertArr[i] = newArr
  }
  return (checkRepeat(vertArr))
}

//Функция для проверки в блоке

function checkBox(arr) {

    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    let arr5 = [];
    let arr6 = [];
    let arr7 = [];
    let arr8 = [];
    let arr9 = [];
    let result = [];
    for (let i = 0; i < 3; i++) {
      let arr1Line1 = arr[i].slice(0,3);
      for (let i = 0; i < arr1Line1.length; i++) {
        arr1.push(arr1Line1[i]);
      }
      let arr2Line1 = arr[i].slice(3,6);
      for (let i = 0; i < arr2Line1.length; i++) {
        arr2.push(arr2Line1[i]);
      }
      let arr3Line1 = arr[i].slice(6);
      for (let i = 0; i < arr3Line1.length; i++) {
        arr3.push(arr3Line1[i]);
      }
    }
    for (let i = 3; i < 6; i++) {
      let arr1Line1 = arr[i].slice(0,3);
      for (let i = 0; i < arr1Line1.length; i++) {
        arr4.push(arr1Line1[i]);
      }
      let arr2Line1 = arr[i].slice(3,6);
      for (let i = 0; i < arr2Line1.length; i++) {
        arr5.push(arr2Line1[i]);
      }
      let arr3Line1 = arr[i].slice(6);
      for (let i = 0; i < arr3Line1.length; i++) {
        arr6.push(arr3Line1[i]);
      }
    }
    for (let i = 6; i < 9; i++) {
      let arr1Line1 = arr[i].slice(0,3);
      for (let i = 0; i < arr1Line1.length; i++) {
        arr7.push(arr1Line1[i]);
      }
      let arr2Line1 = arr[i].slice(3,6);
      for (let i = 0; i < arr2Line1.length; i++) {
        arr8.push(arr2Line1[i]);
      }
      let arr3Line1 = arr[i].slice(6);
      for (let i = 0; i < arr3Line1.length; i++) {
        arr9.push(arr3Line1[i]);
      }
    }
  result.push(arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9)
    
 
  return (checkRepeat(result))
  

}


//  let arr = arrReady;
//   for(let i = 0; i < 9; i += 3){
//     for(let j = 0; j < 9; j += 3){
//       if ([arr[i][j]].concat([arr[i][j+1]],[arr[i][j+2]],[arr[i+1][j]],[arr[i+1][j+1]],[arr[i+1][j+2]],[arr[i+2][j]],[arr[i+2][j+1]],[arr[i+2][j+2]]).includes(1) && [arr[i][j]].concat([arr[i][j+1]],[arr[i][j+2]],[arr[i+1][j]],[arr[i+1][j+1]],[arr[i+1][j+2]],[arr[i+2][j]],[arr[i+2][j+1]],[arr[i+2][j+2]]).includes(2) && [arr[i][j]].concat([arr[i][j+1]],[arr[i][j+2]],[arr[i+1][j]],[arr[i+1][j+1]],[arr[i+1][j+2]],[arr[i+2][j]],[arr[i+2][j+1]],[arr[i+2][j+2]]).includes(3) && [arr[i][j]].concat([arr[i][j+1]],[arr[i][j+2]],[arr[i+1][j]],[arr[i+1][j+1]],[arr[i+1][j+2]],[arr[i+2][j]],[arr[i+2][j+1]],[arr[i+2][j+2]]).includes(4) && [arr[i][j]].concat([arr[i][j+1]],[arr[i][j+2]],[arr[i+1][j]],[arr[i+1][j+1]],[arr[i+1][j+2]],[arr[i+2][j]],[arr[i+2][j+1]],[arr[i+2][j+2]]).includes(5) && [arr[i][j]].concat([arr[i][j+1]],[arr[i][j+2]],[arr[i+1][j]],[arr[i+1][j+1]],[arr[i+1][j+2]],[arr[i+2][j]],[arr[i+2][j+1]],[arr[i+2][j+2]]).includes(6) && [arr[i][j]].concat([arr[i][j+1]],[arr[i][j+2]],[arr[i+1][j]],[arr[i+1][j+1]],[arr[i+1][j+2]],[arr[i+2][j]],[arr[i+2][j+1]],[arr[i+2][j+2]]).includes(7) && [arr[i][j]].concat([arr[i][j+1]],[arr[i][j+2]],[arr[i+1][j]],[arr[i+1][j+1]],[arr[i+1][j+2]],[arr[i+2][j]],[arr[i+2][j+1]],[arr[i+2][j+2]]).includes(8) [arr[i][j]].concat([arr[i][j+1]],[arr[i][j+2]],[arr[i+1][j]],[arr[i+1][j+1]],[arr[i+1][j+2]],[arr[i+2][j]],[arr[i+2][j+1]],[arr[i+2][j+2]]).includes(9)) {
//         return true;
//       }
//     }
    
    
  //   }
  // }
  



// isSolved(arr)

module.exports = isSolved;
