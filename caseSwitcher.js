let num = '123456789'
let i1 = 1
let i2 = 1
let arr = [
  [
    1, 0, 5, 8, 0,
    2, 0, 0, 0
  ],
  [
    0, 9, 0, 0, 7,
    6, 4, 0, 5
  ],
  [
    2, 0, 0, 4, 0,
    0, 8, 1, 9
  ],
  [
    0, 1, 9, 0, 0,
    7, 3, 0, 6
  ],
  [
    7, 6, 2, 0, 8,
    3, 0, 9, 0
  ],
  [
    0, 0, 0, 0, 6,
    1, 0, 5, 0
  ],
  [
    0, 0, 7, 6, 0,
    0, 0, 3, 0
  ],
  [
    4, 3, 0, 0, 2,
    0, 5, 0, 1
  ],
  [
    6, 0, 0, 3, 0,
    8, 9, 0, 0
  ]
]

function horizontalVerticalCheck(arr, str, ind1, ind2) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i][ind2] !== 0) str = str.replace(arr[i][ind2], '');
      //strArr.splice(strArr.indexOf(arr[i][ind2]),1)
  }
  for (j = 0; j < arr.length; j++) {
    if (arr[ind1][j] !== 0) str = str.replace(arr[ind1][j], '');
      //strArr = strArr.splice(strArr.indexOf(arr[i][ind2]),1)
  }
  return str
}

function caseSwitcher(arr, num, i1, i2) {
  switch (search) {
    case (i1 < 3 && i2 < 3):
      function numerizer(num) {
        for (let i = 0; i <= 2; i++){
          for (let j = 0; j <= 2; j++){
            if (arr[i,j] !== 0){
              num = num.replace(arr[i,j],'')
            }
          }
        }
        return num
      }
        horizontalVerticalCheck(arr, num, 0, 0)
      break;

    case (3 < i1 < 6 && i2 < 3):
      function numerizer(num) {
        for (let i = 3; i <= 5; i++){
          for (let j = 0; j <= 2; j++){
            if (arr[i,j] !== 0){
              num = num.replace(arr[i,j],'')
            }
          }
        }
        return num
      }
        horizontalVerticalCheck(arr, num, 0, 0)
      break;
  
    case (6 < i1 <= 8 && i2 < 3):
      function numerizer(num) {
        for (let i = 5; i <= 8; i++){
          for (let j = 0; j <= 2; j++){
            if (arr[i,j] !== 0){
              num = num.replace(arr[i,j],'')
            }
          }
        }
        return num
      }
        horizontalVerticalCheck(arr, num, 0, 0)
      break;

    case (i1 < 3 && 3 < i2 < 6):
      for (let i = 0; i <= 2; i++){
        for (let j = 3; j <= 5; j++){
          if (arr[i,j] !== 0){
            num = num.replace(arr[i,j],'')
          }
        }
      }
      return num
        horizontalVerticalCheck(arr, num, 0, 0)
      break;

    case (3 < i1 < 6 && 3 < i2 < 6):
      for (let i = 3; i <= 5; i++){
        for (let j = 3; j <= 5; j++){
          if (arr[i,j] !== 0){
            num = num.replace(arr[i,j],'')
          }
        }
      }
      return num
        horizontalVerticalCheck(arr, num, 0, 0)
      break;

    case (6 < i1 <= 8 && 3 < i2 < 6):
      for (let i = 5; i <= 8; i++){
        for (let j = 3; j <= 5; j++){
          if (arr[i,j] !== 0){
            num = num.replace(arr[i,j],'')
          }
        }
      }
      return num
        horizontalVerticalCheck(arr, num, 0, 0)
      break;

    case (i1 < 3 && 6 < i2 <= 8):
      for (let i = 0; i <= 2; i++){
        for (let j = 5; j <= 8; j++){
          if (arr[i,j] !== 0){
            num = num.replace(arr[i,j],'')
          }
        }
      }
      return num
        horizontalVerticalCheck(arr, num, 0, 0)
      break;

    case (3 < i1 < 6 && 6 < i2 <= 8):
      for (let i = 2; i <= 5; i++){
        for (let j = 5; j <= 8; j++){
          if (arr[i,j] !== 0){
            num = num.replace(arr[i,j],'')
          }
        }
      }
      return num
        horizontalVerticalCheck(arr, num, 0, 0)
      break;

    case (6 < i1 < 9 && 6 < i2 <= 8):
      for (let i = 5; i <= 8; i++){
        for (let j = 5; j <= 8; j++){
          if (arr[i,j] !== 0){
            num = num.replace(arr[i,j],'')
          }
        }
      }
      return num
        horizontalVerticalCheck(arr, num, 0, 0)
      break;
    default: num;
      break;
  }
}
// let actualStr = arr.join('').split(',').join('').slice(0,9)
// let actualStrNoZeros = actualStr.replace(/\0/g, '')
// function horizontalVerticalCheck(arr, str, ind1, ind2) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i][ind2] !== 0) str = str.replace(arr[i][ind2], '');
//       //strArr.splice(strArr.indexOf(arr[i][ind2]),1)
//   }
//   for (j = 0; j < arr.length; j++) {
//     if (arr[ind1][j] !== 0) str = str.replace(arr[ind1][j], '');
//       //strArr = strArr.splice(strArr.indexOf(arr[i][ind2]),1)
//   }
//   return str

// }

console.log(actualStr);

