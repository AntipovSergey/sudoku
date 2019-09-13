// входящая строка
const incomeString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
// -------------------------------------

// создаем доску 
const parse = (string) => {
  let arr = string.split('');
  let board = []
    for (let i = 0; i < arr.length; i += 9) {
      board.push(arr.slice(i, i + 9))
    }
  return board
}
//------------------------------------

// первая координата недостающего числа
const findCoordinateH = () => {
  let board = parse(incomeString)
  let coordinate = [];
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] == '-') {
        coordinate.push(i, j)
        return coordinate;
      }
    }
  }
}
//-----------------------------------------

// поиск недостоющих цифр по

const horizon = () => {
  let numbers = ['1','2','3','4','5','6','7','8','9'] 
  let arrForSearch = parse(incomeString)[findCoordinateH()[0]]
  let possibleNum = []
  for (let i = 0; i < 9; i += 1) {
    if(arrForSearch.includes(numbers[i])){
      continue
    }
    else{
      possibleNum.push(numbers[i])
    }
  }
  return possibleNum
}



//-----------------------------------------

// поиск первого вхождения по вертикали

let arr=[1]
