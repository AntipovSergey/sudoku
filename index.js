/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
window.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  // Takes a board as a string in the format
  // you see in the puzzle file. Returns
  // something representing a board after
  // your solver has tried to solve it.
  // How you represent your board is up to you!

  // puzzles = [
  //   '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--',
  //   '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3',
  //   '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9',
  //   '-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-',
  //   '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--',
  //   '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----',
  //   '-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--',
  //   '-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7',
  //   '----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----',
  //   '3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--',
  //   '3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-',
  //   '-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-',
  //   '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--',
  //   '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------',
  //   '---------------------------------------------------------------------------------',
  // ];
  function solveSud(board) {
    const size = 9;
    const boxSize = 3;

    const findEmpty = (board) => {
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          if (board[r][c] === '-') {
            return [r, c];
          }
        }
      }
      return null;
    };

    const validate = (num, pos, board) => {
      const [r, c] = pos;
      for (let i = 0; i < size; i++) {
        if (board[i][c] === num && i !== r) {
          return false;
        }
      }
      for (let i = 0; i < size; i++) {
        if (board[r][i] === num && i !== c) {
          return false;
        }
      }

      const boxRow = Math.floor(r / boxSize) * boxSize;
      const boxCol = Math.floor(c / boxSize) * boxSize;

      for (let i = boxRow; i < boxRow + boxSize; i++) {
        for (let j = boxCol; j < boxCol + boxSize; j++) {
          if (board[i][j] === num && i !== r && j !== c) {
            return false;
          }
        }
      }
      return true;
    };

    const solve = () => {
      const currPos = findEmpty(board);
      if (currPos === null) {
        return true;
      }
      for (let i = 1; i < size + 1; i++) {
        const currNum = i.toString();
        const isValid = validate(currNum, currPos, board);
        if (isValid) {
          const [x, y] = currPos;
          board[x][y] = currNum;

          if (solve()) {
            return true;
          }
          board[x][y] = '-';
        }
      }
      return false;
    };
    solve();
    return board;
  }

  // Takes in a board in some form and
  // returns a String that's well formatted
  // for output to the screen.
  // The input board will be in whatever
  // form `solve` returns.

  const unsolvedArr = [
    ['5', '3', '-', '-', '7', '-', '-', '-', '-'],
    ['6', '-', '-', '1', '9', '5', '-', '-', '-'],
    ['-', '9', '8', '-', '-', '-', '-', '6', '-'],
    ['8', '-', '-', '-', '6', '-', '-', '-', '3'],
    ['4', '-', '-', '8', '-', '3', '-', '-', '1'],
    ['7', '-', '-', '-', '2', '-', '-', '-', '6'],
    ['-', '6', '-', '-', '-', '-', '2', '8', '-'],
    ['-', '-', '-', '4', '1', '9', '-', '-', '5'],
    ['-', '-', '-', '-', '8', '-', '-', '7', '9'],
  ];
  // const solvedArr = [
  //   ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  //   ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  //   ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  //   ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  //   ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  //   ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  //   ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  //   ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  //   ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  // ]

  const size = 9;
  function prettyBoard() {
    //Заполнение грида ячейками
    const grid = document.querySelector('.grid');
    for (let i = 0; i < size * size; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      grid.appendChild(cell);
    }
    const cells = document.querySelectorAll('.cell');
    //Функция заполнения ячеек начальными значениями, n - номер нерешенного массива
    function pushUnsolved(unsolvedArr) {
      const data = unsolvedArr.flat(1);
      for (let i = 0; i < cells.length; i++) {
        if (data[i] !== '-') cells[i].textContent = data[i];
        else cells[i].classList.add('cell-unsolved');
      }
    }

    const select = document.querySelector('#select');
    //Обработчик селекта - по клику вызывает функцию заполнения поля начальными значениями
    select.addEventListener('click', (event) => {
      event.preventDefault();
      // const options = select.querySelectorAll('option');
      // const count = options.length;
      if (select.value === '') {
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('cell-solved')) cells[i].classList.remove('cell-solved');
          if (cells[i].classList.contains('cell-unsolved')) cells[i].classList.remove('cell-unsolved');
          cells[i].textContent = '';
        }
      } else {
        // const n = select.value;
        pushUnsolved(unsolvedArr);
        console.table(unsolvedArr);
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('cell-solved')) {
            cells[i].classList.remove('cell-solved');
            cells[i].textContent = '';
          }
        }
      }
    });

    // Обработчик селекта - по изменению вызывает функцию заполнения поля начальными значениями
    // select.addEventListener('change', (event) => {
    //   event.preventDefault();
    //   if(select.value === '') {
    //     for (let i = 0; i < cells.length; i++) {
    //       if (cells[i].classList.contains('cell-solved')) cells[i].classList.remove('cell-solved');
    //       if (cells[i].classList.contains('cell-unsolved')) cells[i].classList.remove('cell-unsolved');
    //       cells[i].textContent = '';
    //     }
    //   } else {
    //     pushUnsolved(unsolvedArr);
    //     for (let i = 0; i < cells.length; i++) {
    //       if (cells[i].classList.contains('cell-solved')) {
    //         cells[i].classList.remove('cell-solved');
    //         cells[i].textContent = '';
    //       }
    //     }
    //   }
    // })
    //Функция заполнения ячеек конечными значениями
    function pushSolved(solvedArr) {
      const data = solvedArr.flat(1);
      for (let i = 0; i < cells.length; i++) {
        if (!cells[i].textContent) {
          cells[i].textContent = data[i];
          cells[i].classList.add('cell-solved');
        }
      }
    }
    //Обработчик кнопки - по клику вызывает функцию решения и заполняет поле конечными значениями
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      pushSolved(solveSud(unsolvedArr));
    });
  }
  prettyBoard();
});

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
