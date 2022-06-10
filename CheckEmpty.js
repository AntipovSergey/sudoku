let arr = [
[1,0,5],     [8,0,2],     [0,0,0],
[0,9,0],     [0,7,6],     [4,0,5],
[2,0,0],     [4,0,0],     [8,1,9],
[0,1,9],     [0,0,7],     [3,0,6],
[7,6,2],     [0,8,3],     [0,9,0],
[0,0,0],     [0,6,1],     [0,5,0],
[0,0,7] ,    [6,0,0] ,    [0,3,0],
[4,3,0],     [0,2,0] ,    [5,0,1],
[6,0,0],     [3,0,8],     [9,0,0]
]
// --------------------------------------HORISONTAL--------------------------------------

let arrH0 = `${arr[0]},${arr[1]},${arr[2]}`.split(',')
let arrH1 = `${arr[3]},${arr[4]},${arr[5]}`.split(',')
let arrH2 = `${arr[6]},${arr[7]},${arr[8]}`.split(',')
let arrH3 = `${arr[9]},${arr[10]},${arr[11]}`.split(',')
let arrH4 = `${arr[12]},${arr[13]},${arr[14]}`.split(',')
let arrH5 = `${arr[15]},${arr[16]},${arr[17]}`.split(',')
let arrH6 = `${arr[18]},${arr[19]},${arr[20]}`.split(',')
let arrH7 = `${arr[21]},${arr[22]},${arr[23]}`.split(',')
let arrH8 = `${arr[24]},${arr[25]},${arr[26]}`.split(',')


function horisontalEmptyVariants (arrH) {
let resArrH = []
for (let i = 0 ; i < arrH.length ; i++){
  if (arrH[i] !== '0') {
    resArrH.push(arrH[i])
   }
  }
return resArrH
}

let fullArrH = [horisontalEmptyVariants(arrH0),
  horisontalEmptyVariants(arrH1),
  horisontalEmptyVariants(arrH2),
  horisontalEmptyVariants(arrH3),
  horisontalEmptyVariants(arrH4),
  horisontalEmptyVariants(arrH5),
  horisontalEmptyVariants(arrH6),
  horisontalEmptyVariants(arrH7),
  horisontalEmptyVariants(arrH8)] // массив из существующих чисел каждой горизонтали

console.log('Массив существующих чисел в горизонталях:\n', horisontalEmptyVariants(fullArrH));


// --------------------------------------VERTICALAL--------------------------------------

let arrV0 = `${arr[0][0]},${arr[3][0]},${arr[6][0]},${arr[9][0]},${arr[12][0]},${arr[15][0]},${arr[18][0]},${arr[21][0]},${arr[24][0]}`.split(',')
let arrV1 = `${arr[0][1]},${arr[3][1]},${arr[6][1]},${arr[9][1]},${arr[12][1]},${arr[15][1]},${arr[18][1]},${arr[21][1]},${arr[24][1]}`.split(',')
let arrV2 = `${arr[0][2]},${arr[3][2]},${arr[6][2]},${arr[9][2]},${arr[12][2]},${arr[15][2]},${arr[18][2]},${arr[21][2]},${arr[24][2]}`.split(',')
let arrV3 = `${arr[1][0]},${arr[4][0]},${arr[7][0]},${arr[10][0]},${arr[13][0]},${arr[16][0]},${arr[19][0]},${arr[22][0]},${arr[25][0]}`.split(',')
let arrV4 = `${arr[1][1]},${arr[4][1]},${arr[7][1]},${arr[10][1]},${arr[13][1]},${arr[16][1]},${arr[19][1]},${arr[22][1]},${arr[25][1]}`.split(',')
let arrV5 = `${arr[1][2]},${arr[4][2]},${arr[7][2]},${arr[10][2]},${arr[13][2]},${arr[16][2]},${arr[19][2]},${arr[22][2]},${arr[25][2]}`.split(',')
let arrV6 = `${arr[2][0]},${arr[5][0]},${arr[8][0]},${arr[11][0]},${arr[14][0]},${arr[17][0]},${arr[20][0]},${arr[23][0]},${arr[26][0]}`.split(',')
let arrV7 = `${arr[2][1]},${arr[5][1]},${arr[8][1]},${arr[11][1]},${arr[14][1]},${arr[17][1]},${arr[20][1]},${arr[23][1]},${arr[26][1]}`.split(',')
let arrV8 = `${arr[2][2]},${arr[5][2]},${arr[8][2]},${arr[11][2]},${arr[14][2]},${arr[17][2]},${arr[20][2]},${arr[23][2]},${arr[26][2]}`.split(',')

function verticalEmptyVariants (arrV) {
  let resArrV = []
  for (let i = 0 ; i < arrV.length ; i++){
    if (arrV[i] !== '0') {
      resArrV.push(arrV[i])
     }
    }
  return resArrV
}

let fullArrV = [verticalEmptyVariants(arrV0),
  verticalEmptyVariants(arrV1),
  verticalEmptyVariants(arrV2),
  verticalEmptyVariants(arrV3),
  verticalEmptyVariants(arrV4),
  verticalEmptyVariants(arrV5),
  verticalEmptyVariants(arrV6),
  verticalEmptyVariants(arrV7),
  verticalEmptyVariants(arrV8)] // массив из существующих чисел каждой вертикали

  console.log('Массив существующих чисел в вертикалях:\n',fullArrV);



// --------------------------------------SQUARES--------------------------------------

let arrSqr0 = `${arr[0]},${arr[3]},${arr[6]}`.split(',')
let arrSqr1 = `${arr[1]},${arr[4]},${arr[7]}`.split(',')
let arrSqr2 = `${arr[2]},${arr[5]},${arr[8]}`.split(',')
let arrSqr3 = `${arr[9]},${arr[12]},${arr[15]}`.split(',')
let arrSqr4 = `${arr[10]},${arr[13]},${arr[16]}`.split(',')
let arrSqr5 = `${arr[11]},${arr[14]},${arr[17]}`.split(',')
let arrSqr6 = `${arr[18]},${arr[21]},${arr[24]}`.split(',')
let arrSqr7 = `${arr[19]},${arr[22]},${arr[25]}`.split(',')
let arrSqr8 = `${arr[20]},${arr[23]},${arr[26]}`.split(',')

function squareEmptyVariants (arrSqr) {
  let resArrSqr = []
  for (let i = 0 ; i < arrSqr.length; i++){
    if (arrSqr[i] !== '0') {
      resArrSqr.push(arrSqr[i])
     } 
    }
  return resArrSqr
}

let fullArrSqr = [squareEmptyVariants(arrSqr0), 
  squareEmptyVariants(arrSqr1),
  squareEmptyVariants(arrSqr2), 
  squareEmptyVariants(arrSqr3), 
  squareEmptyVariants(arrSqr4), 
  squareEmptyVariants(arrSqr5), 
  squareEmptyVariants(arrSqr6), 
  squareEmptyVariants(arrSqr7), 
  squareEmptyVariants(arrSqr8)] // массив из существующих чисел каждого квадрата

console.log('Массив существующих чисел в квадратах:\n',fullArrSqr)  


module.exports = {fullArrH, fullArrV, fullArrSqr}
