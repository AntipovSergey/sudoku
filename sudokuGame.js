//import { solve } from "./sudoku";

let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
let data = [];
let otveti = [];
let changed = [];
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

isSolved(data);


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
           // el.innerHTML = `${k}`;
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
  otveti = board;
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

// наш код


const button2 = document.createElement('button');
button2.innerText ='Проверить';
button2.setAttribute("id", "btnTab");
button2.style.backgroundColor = 'teal';
let cont = document.querySelector('.conteiner');
cont.appendChild(button2);

button2.addEventListener('click', (e) => {
  console.log(otveti[changed[0][0],changed[0][1]]);
 for (let z = 0; z < changed.length; z += 1) {
   if (otveti[changed[z][0],changed[z][1]] == changed[z][2]) {
    let myInput = document.getElementById(`${changed[z][0]}_${changed[z][1]};`);
    myInput.parentNode.style.backgroundColor = 'green';
   } else {
    let myInput = document.getElementById(`${changed[z][0]}_${changed[z][1]};`);
    myInput.parentNode.style.backgroundColor = 'red'; 
   }
 }
})

document.addEventListener('input', (event) => {
  let a = event.target.id; 
  let i = a[0];
  let j = a[2];
  changed.push([i, j, event.target.value]);
  // if (otveti[i][j] == event.target.value) {
  //   event.target.readOnly = true;
  //   event.target.parentNode.style.backgroundColor = 'green';
  // } else {
  //   event.target.parentNode.style.backgroundColor = 'red';
  // }
});

 document.addEventListener('click', (event) => {
  if (event.target.value == '-') {
    event.target.value = '';
  }
 })
