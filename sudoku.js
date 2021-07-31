// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!



function allFull(board) {
 for (let index = 0; index < array.length; index++) {
   const element = array[index];
   
 }
}

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
  for(let item of wholePizza) {
    for (let k = 0; k < item.length; k++) {
      if(typeof item[k] == '-') ; 
      else {
        item[k] = +item[k];
      }
    }
  }
  return wholePizza;
}

function replaceEmpty(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (isNaN(board[i][j])) board[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
  }
}



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

      if (square.includes(el[i])) { el[i] = "d"; }
    }
    board[x][y] = el.filter((elem, i) => elem !== 'd')
  }


}


function testHorizontal(x, y, el, arr) {
  el = arr[x][y];
  if (Array.isArray(el)) {
    // let possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < el.length; j++) {
        if (el[j] === arr[x][i]) el[j] = 'd';
      }
    }
    arr[x][y] = el.filter(el => el !== 'd');
  }
}

function testVert(x, y, el, arr) {
  el = arr[x][y];
  if (Array.isArray(el)) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < el.length; j++) {
        if (el[j] === arr[i][y]) el[j] = 'd'
      }

    }
    arr[x][y] = el.filter(el => el !== 'd');


  }
}

function testBoard(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 9; j++) {
      if(Array.isArray(arr[i][j]) && arr[i][j].length > 1) return false;
    }
  }
  return true;
}

function changeOne(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < 9; j++) {
      if(arr[i][j].length === 1) {
        arr[i][j] = arr[i][j][0];
      }
    }
  }
}

function solve(board) {
  replaceEmpty(board);
  let k = 0;
while(k < 10000) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      testVert(i, j, board[i][j], board);
      testHorizontal(i, j, board[i][j], board);
      testSquare(i, j, board[i][j], board);
    }
  }
  k++;
  changeOne(board);
} 
return board;
   
}

function hardSolve (board) {
 
 for (let i = 0; i < board.length; i++) {
   for(let j = 0; j < 9; j++) {
if(Array.isArray(board[i][j]) && board[i][j].length == 2) {
  if(Math.round(Math.random())) board[i][j].shift();
  else board[i][j].pop();
}
solve(board);  
   }
 }

}

let oneCase = '----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----'
onceCase = transformPuzzle(oneCase);
let board = onceCase;


let p = 10;
outer: while(p > 0) {
let copy1 = [];
  for (let i = 0; i < board.length; i++) {
    copy1.push(board[i].slice());
  }

  solve(copy1); 
  hardSolve(copy1);  
  if(isSolved(copy1)) {
    browserBoard(copy1);
    alert('Yeah, Baby! =)');
    break outer;
  }
  p--;
}


/* let superCycles = 2;
while(superCycles) {
  
solve(copy1);
hardSolve(copy1);
superCycles--;
if(isSolved(copy1)) break; 
}
browserBoard(copy1);
if(isSolved(copy1)) alert('Yeah, Baby! =)))))') */





// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns



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
/*         console.log('square!!!!!!!!!!!', square)
 */        return false;
      }

    }
  }



  for (let propp of copy1) {
    propp.sort();
    for (let i = 0; i < 9; i++) {
      if (propp[i] != etalon[i]) {
        console.log('horizontal!!!!!!!!!!!!!', propp);
        return false;
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
        console.log('vertical!!!!!!!!!!!!', prop)
        return false;
      }


    }
  }

  return true;
}


function browserBoard(board) {
  let table = document.getElementById("table");
        let arr = board;
 
        for (let i = 0; i < arr.length; i++) {
            let tr = document.createElement("tr");  
            for (let j = 0; j < arr[i].length; j++) {
                let td = document.createElement("td");
                if(i <= 2) {
                  if(j <= 2) { td.style.background = "grey"; } else if (j >= 6) {
                    td.style.background = "midnightblue";
                  } else
                  td.style.background = "white";
                }
                if(i > 2 && i < 6) { 
                 if(j > 2 && j < 6) { td.style.background = "darkcyan"; } else if(j >= 6) {
                   td.style.background = "orange";
                 } else
                  td.style.background = "blue"; }
                if(i >= 6 && i < 9) {
                  if(j > 2 && j < 6) { td.style.background = "red"; } else if(j >= 6) {
                    td.style.background = "maroon";
                  } else
                td.style.background = "yellow"; 
                }
                  
                
                td.textContent = arr[i][j];
                tr.append(td);
            }
            table.append(tr);
        }
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



