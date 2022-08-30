const banan = document.querySelector('.ban');

function slovo () {
    
}
// // banan.innerHTML = readAndSolve("ошибка", '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');
const krasota = readAndSolve("ошибка", '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');
console.log(krasota)
const div1 = document.createElement(`div`);
div1.id = `krasota`
div1.innerText = krasota;
banan.appendChild(div1)