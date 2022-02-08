//Переменные для тестов (УДАЛИТЬ)

let input = [
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

let input_solution = [
  ["9", "9", "9", "9", "7", "9", "9", "9", "9"],
  ["9", "9", "9", "1", "9", "5", "9", "9", "9"],
  ["9", "9", "8", "9", "9", "9", "9", "6", "9"],
  ["8", "9", "9", "9", "6", "9", "9", "9", "3"],
  ["4", "9", "9", "8", "9", "3", "9", "9", "1"],
  ["7", "9", "9", "9", "2", "9", "9", "9", "6"],
  ["9", "6", "9", "9", "9", "9", "2", "8", "9"],
  ["9", "9", "9", "4", "1", "9", "9", "9", "5"],
  ["9", "9", "9", "9", "8", "9", "9", "7", "9"]
];


// Формирование сетки без чисел

const root = document.querySelector('#root');

function get_table(row_count, column_count) {
  const outer_table = document.createElement('table');
  for (let i = 0 ; i < row_count; i++) {
    const row = document.createElement('tr')
    outer_table.appendChild(row);
    for (let i = 0 ; i < column_count; i++) {
      const column = document.createElement('td')
      row.appendChild(column);
    }
  }
  return outer_table
}

const mainTable = get_table(9,9);

root.appendChild(mainTable)



// Формирование сетки START

function fillSudoku(lst){
  const line_lst = [].concat(...lst);
  mainTable.querySelectorAll('td')
    .forEach((td, i) => td.innerText=(line_lst[i] === '-') ? '' : line_lst[i]);
}

fillSudoku(input)


// Формирование сетки SOLUTION

document.querySelector('#solution')
.addEventListener('click', () => fillSudoku(input_solution));


// Формирование сетки BACK

document.querySelector('#reset')
.addEventListener('click', () => fillSudoku(input));
