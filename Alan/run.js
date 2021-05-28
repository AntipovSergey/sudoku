const fill = require('./takeAndFill');
const transform = require("../Nikolay/sudokuParse.js")
const square = require('./testSquare.js');
const rowAndCol = require('./testLast.js');

const stringFromArr =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---";


  function solve(pazzle) {
     const filled = fill.fillingArr(pazzle);
     const transformed = transform.sudokuParse(filled);

//-------------------------------------выше трансформ

    const rows = rowAndCol.testAllRows(transformed);
    const colums = rowAndCol.testAllColums(transformed);

//--------------------------------------ниже квадраты


     const toSmallSquares = transform.createMegaArr(transformed);
     
     function checkAllSmalls(small) {
     for (let i = 0; i < array.length; i++) {
        if(square.testSquare(small[i])) {
          continue
        }
        else if (square.testSquare(small[i]) === false) {
          return false
        }
      }
      return true
      }
      const smallsAnswer = checkAllSmalls(toSmallSquares);
      if (smallsAnswer&&rows&&colums) {
        alert("Верно")
      }else{
        alert("Неверно")
      }

    }


      
