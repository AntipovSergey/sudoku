const fs = require('fs');

// функция считывания txt файла
const readFile = () => {
   const data = fs.readFileSync('./puzzles.txt', 'utf8');
   return data
  };
console.log(readFile());

