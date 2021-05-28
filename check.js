let tryArr = [
  [0, 1, 0, 3, 0, 0, 5, 7, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]

]


function freeDigits(yy, xx) {
  const base = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const result = []

  for (let index = 0; index < 9; index++) {
    const element = tryArr[yy][index]
    const element2 = tryArr[index][xx]
    if (element) {

      result.push(element)
    }

    if (element2) {

      result.push(element2)
    }

  }
  
//   result.forEach(el=>{
    
//     }

  
  
// }



console.log(freeDigits(0, 0));



function checkArr(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "" && arr.find(e => e !== x)) {
      arr[i] = x
      x++
        ;
    }

  }
  return arr
};

// console.log(checkArr(tryArr[0]))




//filter ((el) => el.age > 18)

// var array = [2, 5, 9];
// array.indexOf(2);     // 0
// array.indexOf(7);     // -1

    // for (let j = 0; j < arr[i].length; j++) {
    //   if (arr.find(e => e === 3)) {
    //     console.log(arr.indexOf(arr[i][j]));
    //   };


    // }
