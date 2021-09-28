let table = document.querySelector('table');
const arrSove = pars(3);
fillTable(table, arrSove);
function fillTable(table, arr) {
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement('tr')
    for (let j = 0; j < arr[i].length; j++) {
      let td = document.createElement('td');
      td.innerHTML = arr[i][j];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}


  
