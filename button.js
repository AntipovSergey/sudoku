// const fs = require('fs');
const parentEl1 = document.querySelector('.sudocu__wrapper');
const changeBtn = document.querySelector('.btn__sudocu_change');
const solveBtn = document.querySelector('.btn__sudocu_solve');

function createEl() {
    let str = '---------------------------------------------------------------------------------';
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        const div = document.createElement('div');
        div.classList.add('sudocu__items');
        parentEl1.append(div)

        for (let colIndex = 0; colIndex < 9; colIndex++) {
            const div1 = document.createElement('div');
            div1.classList.add('sudocu__item');
            div1.innerText = str[rowIndex * 9 + colIndex]
            div.append(div1);
        }
    }
}
createEl();

function updateEl(str) {
    const itemEl = document.getElementsByClassName('sudocu__item');
    for (let i = 0; i < 81; i++) {
        itemEl[i].innerText = str[i];
    }
}

const addStr = document.querySelector('.sudocu__item')
let textBordBefore;
let textBordAfter;
changeBtn.addEventListener('click', () => {
    // const fileData = fs.readFileSync(
    //     './puzzles.txt',
    //     'utf-8'
    // );
    fetch('puzzles.txt')
        .then(response => response.text())
        .then(text => {
            const puzzles = text.split('\n').filter((line) => line !== '');
            let puzzleNumberRandom = Math.floor(Math.random() * 14)
            // Получить желаемый судоку по индексу и вывести его в консоль.
            const puzzle = puzzles[puzzleNumberRandom];
            textBordBefore = puzzle;
            updateEl(puzzle)
            textBordAfter = solve(puzzle);
            console.log(textBordAfter);
        });
});

solveBtn.addEventListener('click', () => {
    updateEl(textBordAfter)
});

