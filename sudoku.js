let text = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---";
let arrSudoky = text
  .match(/(.{9})/g)
  .map(el => el.split(''))
  .map((il) => il.map(el => {
    if (el === '-') {
      return null;
    } else {
      return Number(el)
    }
  }))
console.table(arrSudoky)



