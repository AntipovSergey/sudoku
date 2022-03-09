/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
window.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();

  const puzzles = [
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
    '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------',
    '---------------------------------------------------------------------------------',
  ];

  // Define puzzle size
  const size = 9;

  // Decides puzzle

  function solveSud(board) {
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

  // Takes a board as a string in the format
  const unsolvedArr = (puzzles, n) => {
    const x = [];
    for (let i = 0; i < size; i++) {
      x.push(puzzles[n].slice(i * size, i * size + size).split(''));
    }
    return x;
  };

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
      // eslint-disable-next-line no-return-assign
      cells.forEach((el, i) => (data[i] !== '-' ? el.textContent = data[i] : el.classList.add('cell-unsolved')));
    }

    const select = document.querySelector('#select');
    //Обработчик селекта - по изменению вызывает функцию заполнения поля начальными значениями
    let puzzle = [];
    select.addEventListener('change', (event) => {
      event.preventDefault();
      cells.forEach((el) => (el.classList.contains('cell-solved') ? el.classList.remove('cell-solved') : el));
      cells.forEach((el) => (el.classList.contains('cell-unsolved') ? el.classList.remove('cell-unsolved') : el));
      // eslint-disable-next-line no-return-assign
      cells.forEach((el) => el.textContent = '');
      const n = select.value;
      if (!n) return false;
      puzzle = unsolvedArr(puzzles, n);
      pushUnsolved(puzzle);
      return puzzle;
    });

    //Обработчик селекта - по клику вызывает функцию заполнения поля начальными значениями
    select.addEventListener('click', (event) => {
      event.preventDefault();
      cells.forEach((el) => (el.classList.contains('cell-solved') ? el.classList.remove('cell-solved') : el));
      cells.forEach((el) => (el.classList.contains('cell-unsolved') ? el.classList.remove('cell-unsolved') : el));
      // eslint-disable-next-line no-return-assign
      cells.forEach((el) => el.textContent = '');
      const n = select.value;
      if (!n) return false;
      puzzle = unsolvedArr(puzzles, n);
      pushUnsolved(puzzle);
      return puzzle;
    });

    //Функция заполнения ячеек конечными значениями
    function pushSolved(solvedArr) {
      const data = solvedArr.flat(1);
      for (let i = 0; i < cells.length; i++) {
        if (!cells[i].textContent) {
          cells[i].textContent = data[i];
          cells[i].classList.add('cell-solved');
          cells[i].classList.remove('cell-unsolved');
        }
      }
    }
    //Обработчик кнопки - по клику вызывает функцию решения и заполняет поле конечными значениями
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const puzzleToSolve = JSON.parse(JSON.stringify(puzzle));
      pushSolved(solveSud(puzzleToSolve));
    });
  }
  prettyBoard();
});
