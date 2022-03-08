window.addEventListener('DOMContentLoaded', function (event) {

  // Takes a board as a string in the format
  // you see in the puzzle file. Returns
  // something representing a board after
  // your solver has tried to solve it.
  // How you represent your board is up to you!
  function solveSud(board) {
    const size = 9;
    const boxSize = 3;

    const findEmpty = (board) => {
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          if(board[r][c] === '-') {
              return [r,c];
          }
        }
      }
      return null;
    }

    const validate = (num, pos, board) => {
      const [r,c] = pos;

      //Check rows
      for (let i = 0; i < size; i++) {
        if (board[i][c] === num && i !== r) {
            return false;
        }
      }

      //Check cols
      for (let i = 0; i < size; i++) {
        if (board[r][i] === num && i !== c) {
            return false;
        }
      }

      //Check box
      const boxRow = Math.floor( r/boxSize ) * boxSize;
      const boxCol = Math.floor( c/boxSize ) * boxSize;

      for (let i = boxRow; i < boxRow + boxSize; i++) {
        for (let j = boxCol; j < boxCol + boxSize; j++) {
          if (board[i][j] === num && i !== r && j !== c) {
              return false;
          }
        }
      }
      return true;
    }

    const solve = () => {
      const currPos = findEmpty(board);

      if (currPos === null) {
          return true;
      }
      //console.log('------------------------------');
      for (let i = 1; i < size + 1; i++) {
        const currNum = i.toString();
        const isValid = validate(currNum, currPos, board);
        //console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
        if (isValid) {
          const [x,y] = currPos;
          board[x][y] = currNum;

          if(solve()) {
              return true;
          }

          board[x][y] = '-';
        }
      }

      return false;
    }

    solve();
    return board;
};

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

  const unsolvedArr = [
    ["5", "3", "-", "-", "7", "-", "-", "-", "-"],
    ["6", "-", "-", "1", "9", "5", "-", "-", "-"],
    ["-", "9", "8", "-", "-", "-", "-", "6", "-"],
    ["8", "-", "-", "-", "6", "-", "-", "-", "3"],
    ["4", "-", "-", "8", "-", "3", "-", "-", "1"],
    ["7", "-", "-", "-", "2", "-", "-", "-", "6"],
    ["-", "6", "-", "-", "-", "-", "2", "8", "-"],
    ["-", "-", "-", "4", "1", "9", "-", "-", "5"],
    ["-", "-", "-", "-", "8", "-", "-", "7", "9"]
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
  function prettyBoard(board) {
    //Заполнение грида ячейками
    const grid = document.querySelector('.grid');
    for (i = 0; i < size * size; i++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      grid.appendChild(cell);
    }
  
    const cells = document.querySelectorAll('.cell');
    //Функция заполнения ячеек начальными значениями, n - номер нерешенного массива
    function pushUnsolved(unsolvedArr) {
      const data = unsolvedArr.flat(1);
      for (let i = 0; i < cells.length; i++) {
        if (data[i] !== '-') cells[i].textContent = data[i]
        else cells[i].classList.add('cell-unsolved');
      }
    }

    const select = document.querySelector('#select');
    //Обработчик селекта - по клику вызывает функцию заполнения поля начальными значениями
    select.addEventListener('click', (event) => {
      event.preventDefault();
      const options = select.querySelectorAll('option');
      const count = options.length;
      if(select.value === '') {
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('cell-solved')) cells[i].classList.remove('cell-solved');
          if (cells[i].classList.contains('cell-unsolved')) cells[i].classList.remove('cell-unsolved');
          cells[i].textContent = '';
        }
      } else {
        const n = select.value;
        pushUnsolved(unsolvedArr);
        console.table(unsolvedArr)
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('cell-solved')) {
            cells[i].classList.remove('cell-solved');
            cells[i].textContent = '';
          }
        }
      }
      
    })
    
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
    })
  }
  prettyBoard();
})

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
