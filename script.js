//Takes in function Solved()
//Targets button 1 & 2
//Outputs result in a HTML file
function buttons (func1=1, func2=1) {
	let uIwD = document.querySelector("form");
	let button1 = document.querySelector("#button-1");
	let button2 = document.querySelector("#button-2");
  let div = document.querySelector("#table");

	button1.addEventListener('click', (e) => {
		if (uIwD.flevel.value > 14) {
			alert ("You entered a wrong number!");
		}
    div.removeChild(document.querySelector('table'));
    let table = document.createElement('table');
    div.appendChild(table);
    const arrSove = pars(uIwD.flevel.value);
      for (let i = 0; i < arrSove.length; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < arrSove[i].length; j++) {
          let td = document.createElement('td');
          td.innerHTML = arrSove[i][j];
          if (j === 2 || j === 5) {
            td.className = 'borderRight'
          }
          if (i === 2 || i === 5) {
            td.className = 'borderBottom'
          }
          if ((j === 2 || j === 5) && (i === 2 || i === 5)) {
            td.className = 'toBorder'
          }
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
    //fillTable(table, arrSove)
    e.preventDefault();
	});
  /*
	button2.addEventListener('click', () => {
	})
  */
}

buttons()

