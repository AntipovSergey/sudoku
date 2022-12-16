const fs = require('fs');

const userInput = process.argv[2];

const generateRandomField = (fieldNumber=Math.floor(Math.random() * 15)) => {
    const puzzles = fs.readFileSync('./puzzles.txt', 'utf8').trim().split('\n').map((el) => el.match(/.{1,9}/g));
    const normalizeField = puzzles[fieldNumber].map((el) => el.split(''));
    const result = normalizeField.map((el) => el.map((el) => el.replace('-', '0')));
    return result.map((el) => el.map((el) => Number(el)));
};

console.log(generateRandomField(userInput));

module.exports = generateRandomField;
