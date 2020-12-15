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
      if (board[i][j] === '-') {
        flag = "";
        el.innerHTML = `<input type="text" class = "itembox" id = ${i}_${j}; value="" ${flag}/>`;
      }
        
      else {
        flag = "readonly"; 
        el.innerHTML = `<input type="text" class = "itembox" id = ${i}_${j}; value="${board[i][j]}" ${flag}/>`;       
      }

      el.id = `tb_${i}_${j}`;
      row.appendChild(el);
    }
    tab.appendChild(row);
  }
}


generateTab(solve(boardString));
let btn = document.getElementById('btnTab');

btn.addEventListener('click', () => { 
  isSolved(data); 
  render(data, inputColection, 50)

});

const inputColection = document.querySelectorAll('.itembox');

const clearButton = document.createElement('input');
clearButton.type = 'button';
clearButton.value = 'Очистить судоку';
clearButton.classList.add('btnTab');
clearButton.disabled = 'true';

clearButton.addEventListener('click', () => { 
  data = []
  solve(boardString)
  render(data, inputColection, 10) 

});

btn.insertAdjacentElement('afterend', clearButton)


function render(data, inputColection, time) {
  let itr = 0;

  let dataArr = data.join(',').split(',')

  let renderSetInt = setInterval(() => {
    inputColection[itr].value = dataArr[itr] === '-' ? '' : dataArr[itr];
    itr++;

    if (itr === 81) {
      clearInterval(renderSetInt);

      time === 10 ? clearButton.disabled = 'true' 
        : clearButton.removeAttribute('disabled');
    }
  }, time);

}


function isSolved(board) {
  //sleep(500);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {

      if (board[i][j] === "-") {
        //k-это числа от 1 до 9 которое нужно подставить
        for (let k = 1; k <= 9; k++) {
          if (checkValid(board, i, j, k)) {
            board[i][j] = k;

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


