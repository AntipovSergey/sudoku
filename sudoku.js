// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function transformPuzzle(puzzleString) {
  let arr = puzzleString.split('');
  let wholePizza = [];

  for (let i = 0; i < 9; i++) {
    let pizzaSlice = [];
    for (let j = 0; j < 9; j++) {
      pizzaSlice.push(arr.shift());
    }
    wholePizza.push(pizzaSlice);
  }
  return wholePizza;
}

function replaceEmpty(board) {
  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
      if (board[i][j] === '-') board[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
  }
}

let board = [[5, '-' , 0, 0, 0, 0, 0, 1, 2],
[0, [1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 0, 0, 0, 0, 0, 0],
[0, 6, 0, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]];

replaceEmpty(board);
console.log(board); 


function testSquare(x, y, el, board) {
  el = board[x][y];
  if (Array.isArray(el)) {
    let square = [];
    if (x < 3 && y < 3) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          square.push(board[i][j]);
        }
      }
    }

    if (x < 3 && y < 6 && y >= 3) {
      for (let i = 0; i < 3; i++) {
        for (let j = 3; j < 6; j++) {
          square.push(board[i][j]);
        }
      }
    }

    if (x < 3 && y < 9 && y >= 6) {
      for (let i = 0; i < 3; i++) {
        for (let j = 6; j < 9; j++) {
          square.push(board[i][j]);
        }
      }
    }


    if (x < 6 && x >= 3 && y < 3) {
      for (let i = 3; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
          square.push(board[i][j]);
        }
      }
    }

    if (x < 6 && x >= 3 && y < 6 && y >= 3) {
      for (let i = 3; i < 6; i++) {
        for (let j = 3; j < 6; j++) {
          square.push(board[i][j]);
        }
      }
    }

    if (x < 6 && x >= 3 && y < 9 && y >= 6) {
      for (let i = 3; i < 6; i++) {
        for (let j = 6; j < 9; j++) {
          square.push(board[i][j]);
        }
      }
    }

    if (x < 9 && x >= 6 && y < 3) {
      for (let i = 6; i < 9; i++) {
        for (let j = 0; j < 3; j++) {
          square.push(board[i][j]);
        }
      }
    }

    if (x < 9 && x >= 6 && y < 6 && y >= 3) {
      for (let i = 6; i < 9; i++) {
        for (let j = 3; j < 6; j++) {
          square.push(board[i][j]);
        }
      }
    }

    if (x < 9 && x >= 6 && y < 9 && y >= 6) {
      for (let i = 6; i < 9; i++) {
        for (let j = 6; j < 9; j++) {
          square.push(board[i][j]);
        }
      }
    }
    for (let i = 0; i < el.length; i++) {
      
      if (square.includes(el[i])) {  el[i] = "d";}
    }
    board[x][y] = el.filter((elem, i) => elem !== 'd')
  }


}


function solve(board) {


  for (let i = 0; i < 9; i++) {

    for (let j = 0; j < 9; j++) {

      testVertical(i, j, board);

      testHorizontal(i, j, board);
      testSquare(i, j, board);


    }

  }


}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.



function isSolved(board) {
  let etalon = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let copy1 = [];
  for (let i = 0; i < board.length; i++) {
    copy1.push(board[i].slice());
  }

  let column = [];
  let square = [];
  let k = 0;
  square[k] = [];

  for (i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j++) {
      square[k].push(board[j][i], board[j][i + 1], board[j][i + 2]);
      if (square[k].length >= 9) { k++; square[k] = []; }
    }
  }
  square.pop();
  for (let prop of square) {
    prop.sort();
    for (let i = 0; i < 9; i++) {
      if (prop[i] != etalon[i]) {
        return 'Try again!';
      }

    }
  }



  for (let propp of copy1) {
    propp.sort();
    for (let i = 0; i < 9; i++) {
      if (propp[i] != etalon[i]) {
        return 'Try again!';
      }

    }

  }


  for (let i = 0; i < 9; i++) {
    column[i] = [];
    board.forEach(a => column[i].push(a[i]));
    column[i].sort();

  }


  for (let prop of column) {
    for (let i = 0; i < 9; i++) {
      if (prop[i] != etalon[i]) {
        return 'Try again!';
      }


    }
  }

  return 'Finished!';
}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  transformPuzzle: transformPuzzle,
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}



