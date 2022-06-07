// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

const sudokuPuzzles = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'.split('')

// Делаем массив 9х9 
function sudokuArr() {
  let board = []
  
  for (let j=0; j < sudokuPuzzles.length; j+=9) {
    let arr = []
    for (let i = j; i < j + 9 ; i++) {
      arr.push(sudokuPuzzles[i])
    }
    board.push(arr)
  }

  return board
}

// Рандом от 1 до 9
function generateValue(min = 1, max = 10) {
  return Math.floor(Math.random() * (max - min) + min)
}

// Массив '-'.length от 1 до 9
function genArrValue() {
    let genArr = []
    let checkEmpty = []

    for (let i = 0; i < sudokuPuzzles.length; i++) {
        if (sudokuPuzzles[i] == '-') {
            checkEmpty.push(sudokuPuzzles[i])
        }
    }

    for (let i = 0; i < checkEmpty.length; i++) {
        genArr.push(generateValue())
    }

    return genArr
}

// Подставляет рандомные значения
function solve(board) {

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const arrNum = generateValue()
            if (board[i][j] == '-') {
                board[i][j] = arrNum
            } else {
                board[i][j] = +board[i][j]
            }
        }
    }

  return board
}

// Проверяет на валид
function validSolution(board) {
    //идем по строке
    for (let i = 0; i < board.length; i++) {
        // console.log(board[i])
        const uniqArray = board[i].filter((el, index) => index === board[i].indexOf(el))
        if (uniqArray.length < board[i].length) {
            return false
        }
    }
    //идем по столбцу
    for (let i = 0; i < board.length; i++) {
        let tableArr = []
        tableArr.push(board[i][0])
        const uniqArray = tableArr.filter((el, index) => index === tableArr.indexOf(el))
        if (uniqArray.length < tableArr.length) {
            return false
        }
    }
    // идем по квадрату 3х3
    let subArr = []

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j += 3) {
            subArr.push(board[i].slice(j, j + 3))
        }
    }
    // console.log(subArr)
    
    let newArr = []
    
    for (let i = 0; i < subArr.length; i++) {
        // let count = 2
        newArr.push([subArr[i], subArr[i + 3], subArr[i + 6]])
        if (i >= 20) {
            break
        }
    }
    
    let newMassive = []
    newMassive.push(newArr[0].slice(0,3))
    newMassive.push(newArr[1].slice(0,3))
    newMassive.push(newArr[2].slice(0,3))
    newMassive.push(newArr[9].slice(0,3))
    newMassive.push(newArr[10].slice(0,3))
    newMassive.push(newArr[11].slice(0,3))
    newMassive.push(newArr[18].slice(0,3))
    newMassive.push(newArr[19].slice(0,3))
    newMassive.push(newArr[20].slice(0,3))
    
    // console.log(newMassive)
    
    let testM = []
    
    for (let i = 0; i < newMassive.length; i++){
        for (let j = 0; j < newMassive[i].length; j++){
            // console.log(newMassive[i][j])
            for (let k = 0; k < newMassive[i][j].length; k++) {
                // console.log(newMassive[i][j][k])
                testM.push(newMassive[i][j][k])
            }
        }
    }
    
    // console.log(testM)
    
    let lastM = []
    
    for (let i = 0; i < testM.length; i = i + 8) {
        lastM.push(testM.slice(i, i + 9))
        i++
    }
    // console.log(lastM)
    
    for (let i = 0; i < lastM.length; i++) {
        const uniqArray = lastM[i].filter((el, index) => index === lastM[i].indexOf(el))
        if (uniqArray.length < lastM[i].length) {
            return false
        }
    }

    return true
}

// Пытается решить
function trySolve() {

  for (let i = 0; i < 99999; i++) {
    let solved = solve(sudokuArr())
    if (validSolution(solved) == true) {
      return solved
    }
  }

  return 'НИЧЕГО НЕ НАШЛО!'
  
}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  let arr = board.split('');
  arr.splice(0, 0, '\n');
  arr.splice(10, 0, '\n');
  arr.splice(20, 0, '\n');
  arr.splice(30, 0, '\n');
  arr.splice(40, 0, '\n');
  arr.splice(50, 0, '\n');
  arr.splice(60, 0, '\n');
  arr.splice(70, 0, '\n');
  arr.splice(80, 0, '\n');
  const result = arr.join(' ');
  return result;
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
