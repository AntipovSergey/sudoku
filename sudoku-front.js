const str1 = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
const str2 = '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3';
const str3 = '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----';
const str4 = '-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--';
const str5 = '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------';
const str6 = '---------------------------------------------------------------------------------';

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

function solve(boardString, maxGlobalCounter = 1000000) {
  let board = getLines(boardString);
  board = board.map((el) => el.map((subEl) => subEl === '-' ? 0 : +subEl));
  let lines = JSON.parse(JSON.stringify(board));
  let columns = getColumns(lines);
  let cubes = getCubes(lines);

  if (!validSolution(lines, columns, cubes)) {
    return boardString; ////////////////////////////
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
            return boardString; /////////////////////////////
          }
        }
        lines[i][j] = x;      
        columns = getColumns(lines);
        cubes = getCubes(lines);
      }
    }
  }

  //console.log('Number of attempts to solve:', globalCounter, '\nSolution:');
  return JSON.stringify(lines).match(/[1-9]/g).join(''); //////////////////////


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

