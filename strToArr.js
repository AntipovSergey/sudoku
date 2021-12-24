
let a = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

let parts = a.match(/[\s\S]{0,1}/g);
parts.pop()

const size = 9; 
let res = parts.reduce((acc, curr, i) => {
  if ( !(i % size)  ) {   
   
    acc.push(parts.slice(i, i + size));  
  }
  return acc;
}, []);

console.table(res);
