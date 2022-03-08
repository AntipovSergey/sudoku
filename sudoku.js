window.addEventListener('DOMContentLoaded', function (event) {

  // Takes a board as a string in the format
  // you see in the puzzle file. Returns
  // something representing a board after
  // your solver has tried to solve it.
  // How you represent your board is up to you!
  function solve(boardString) {
    console.log('first changes');
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

  const unsolvedArr = [
    ['-', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '-', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '-', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '-', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '-', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '-', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '-', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '-', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '-']
  ]
  const solvedArr = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  ]

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
    //Функция заполнения ячеек начальными значениями
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
      if (select.value === '') {
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
    //Обработчик селекта - по изменению вызывает функцию заполнения поля начальными значениями
    // select.addEventListener('change', (event) => {
    //   event.preventDefault();
    //   if(select.value === '1')
    //   {
    //     pushUnsolved(unsolvedArr);
    //     for (let i = 0; i < cells.length; i++) {
    //       if (cells[i].classList.contains('cell-solved')) cells[i].classList.remove('cell-solved');
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
          cells[i].classList.remove('cell-unsolved');
        }
      }
    }
    //Обработчик кнопки - по клику вызывает функцию решения и заполняет поле конечными значениями
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      pushSolved(solvedArr);
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
