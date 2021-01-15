let board = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
// let board = --5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3
// let board = 29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9
// let board = -8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-
// let board = 6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--
// let board = ---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----
// let board = -3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--
// let board = -96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7
// let board = ----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----
// let board = 3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--
// let board = 3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-
// let board = -2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-
// let board = --7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--
// let board = ----------2-65-------18--4--9----6-4-3---57-------------------73------9----------
// let board = ---------------------------------------------------------------------------------

function prettyBoard(board) {
  const boardReplacedWithZero = board.replace(/\-/gm, 0)

  const addComma = boardReplacedWithZero.replace(/.{9}/gm, function (value, index) {
    return value + ','
  })

  const splited = addComma.split(',')

  let arrSudoku = [
    [...splited[0]],
    [...splited[1]],
    [...splited[2]],
    [...splited[3]],
    [...splited[4]],
    [...splited[5]],
    [...splited[6]],
    [...splited[7]],
    [...splited[8]]
  ]
  for (let i = 0; i < arrSudoku.length; i += 1) {
    for (let j = 0; j < arrSudoku[i].length; j += 1) {
      arrSudoku[i][j] = Number(arrSudoku[i][j])
    }    
  }
  return arrSudoku
}

const result = prettyBoard(board)
console.log(result);

function solve(arrSudoku) {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (arrSudoku[i][j] === 0) {
        for (let k = 1; k < 9; k += 1) {
          // if (isSolved(arrSudoku, i, j, k)) {
          //   boardString[i][j] = k
          // } else {
            // arrSudoku[i][j] = '0'
          // }
          if (true) {
            arrSudoku[i][j] = k
            if (solve(arrSudoku)){
              return arrSudoku
            }
          }
        }
      }
    }
  }
  return arrSudoku
}

const result2 = solve(prettyBoard(board))

console.log(result2);
