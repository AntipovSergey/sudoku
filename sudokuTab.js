//import { solve } from "./sudoku";

let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
let data = [];
function solve(boardString) {
  let ln = boardString.length;
  for (i = 0; i < ln; i += 9) {
    data.push(boardString.slice(i, 9 + i).split(""));
  }
  return data;
}

function generateTab(board, param = 0) {
  let tab = document.getElementById('dataTab');
  let el, row, flag;
  for (let i = 0; i < 9; i++) {
    row = document.createElement('tr');
    for (let j = 0; j < 9; j++) {
      el = document.createElement('td');
      if (board[i][j] === '-')
        flag = "";
      else
        flag = "readonly";

      el.id = `tb_${i}_${j}`;
      el.innerHTML = `${board[i][j]}`
      el.innerHTML = `<input type="text" class = "itembox" id = ${i}_${j}; value="${board[i][j]}" ${flag}/>`;
      row.appendChild(el);
    }
    tab.appendChild(row);
  }
}
generateTab(solve(boardString));
let btn = document.getElementById('btnTab');

btn.addEventListener('click', () => { isSolved(data); });

function isSolved(board) {
  //sleep(500);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let el = document.getElementById(`tb_${i}_${j}`);
      if (board[i][j] === "-") {
        //k-это числа от 1 до 9 которое нужно подставить
        for (let k = 1; k <= 9; k++) {
          if (checkValid(board, i, j, k)) {
            board[i][j] = k;
            el.innerHTML = `${k}`;
            if (isSolved(board)) {
              return true;
            } else {
              board[i][j] = "-";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
function sleep(ms) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  }
  while ((currentDate - date) < ms)
}

function checkValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + (i % 3);
    if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
      return false;
    }
  }
  return true;
}
