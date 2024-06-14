const fs = require("fs");

// функция считывания txt файла
const readFile = () => {
  const data = fs.readFileSync("./puzzles.txt", "utf8");
  return data;
};

// переводим в массив
function readFileToArr() {
  const data = readFile().trim();
  const arr = data.split("\n");
  // console.log(arr);
}

readFileToArr();
