// const fs = require('fs');
const parentEl1 = document.querySelector('.sudocu__wrapper');
const changeBtn = document.querySelector('.btn__sudocu_change');
const solveBtn = document.querySelector('.btn__sudocu_solve');
const stepBtn = document.querySelector('.btn__sudocu_step');
const animBtn = document.querySelector('.btn__sudocu_anim');

function createEl() {
  const str = '---------------------------------------------------------------------------------';
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    const div = document.createElement('div');
    div.classList.add('sudocu__items');
    parentEl1.append(div);

    for (let colIndex = 0; colIndex < 9; colIndex++) {
      const div1 = document.createElement('div');
      div1.classList.add('sudocu__item');
      div1.innerText = str[rowIndex * 9 + colIndex];
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

const addStr = document.querySelector('.sudocu__item');
let textBordBefore = '---------------------------------------------------------------------------------';
let textBordAfter = solve(textBordBefore);
changeBtn.addEventListener('click', () => {
  const puzzles = text.split('\n').filter((line) => line !== '');
  const puzzleNumberRandom = Math.floor(Math.random() * 14);
  const puzzle = puzzles[puzzleNumberRandom];
  textBordBefore = puzzle;
  textBordAfter = solve(textBordBefore);
  updateEl(puzzle);
});

solveBtn.addEventListener('click', () => {
  updateEl(textBordAfter);
});

stepBtn.addEventListener('click', () => {
  const itemEl = document.getElementsByClassName('sudocu__item');
  let finded = false;
  let count = 1;
  while (!finded && count < 300) {
    const randmInd = Math.floor(Math.random() * 80);
    if (itemEl[randmInd].innerText === '-') {
      itemEl[randmInd].innerHTML = textBordAfter[randmInd];
      finded = true;
    }
    count += 1;
  }
});
animBtn.addEventListener('click', () => {
  const itemEl = document.getElementsByClassName('sudocu__item');
  for (let countInd = 0; countInd < 81; countInd += 1) {
    // eslint-disable-next-line no-loop-func
    setTimeout(() => {
      let count = 1;
      let finded = false;
      while (!finded && count < 300) {
        const randmInd = Math.floor(Math.random() * 80);
        if (itemEl[randmInd].innerText === '-') {
          itemEl[randmInd].innerHTML = textBordAfter[randmInd];
          finded = true;
        }
        count += 1;
      }
    }, countInd * 200);
  }
});
