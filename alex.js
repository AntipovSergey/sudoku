let startPuzzle1 =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

let startPuzzle2 =
  "--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3";
let startPuzzle3 =
  "29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9";
let startPuzzle4 =
  "-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-";
let startPuzzle5 =
  "---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----";

function solveSudoku(startPuzzle) {
  let board = startPuzzle.split("").reduce((acc, val, i) => {
    let tmp = Math.floor(i / 9);
    if (!Array.isArray(acc[tmp])) {
      acc[tmp] = [val];
    } else {
      acc[tmp].push(val);
    }
    return acc;
  }, []);

  // console.table(board);

  let possible = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Вычисление горизонателей

  let solutions = [];

  for (let globalI = 0; globalI < board.length; globalI++) {
    for (let globalJ = 0; globalJ < board.length; globalJ++) {
      let horizontal = [];

      for (let i = 0; i < board.length; i++) {
        horizontal.push(board[globalI][i]);
      }

      let horizPossible;
      horizPossible = possible.filter((el) => !horizontal.includes(el));
      // console.table(horizontal);
      // console.table(horizPossible);

      // Вычисление вертикалей

      let vertical = [];

      for (let i = 0; i < board[0].length; i++) {
        vertical.push(board[i][globalJ]);
      }

      let vertPossible;
      vertPossible = possible.filter((el) => !vertical.includes(el));
      // console.table(vertical);
      // console.table(vertPossible);

      // Вычисление квадрата 3х3

      let square = [];

      for (
        let i = 0 + Math.floor(globalI / 3) * 3;
        i < 3 + Math.floor(globalI / 3) * 3;
        i++
      ) {
        for (
          let j = 0 + Math.floor(globalJ / 3) * 3;
          j < 3 + Math.floor(globalJ / 3) * 3;
          j++
        ) {
          square.push(board[i][j]);
        }
      }

      // console.table(square);
      let squarePossible;
      squarePossible = possible.filter((el) => !square.includes(el));
      // console.table(squarePossible);

      let selectedPossible = [];

      let allPossible = vertPossible.concat(horizPossible, squarePossible);
      for (let i = 0; i < possible.length; i++) {
        if (allPossible.filter((el) => el === possible[i]).length === 3) {
          selectedPossible.push(possible[i]);
        }
      }

      solutions.push(selectedPossible);
      if (selectedPossible.length === 1 && board[globalI][globalJ] === "-")
        board[globalI][globalJ] = selectedPossible[0];
    }
  }
  return board.flat().join("");
}

// if (board.flat().includes("-"));
function solvedAllSudoku(puzzle) {
  let preBoard = solveSudoku(puzzle);
  if (preBoard.includes("-")) {
    return solvedAllSudoku(preBoard);
  }
  return preBoard;
}

function prettyBoard(startPuzzleeee) {
  let board = startPuzzleeee.split("").reduce((acc, val, i) => {
    let tmp = Math.floor(i / 9);
    if (!Array.isArray(acc[tmp])) {
      acc[tmp] = [val];
    } else {
      acc[tmp].push(val);
    }
    return acc;
  }, []);

  console.table(board);
}

// prettyBoard(startPuzzle2)

let notPrettyPuzzle = solvedAllSudoku(startPuzzle1);

prettyBoard(startPuzzle1);
prettyBoard(notPrettyPuzzle);

// console.table(solutions);

// let horizontal = [];

// for (let i = 0; i < board.length; i++) {
//   horizontal.push(board[4][i]);
// }

// let horizPossible;
// horizPossible = possible.filter((el) => !horizontal.includes(el));
// console.table(horizontal);
// console.table(horizPossible);

// // Вычисление вертикалей

// let vertical = [];

// for (let j = 0; j < board[0].length; j++) {
//   vertical.push(board[j][8]);
// }

// let vertPossible;
// vertPossible = possible.filter((el) => !vertical.includes(el));
// console.table(vertical);
// console.table(vertPossible);

// // Вычисление квадрата 3х3

// let square = [];

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     square.push(board[i][j]);
//   }
// }

// console.table(square);
// let squarePossible;
// squarePossible = possible.filter((el) => !square.includes(el));
// console.table(squarePossible);

// let tmp1 = [];

// let allPossible = vertPossible.concat(horizPossible, squarePossible);
// for (let i = 0; i < possible.length; i++) {
//   if (allPossible.filter((el) => el === possible[i]).length === 3) {
//     tmp1.push(possible[i]);
//   }
// }
// console.log(allPossible);
// console.log(tmp1);
