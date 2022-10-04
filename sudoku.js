
const str = [
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--',
  '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3',
  '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9',
  '-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-',
  '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--',
  '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----',
  '-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--',
  '-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7',
  '----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----',
  '3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--',
  '3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-',
  '-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-',
  '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--',
  '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------'
  ];

const puzzleBoard = document.querySelector('#puzzle');
const solveButton = document.querySelector('#solve-button');
const squares = 81;
const submission =[];

for (let i = 1; i < squares + 1; i ++) {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'text');
  inputElement.className = `allInput c${i}`;
  puzzleBoard.appendChild(inputElement);
};

const joinValues = () => {
  const inputs = document.querySelectorAll('input'); 
  inputs.forEach(input => {
    if(input.value) {
      submission.push(input.value);
    } else {
      submission.push('-');
    }
  });
};



solveButton.addEventListener('click', joinValues);
solveButton.addEventListener('click', solveB);
solveButton.addEventListener('click', () => {
    let table1 = document.querySelector('.table1');
    table1.style.display = 'block';
});
const solveButton2 = document.querySelector('#solve-button2');
solveButton2.addEventListener('click', solveB2);


function solveB2 () {
  
  let data = str[Math.floor(Math.random() * 13)];

  let allInput = document.querySelectorAll('.allInput');
  let body = document.querySelector('#body');

  let newbutton = document.createElement('button');
  newbutton.setAttribute('id', 'solve-button3');
  newbutton.addEventListener('click', solveB3);
  newbutton.className = 'button3';
  newbutton.innerText = 'Посмотреть решение';
  body.appendChild(newbutton);
  
  let newbutton2 = document.createElement('button');
  newbutton2.setAttribute('id', 'solve-button4');
  newbutton2.addEventListener('click', () => window.location.reload());
  newbutton2.className = 'button4';
  newbutton2.innerText = 'Начать сначала';
  body.appendChild(newbutton2);
  
  let butgeneration = document.querySelector('#solve-button2');
  let but = document.querySelector('#solve-button');
  butgeneration.remove()
  but.remove();

  for (let i = 0; i < squares; i ++) {
    if (data[i] ==='-') {
      allInput[i].value = ' ';
    } else {
      allInput[i].value = data[i]; 
    }
  };
  
  return data;
}

function solveB3 () {
  
  let allInput = document.querySelectorAll('.allInput')
  let newArr = [];
  let noviyMassiv = [];
  for (let i = 0; i < allInput.length; i ++) {
    if (allInput[i].value === ' ') {
      newArr.push('-');
    } else {
      newArr.push(allInput[i].value);
    }
  };

  let size = 9; 
  for (let i = 0; i < Math.ceil(newArr.length/size); i++){
    noviyMassiv[i] = newArr.slice((i*size), (i*size) + size);
  }

  solveSudoku(noviyMassiv);
  
  let del = document.querySelector('.button3');
  del.remove();

  let newTable = [...noviyMassiv.flat()];
  let newAllInput = document.querySelectorAll('.allInput');

  for (let i = 0; i < newTable.length; i ++) {
    newAllInput[i].value = `${newTable[i]}`;
  }

  return newTable;
}

function solveB () {
  let data = submission;
  let table = [];
  let size = 9; 
  for (let i = 0; i < Math.ceil(data.length/size); i++){
      table[i] = data.slice((i*size), (i*size) + size);
  }

  solveSudoku(table);

  let div = document.querySelector('#puzzle');
  let but = document.querySelector('#solve-button');
  div.remove();
  but.remove();

  let newTable = [...table.flat()];
  let newPuzzleBoard = document.createElement('div');
  let body = document.querySelector('#body');
  body.appendChild(newPuzzleBoard);
  newPuzzleBoard.className = 'newPuzzle';
  let td = document.querySelectorAll('td');

  let newbutton2 = document.createElement('button');
  newbutton2.setAttribute('id', 'solve-button4');
  newbutton2.addEventListener('click', () => window.location.reload());
  newbutton2.className = 'button4';
  newbutton2.innerText = 'Начать с начала';
  body.appendChild(newbutton2);

  let gener = document.querySelector('.button2');
  gener.remove();

  for (let i = 0; i < 81; i ++) {
      td[i].innerText = `${newTable[i]}`;
  }
 
  return newTable;
}

let solveSudoku = function (board) {
  const size = 9;
  const boxsize = 3;
  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  }

  // проверка на валидность
  const validate = (num, pos, board) => {
    const [r, c] = pos;

    // проверка строкт
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }
    // проверка столбцов
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    // проверка кубов
    const boxRow = Math.floor(r / boxsize) * boxsize
    const boxCol = Math.floor(c / boxsize) * boxsize

    for (let i = boxRow; i < boxRow + boxsize; i++) {
      for (let j = boxCol; i < boxRow + boxsize; i++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }

    }
    return true;

  }

  // подставление цифр
  const solve = () => {
    const currPos = findEmpty(board)

    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString()
      const isValid = validate(currNum, currPos, board)

      if (isValid) {
        const [x, y] = currPos
        board[x][y] = currNum

        if (solve()) {
          return true;
        }
        board[x][y] = '-'
      }
    }
    return false;
  }
  solve();
  return board;
}

// module.exports = {
//   solvee,
//   solveSudoku,

// };
