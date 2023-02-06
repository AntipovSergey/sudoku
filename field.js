/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
let numSelected = null;
//let tileSelected = null;
let errors = 0;

// в массив board необходимо принять массив из функции,
// которая обработает выбранную строку из файла "./puzzles.txt"
// функцию пишет Александр.

let board = [
  '--74916-5',
  '2---6-3-9',
  '-----7-1-',
  '-586----4',
  '--3----9-',
  '--62--187',
  '9-4-7---2',
  '67-83----',
  '81--45---',
];

// в массив solution  необходимо принять массив из функции,
// которая вернет массив с решением для выбранной строки из файла "./puzzles.txt"
// функцию пишут Юра и Вадим

let solution = [
  '387491625',
  '241568379',
  '569327418',
  '758619234',
  '123784596',
  '496253187',
  '934176852',
  '675832941',
  '812945763',
];

window.onload = function () {
  setGame();
};

function setGame() {
  // выводим на экран цифры от 1 до 9
  for (let i = 1; i <= 9; i++) {
    // создадим элемент <div id="1" class="number">i</div>
    let number = document.createElement('div');
    number.id = i;
    number.innerText = i;
    number.addEventListener('click', selectNumber); // вызов функции selectNumber по клику мышки
    number.classList.add('number');
    document.getElementById('digits').appendChild(number);
  }

  // выводим цифры в основное окно SUDOKU (board 9 x 9)
  for (let row = 0; row < 9; row++) {
    // row - номер строки
    for (let col = 0; col < 9; col++) {
      // col - номер столбца
      // class tile - плитка в которой мы будем размещать цифры основного поля
      let tile = document.createElement('div');
      tile.id = `${row.toString()}-${col.toString()}`;

      // заполним основное поле значениями из массива board;
      // значения присвоятся только в том случае, если они не равны "-"
      if (board[row][col] !== '-') {
        tile.innerText = board[row][col];
        // для заполненных значений добавим class 'tile-start'
        tile.classList.add('tile-start');
      }

      if (row === 2 || row === 5) {
        tile.classList.add('horizontal-line');
      }

      if (col === 2 || col === 5) {
        tile.classList.add('vertical-line');
      }

      tile.addEventListener('click', selectTile);
      tile.classList.add('tile');
      document.getElementById('board').append(tile);
    }
  }
}

// функция выбора числа для заполнения основного поля
// в нижнем ряду экрана ( id=numbers )
function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove('number-selected');
  }
  numSelected = this;
  numSelected.classList.add('number-selected');
}

// функция вписывает выбранное чисо на
// выбранную мышкой плитку с id="0-0|0-1......|9-9"
function selectTile() {
  if (numSelected) {
    if (this.innerText !== '') return;
  }
  // из номеров плиток '0-0','0-1'....'0-9'...'9-0'...'9-9'
  // определим координаты поля
  let coordinates = this.id.split('-'); //['0','0']
  let r = parseInt(coordinates[0]); // row
  let c = parseInt(coordinates[1]); // column

  if (solution[r][c] === numSelected.id) {
    this.innerText = numSelected.id;
  } else {
    errors += 1;
    document.getElementById('errors').innerText = errors;
  }
}

// Выбор номера SUDOKU по нажатию клавиши {выбрать}
// Функция возвращает числовое значение выбранного SUDOKU
// для ввода в строку input разрешен ввод только цифр в диапазоне от 1 до 15
let input = document.querySelector('#pazzle');
let SelectBtn = document.querySelector('button');
let pazzleNum = '';
selectBtn.onclick = () => {
  input.value = input.value.replace(/[^\d.]/g, '');
  if (input.value >= 1 && input.value <= 15) {
    pazzleNum = input.value;
    input.value = '';
    console.log(`Выбрали (${typeof pazzleNum})=`, { pazzleNum }); // убрать после подключения функции выбора
    return Number(pazzleNum);
  }
};

// Выбор номера SUDOKU при нажатии на  {ENTER}
// Функция возвращает числовое значение выбранного SUDOKU
// для ввода в строку input разрешен ввод только цифр в диапазоне от 1 до 15
(function () {
  document.querySelector('#pazzle').addEventListener('keydown', function (e) {
    this.value = this.value.replace(/[^\d.]/g, '');
    if (e.keyCode === 13 && input.value >= 1 && input.value <= 15) {
      pazzleNum = this.value;
      this.value = '';
      console.log(`enter (${typeof pazzleNum})=`, { pazzleNum }); // убрать после подключения функции выбора
      return Number(pazzleNum);
    }
  });
})();
