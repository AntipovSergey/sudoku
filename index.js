const submit = document.querySelector('.btn-input');
const globalTable = document.querySelector('.global-table');
 
const firstTable = globalTable.firstElementChild;
const secondTable = globalTable.lastElementChild;
 
const input = document.querySelector('input');
const unsolvedBlock = document.querySelector('.unsolvedBlock')
 
submit.addEventListener('click', () => {
 unsolvedBlock.id = 'unsolved';
 
 let initialArr = getArrayFromString(getPuzzle(input.value));
 const tbl = firstTable.querySelector('table');
 for (let i = 0; i < tbl.rows.length; i++) {
   for (let j = 0; j < tbl.rows[i].cells.length; j++) { tbl.rows[i].cells[j].innerHTML = initialArr[i][j]; }
 }
 unsolvedBlock.append(tbl);
 
 firstTable.append(unsolvedBlock);
});
 
const solvedBtn = document.querySelector('.btn-solve');
const solvedBlock = document.querySelector('.solvedBlock')
 
solvedBtn.addEventListener('click', () => {
 solvedBlock.id = 'solved';
 
 const solvedArr = solve(getArrayFromString(getPuzzle(input.value)))
 const tbl2 = secondTable.querySelector('table');
 
 for (let i = 0; i < tbl2.rows.length; i++) {
   for (let j = 0; j < tbl2.rows[i].cells.length; j++) { tbl2.rows[i].cells[j].innerHTML = solvedArr[i][j]; }
 }
 solvedBlock.append(tbl2);
 secondTable.append(solvedBlock);
 })
