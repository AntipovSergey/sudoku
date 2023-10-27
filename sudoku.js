const { Linter } = require('eslint');
const fs = require('fs');

function read() {
  let puzzleRead = fs.readFileSync('./puzzles.txt', 'utf-8');
  puzzleRead = puzzleRead.split('\n').join('');
  let cnt = 0;
  const allPuzzlesArr = new Array(135);
  for (let i = 0; i < allPuzzlesArr.length; i++) {
    allPuzzlesArr[i] = [];
  }

  let arrayCounter = 0;
  for (let i = 0; i < puzzleRead.length; i++) {
    allPuzzlesArr[arrayCounter].push(puzzleRead[i]);
    cnt++;
    if (cnt === 9) {
      cnt = 0;
      arrayCounter++;
    }
  }

  const finalPuzzlesArr = new Array(15);
  for (let i = 0; i < finalPuzzlesArr.length; i++) {
    finalPuzzlesArr[i] = [];
  }
  cnt = 0;
  arrayCounter = 0;
  for (let i = 0; i < allPuzzlesArr.length; i++) {
    finalPuzzlesArr[arrayCounter].push(allPuzzlesArr[i]);
    cnt++;
    if (cnt === 9) {
      cnt = 0;
      arrayCounter++;
    }
  }
  return finalPuzzlesArr;
}

const game1 = read(0);

function solve(game) {
  
  let findings = [];
  let sum = 0;

  game[0].forEach((line) => {
 
    for (let i = 0; i < line.length; i++) {
      if (line[i] !== '-') {       
        sum += Number(line[i])
      }     
      console.log(sum)
    }
    
    findings.push(45 - sum);
    sum = 0
  })
  console.log(findings);
  return findings;
  //   const diff = 45 - sum;

  //   if (diff <= 9 && emptyFiguresIndices / length === 1) {
  //     line[emptyFiguresIndices[0]] = diff;
  //   }
  //   findings.push(diff);
  // });

  // console.log(findings);

  // let emptyFiguresIndices = []
  // let numbersLine = []

  // line.forEach((fig, index) => {
  //   if (fig === '-') {
  //     emptyFiguresIndices.push(index)
  //   }
  //   else {
  //     numbersLine.push(fig);
  //   }

  // });
  // console.log(numbersLine)
  // console.log(emptyFiguresIndices)


}

solve(game1);


// Проверки:


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции read.
 * Возвращает игровое поле после попытки его решить.
 */



function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

// module.exports = {
//   read,
//   solve,
//   isSolved,
//   prettyBoard
// }
