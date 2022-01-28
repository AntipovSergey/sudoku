const puzzle = [['1','-','5','8','-','2','-','-','-'],
                ['-','9','-','-','7','6','4','-','5'],
                ['2','-','-','4','-','-','8','1','9'],
                ['-','1','9','-','-','7','3','-','6'],
                ['7','6','2','-','8','3','-','9','-'],
                ['-','-','-','-','6','1','-','5','-'],
                ['-','-','7','6','-','-','-','3','-'],
                ['4','3','-','-','2','-','5','-','1'],
                ['6','-','-','3','-','8','9','-','-']];


function findEmpty () {
  for (let i = 0; i < puzzle.length; i++){
    for (let j = 0; j < puzzle[i].length; j++){
      if (puzzle[i][j] === "-") return [i,j]
    }
  }
}

function Checking () {
  

  //Check row
  const [r,c] = findEmpty();
  const possVar = []; //Будет иметь массив с числами, которых не хватает строке -> [ 3, 4, 6, 7, 9 ] для первой строки
  for (let num = 1; num <= 9; num++){
    if (puzzle[r].includes(num.toString()) === false) possVar.push(num); 
  }

  //Column on Array
  const arrColumn = []; //Вся колонка будет в одном массиве
  for (let i = 0; i < puzzle.length; i++){
    arrColumn.push(puzzle[i][c]);
  } 


  //Check Column
  const possVar2 = [] //Возможные числа скорректированные на столбец 
  for (let num = 1; num < 9; num++){
      if (arrColumn.includes(num.toString()) === false) {
        if (possVar.includes(num)) {
          possVar2.push(num)
        }
      }  
  }
  
  //Создание переменных
  const boxSize = Math.sqrt(puzzle.length);
  const boxRow = Math.floor(r/boxSize)*boxSize
  const boxColumn = boxRow + 2
  const possVar3 = []
  
  //Box in Array
  const arrBox = [];
  for (let i = 0; i < boxSize; i++){
    for (let j = 0; j < boxSize; j++) {
      arrBox.push(puzzle[i][j]);
    }
  }
  
  //Check Box
  for (let num = 1; num <= 9; num++){
    if (arrBox.includes(num.toString()) === false) {
      if (possVar2.includes(num)) {
        possVar3.push(num)
      }
    }
  }

  if (possVar3.length = 1) {
    return [r, c, possVar3[0]]
  } else {
    return []
  }

}


// console.log(Checking());
