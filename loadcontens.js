str = [
    '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--',
    '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3',
    '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9',
    '-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-',
    '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--',
    '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----',
    '-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--',
    '-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7',
    '----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----',
    '3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--',
    '3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-',
    '-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-',
    '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--',
    '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------',
    '---------------------------------------------------------------------------------'
]

/* generateBoard(findAll(convertInputString(str))) */
/* solveSudocu(findAll(convertInputString(str))) */
document.addEventListener('DOMContentLoaded', onLoad)
document.querySelector('select').addEventListener('change', onLoad)
document.querySelector('.start').addEventListener('click', startSolving)

function generateBoard(field) {
    let board = document.querySelector('#game');
    board.innerHTML=''

    for (let i = 0; i < field.length; i++) {
        let tr = document.createElement('tr');
        tr.id = `r${i}`
        board.appendChild(tr)
        for (let j = 0; j < field[i].length; j++) {
            let td = document.createElement('td');
            td.id = `r${i}c${j}`;
            td.classList.add('cell');
            if (typeof field[i][j] !== 'object') {
                td.innerText = field[i][j];
            }
            tr.appendChild(td);
        }
    }
}

function onLoad() {
    let needSudocu = document.querySelector('select').value-1;
    generateBoard(findAll(convertInputString(str[needSudocu])))
}

function startSolving() {
    gameSolved = false;
    renderBufer = [];
    let needSudocu = document.querySelector('select').value - 1;
    solveSudocu(findAll(convertInputString(str[needSudocu])))
    alert(`Потребовалось ${renderBufer.length} итераций`)
    renderBoard(renderBufer);
}

function renderBoard(arr) {
    if (arr.length == 0) return;
    if (document.querySelector('#period').checked == true) {
        let rendered = arr.shift()
        generateBoard(rendered)
        setTimeout(() => renderBoard(arr), 4);
    } else {
        let rendered = arr.pop()
        generateBoard(rendered)
    }
}


