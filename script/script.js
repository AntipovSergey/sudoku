const puzzles = {
  light1:
    '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--',
  light2:
    '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3',
  light3:
    '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9',
  light4:
    '-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-',
  light5:
    '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--',
  medium1:
    '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----',
  medium2:
    '-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--',
  medium3:
    '-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7',
  medium4:
    '----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----',
  medium5:
    '3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--',
  hard1:
    '3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-',
  hard2:
    '-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-',
  hard3:
    '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--',
  hard4:
    '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------',
  hard5:
    '---------------------------------------------------------------------------------',
};

const choicesSelect = document.getElementById('choices');
const startButton = document.getElementById('start');
const solveButton = document.getElementById('solve');
const clearButton = document.getElementById('clear');

// Подготовка кнопок
const options = Object.keys(puzzles);
for (let i = 0; i < options.length; i++) {
  let opt;
  if (i !== 14) {
    opt = `<option value='${options[i]}'>${options[i]}</option>`;
  } else {
    opt = `<option value='${options[i]}' selected='selected'>${options[i]}</option>`;
  }
  choicesSelect.innerHTML += opt;
}

// Функции необходимые для решения задач
function i2rc(index) {
  return { row: Math.floor(index / 9), column: index % 9 };
}

function rc2i(row, column) {
  return row * 9 + column;
}

function square(row, column) {
  return { row: Math.floor(row / 3) * 3, column: Math.floor(column / 3) * 3 };
}

function checkOption(index, board) {
  const rc = i2rc(index);
  let options = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let r = 0; r < 9; r++) {
    if (rc.row === r) {
      continue;
    }
    const i = rc2i(r, rc.column);
    if (options.includes(board[i])) {
      options = options.filter((val) => val !== board[i]);
    }
  }
  for (let c = 0; c < 9; c++) {
    if (rc.column === c) {
      continue;
    }
    const i = rc2i(rc.row, c);
    if (options.includes(board[i])) {
      options = options.filter((val) => val !== board[i]);
    }
  }
  const checkedSquare = square(rc.row, rc.column);
  for (let r = checkedSquare.row; r < checkedSquare.row + 3; r++) {
    for (let c = checkedSquare.column; c < checkedSquare.column + 3; c++) {
      const i = rc2i(r, c);
      if (rc2i(rc.row, rc.column) === i) {
        continue;
      }

      if (options.includes(board[i])) {
        options = options.filter((val) => val !== board[i]);
      }
    }
  }
  return options;
}

function startFn(index, val = '') {
  document.getElementById(`${index}`).innerHTML = `<p>${val}<p>`;
}

function solver(index, board, start) {
  while (index < 81 && board[index] !== '-') index++;
  if (index === 81) {
    return true;
  }
  const options = checkOption(index, board);

  for (let val = 0; val < options.length; val++) {
    board[index] = options[val];
    if (start) {
      startFn(index, options[val]);
      if (solver(index + 1, board, start)) {
        return board;
      }
    } else if (solver(index + 1, board, start)) {
      return board;
    }
  }
  board[index] = '-';
  if (start) {
    startFn(index);
  }
  return false;
}

function solve(boardString, start = false) {
  const board = [...boardString];
  const result = solver(0, board, start);
  return result.join('');
}

function renderSudoku(sudoku) {
  for (let i = 0; i < 81; i++) {
    const field = document.getElementById(`${i}`);
    if (sudoku[i] !== '-') {
      field.innerHTML = `<p>${sudoku[i]}<p>`;
    } else {
      field.innerHTML = '';
    }
  }
}

function changePuzzle() {
  renderSudoku(puzzles[choicesSelect.value]);
}

choicesSelect.addEventListener('change', changePuzzle);

function solvePuzzle() {
  renderSudoku(solve(puzzles[choicesSelect.value]));
}

solveButton.addEventListener('click', solvePuzzle);

clearButton.addEventListener('click', changePuzzle);

function startSudoku() {
  const puzzle = choicesSelect.value;
  solve(puzzles[puzzle], true);
}

startButton.addEventListener('click', startSudoku);
