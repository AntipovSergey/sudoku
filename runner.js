/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
const sudoku = require('./sudoku');
const CFonts = require('cfonts');

// The sudoku puzzles that your program will solve can be found
// in the sudoku-puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so you should remove them.

// Gets one puzzle from the text file.
function sudokuParse(content, puzzleNumber = 14) {
  let puzzle = content.split('\n')[puzzleNumber];
  console.log(CFonts.say(puzzle, {
    font: 'console',              // define the font face
    align: 'center',              // define text alignment
    colors: ['yellowBright'],         // define all colors
  }));
  return puzzle;
}

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);

  let solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log(CFonts.say("The board was solved!", {
      font: 'slick',              // define the font face
      align: 'center',              // define text alignment
      colors: ['red'],         // define all colors
    }));
    console.log(CFonts.say(sudoku.prettyBoard(solvedPuzzle) , {
      font: 'console',              // define the font face
      align: 'center',              // define text alignment
      colors: ['white'],         // define all colors
      background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
      letterSpacing: 1,           // define letter spacing
      lineHeight: 1,              // define the line height
      space: true,               // define if the output text should have empty lines on top and on the bottom
      maxLength: '40',             // define how many character can be on one line
      gradient: false,            // define your two gradient colors
      independentGradient: false, // define if you want to recalculate the gradient for each new line
      transitionGradient: false,  // define if this is a transition between colors directly
      env: 'node',                 // define the environment CFonts is being executed in
    }));
  }
  else {
    console.log(CFonts.say("The board wasn't solved :(", {
      font: 'chrome',              // define the font face
      align: 'center',              // define text alignment
      colors: ['red', 'yellow','red'],         // define all colors
    }));
  }
}

CFonts.say('SUDOKU SOLVE!', {
  font: 'block',              // define the font face
  align: 'center',              // define text alignment
  colors: ['whiteBright'],         // define all colors
  background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
  letterSpacing: 3,           // define letter spacing
  lineHeight: 2,              // define the line height
  space: true,               // define if the output text should have empty lines on top and on the bottom
  maxLength: '13',             // define how many character can be on one line
  gradient: ['red','blue']            // define your two gradient colors
  // independentGradient: false, // define if you want to recalculate the gradient for each new line
  // transitionGradient: false,  // define if this is a transition between colors directly
  // env: 'node',                // define the environment CFonts is being executed in
});

// Reads file and sends data from it to the readAndSolve function.
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);
