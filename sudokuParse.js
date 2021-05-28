let str = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
//Вместо строки необходимо добавить решаемую головоломку


function sudokuParse(content, puzzleNumber) {
     //Преобразование строки в массив
  let array = [];
  for (let i = 0; i < content.length; i++) {array.push(content[i])}


  //Преобразование массива в многомерный массив
  //Спасибо Семён!
  //Я почти понял как это работает

  let transphorm = array.reduce((acc, el, i) => {
    let row = Math.floor(i / 9);
    if (!Array.isArray(acc[row])) acc[row] = [];
    acc[row].push(el);
    return acc;
  }, []);
  return transphorm;
}

console.table(sudokuParse(str));

module.exports = { sudokuParse };
