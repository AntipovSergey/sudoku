const boardStrings = ['1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--',
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
                      '---------------------------------------------------------------------------------'];

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

function solve(boardString, maxGlobalCounter = 1000) {
  let board = getLines(boardString);
  //console.table(board);
  board = board.map((el) => el.map((subEl) => subEl === '-' ? 0 : +subEl));
  let lines = JSON.parse(JSON.stringify(board));
  let columns = getColumns(lines);
  let cubes = getCubes(lines);

  if (!validSolution(lines, columns, cubes)) {
    return 'Solution:\nThis sudoku is unsolvable!';
  }

  let i0;
  let j0;
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j] === 0) {
        i0 = i;
        j0 = j;
        j = lines[i].length - 1;
        i = lines.length - 1;
      }
    }
  }
  
  let globalCounter = 1;
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j] === 0) {
        let x = random(boardString);
        let counter = 0;
        while (chekElem(lines[i], x)
                || chekElem(columns[j], x)
                || chekElem(cubes[Math.floor(i / Math.sqrt(lines.length))][Math.floor(j / Math.sqrt(lines.length))], x)) {
          x = random(boardString);
          counter += 1;
          if (counter > 150) {
            globalCounter += 1;
            lines = JSON.parse(JSON.stringify(board));
            columns = getColumns(lines);
            cubes = getCubes(lines);
            i = i0;
            j = j0;
            counter = 0;
          }
          if (globalCounter > maxGlobalCounter) {
            return 'Solution:\nThis sudoku is unsolvable this way!';
          }
        }
        lines[i][j] = x;      
        columns = getColumns(lines);
        cubes = getCubes(lines);
      }
    }
  }

  console.log('Number of attempts to solve:', globalCounter, '\nSolution:');

  return lines;



  function random(boardString) {
    return Math.ceil(Math.random() * Math.sqrt(boardString.length));
  }

  function chekElem(arr, elem) {
    return arr.includes(elem);
  }

  function getLines(str) {
    const size = Math.sqrt(str.length);
    const arr = str.split('');
    const lines = [];
    for (let i = 0; i < size; i++) {
      lines.push(arr.splice(0, size));
    }
    return lines;
  }

  function getColumns(lines) {
    return lines[0].map((_, i) => lines.map((el) => el[i]));
  }

  function getCubes(lines) {
    const cubeSize = Math.sqrt(lines.length);
    const cubes = [];
    let m = 0;
    let k = 0;
    for (let i = 0; i < cubeSize; i++) {
      cubes.push([]);
      for (let j = 0; j < cubeSize; j++) {
        cubes[i].push([]);
        for (let x = k; x < k + cubeSize; x++) {
          for (let y = m; y < m + cubeSize; y++) {
            cubes[i][j].push(lines[x][y]);
          }
        }
        m += cubeSize;
      }
      k += cubeSize;
      m = 0;
    }
    return cubes;
  }

  function validSolution(lines, columns, cubes) {

    for (let i = 0; i < lines.length; i++) {
      if (!chekArr(lines[i])) return false;
    }

    for (let i = 0; i < columns.length; i++) {
      if (!chekArr(columns[i])) return false;
    }

    for (let i = 0; i < Math.sqrt(columns.length); i++) {
      for (let j = 0; j < Math.sqrt(columns.length); j++) {
        if (!chekArr(cubes[i][j])) return false;
      }
    }

    return true;

    function chekArr(arr) {
      const exception = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && arr[i] !== exception) {
          return false;
        }
      }
      return true;
    }
  }
}

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////


const maxGlobalCounter = 500;

let validSolutionCounter = 0;
for (let i = 0; i < boardStrings.length; i++) {
  console.log(`\nSudoku №${i + 1} >>> '${boardStrings[i]}'`);
  let result = solve(boardStrings[i], maxGlobalCounter);
  console.table(result);  
  if (Array.isArray(result)) {
    validSolutionCounter += 1;
  }
}

console.log(`\n*********************************************************************************************
*********************************************************************************************
*********************************************************************************************
Solved ${validSolutionCounter} sudoku of ${boardStrings.length}, but max number of attempts to solve each sudoku is only ${maxGlobalCounter} 🙂🙂🙂
*********************************************************************************************
*********************************************************************************************
*********************************************************************************************\n`)


//console.log(`\nSudoku №1: '${boardStrings[0]}'`);
//console.table(solve(boardStrings[0]));

//let str = '----------------'; // 4x4
//let str = '-1---2-----3---4'; // 4x4
//let str = '--1--2--3-----4-'; // 4x4
//let str = '11--------------'; // 4x4 error
//let str = '1---1-----------'; // 4x4 error
//let str = '1----1----------'; // 4x4 error
//console.table(solve(str));




//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

function solve16(arr, maxGlobalCounter = 10000000) {
  let board = arr.map((el) => el.map((subEl) => subEl === '-' ? 0 : subEl));
  let lines = JSON.parse(JSON.stringify(board));
  let columns = getColumns(lines);
  let cubes = getCubes(lines);

  if (!validSolution(lines, columns, cubes)) {
    return 'Solution:\nThis sudoku is unsolvable!';
  }

  let i0;
  let j0;
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j] === 0) {
        i0 = i;
        j0 = j;
        j = lines[i].length - 1;
        i = lines.length - 1;
      }
    }
  }
  
  let globalCounter = 1;
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j] === 0) {
        let x = random(arr);
        let counter = 0;
        while (chekElem(lines[i], x)
                || chekElem(columns[j], x)
                || chekElem(cubes[Math.floor(i / Math.sqrt(lines.length))][Math.floor(j / Math.sqrt(lines.length))], x)) {
          x = random(arr);
          counter += 1;
          if (counter > 250) {
            globalCounter += 1;
            lines = JSON.parse(JSON.stringify(board));
            columns = getColumns(lines);
            cubes = getCubes(lines);
            i = i0;
            j = j0;
            counter = 0;
          }
          if (globalCounter > maxGlobalCounter) {
            return 'Solution:\nThis sudoku is unsolvable this way!';
          }
        }
        lines[i][j] = x;      
        columns = getColumns(lines);
        cubes = getCubes(lines);
      }
    }
  }

  console.log('Number of attempts to solve:', globalCounter, '\nSolution:');

  return lines;



  function random(arr) {
    return Math.ceil(Math.random() * arr.length);
  }

  function chekElem(arr, elem) {
    return arr.includes(elem);
  }

  function getColumns(lines) {
    return lines[0].map((_, i) => lines.map((el) => el[i]));
  }

  function getCubes(lines) {
    const cubeSize = Math.sqrt(lines.length);
    const cubes = [];
    let m = 0;
    let k = 0;
    for (let i = 0; i < cubeSize; i++) {
      cubes.push([]);
      for (let j = 0; j < cubeSize; j++) {
        cubes[i].push([]);
        for (let x = k; x < k + cubeSize; x++) {
          for (let y = m; y < m + cubeSize; y++) {
            cubes[i][j].push(lines[x][y]);
          }
        }
        m += cubeSize;
      }
      k += cubeSize;
      m = 0;
    }
    return cubes;
  }

  function validSolution(lines, columns, cubes) {

    for (let i = 0; i < lines.length; i++) {
      if (!chekArr(lines[i])) return false;
    }

    for (let i = 0; i < columns.length; i++) {
      if (!chekArr(columns[i])) return false;
    }

    for (let i = 0; i < Math.sqrt(columns.length); i++) {
      for (let j = 0; j < Math.sqrt(columns.length); j++) {
        if (!chekArr(cubes[i][j])) return false;
      }
    }

    return true;

    function chekArr(arr) {
      const exception = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && arr[i] !== exception) {
          return false;
        }
      }
      return true;
    }
  }
}

const arr16x16 = [  [9,1,3,'-', 8,'-',4,12, 6,'-',7,'-', 14,'-',11,5],
                    ['-',14,13,5, 16,'-',2,11, 12,'-',8,4, 15,'-',3,7],
                    [7,4,8,'-', '-',1,9,'-', 3,'-',2,13, '-',12,'-',6],
                    [6,'-',2,12, 10,'-',5,3, '-',15,9,'-', 8,'-',1,13],

                    ['-',3,14,6, '-',9,'-',5, '-',4,'-',1, 12,10,13,8],
                    ['-',10,'-',1, 4,16,'-',2, 8,'-',15,3, 11,'-',5,'-'],
                    [8,5,'-','-', 12,'-',11,10, '-',7,13,9, 1,'-',6,2],
                    [15,11,9,'-', 6,'-',1,13, '-',2,12,5, 4,'-',16,3],

                    [16,'-',7,3, 9,5,10,'-', 2,12,4,'-', 6,1,8,'-'],
                    [4,'-',5,10, 7,'-',13,8, 1,'-',16,6, '-',11,'-',14],
                    [12,2,'-',14, '-',4,'-',6, 15,'-',5,8, 13,16,'-',10],
                    [1,'-',6,8, 2,'-',15,'-', 7,13,'-',10, 3,'-',12,4],

                    [3,8,'-',9, 11,'-',6,4, 5,16,'-',2, 7,13,15,'-'],
                    ['-',12,16,'-', 3,10,'-',7, '-',14,'-',15, 9,6,'-',11],
                    [14,'-',10,2, '-','-',12,1, 9,'-',3,7, '-',8,'-',16],
                    ['-',7,15,'-', 5,2,'-',9, 4,8,'-',12, 10,3,14,'-']  ];

//console.table(arr16x16);
//console.table(solve16(arr16x16));

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
