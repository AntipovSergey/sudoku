let field = document.createElement("div");
document.body.appendChild(field);
let startBtn = document.createElement("button");
let startBtnPlay = document.createElement("button");
startBtn.textContent = "Start";
startBtnPlay.textContent = "Play";
startBtn.classList.add("start-btn");
startBtnPlay.classList.add("start-btn");
document.body.appendChild(startBtn);
document.body.appendChild(startBtnPlay);
field.classList.add("field");

function Play(puzzle) {
  let puzzlestr = puzzle.flat().join("");
  let sells = document.querySelectorAll(".sell");
  sells.forEach((el, i) => {
    el.innerHTML = puzzlestr[i];
  });
}

function sudokuParse(string) {
  const resultPuzzle = [[], [], [], [], [], [], [], [], []];
  const puzzle = string.split("");
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (puzzle[0] != "\n") {
        resultPuzzle[i][j] = parseFloat(puzzle.shift());
        if (isNaN(resultPuzzle[i][j])) resultPuzzle[i][j] = 0;
      }
    }
  }
  return resultPuzzle;
}

function FindEmpty(puzzle) {
  const position = [];
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      if (puzzle[i][j] === 0) {
        position[0] = i;
        position[1] = j;
        return position;
      }
    }
  }
  return false;
}

const sudokuSolver = (puzzle) => {
  const emptyPos = FindEmpty(puzzle);
  if (!emptyPos) return true;

  for (let i = 1; i <= 9; i++) {
    if (isValid(puzzle, i, emptyPos)) {
      puzzle[emptyPos[0]][emptyPos[1]] = i;
      redrawCell(puzzle);
      // console.log(puzzle);
      // Delay(puzzle, i);
      if (sudokuSolver(puzzle)) {
        return true;
      }
      puzzle[emptyPos[0]][emptyPos[1]] = 0;
      redrawCell(puzzle);
      // console.log(puzzle);
      // Delay(puzzle, i);
    }
  }
  return false;
};

const isValid = (puzzle, prediction, position) => {
  // проверка строки
  const rowValidator = (puzzle, prediction, position) => {
    for (let i = 0; i < 9; i++) {
      if (puzzle[position[0]][i] === prediction) return false;
    }
    return true;
  };
  // проверка столбца
  const columnValidator = (puzzle, prediction, position) => {
    for (let i = 0; i < 9; i++) {
      if (puzzle[i][position[1]] === prediction) return false;
    }
    return true;
  };

  const validateBox = (puzzle, prediction, position) => {
    let row = position[0];
    let col = position[1];
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (puzzle[row + i][col + j] === prediction) return false;
      }
    }
    return true;
  };

  if (
    rowValidator(puzzle, prediction, position) &&
    columnValidator(puzzle, prediction, position) &&
    validateBox(puzzle, prediction, position)
  ) {
    return true;
  }
  return false;
};

function Fill() {
  let input = document.querySelector("input");
  let string = input.value;
  console.log(string);
  let sells = document.querySelectorAll(".sell");
  sells.forEach((element, i) => {
    if (string[i] != "-") element.innerHTML = string[i];
  });
}

const redrawCell = (puzzle) => {
  let puzzlestr = puzzle.flat().join("");
  let sells = document.querySelectorAll(".sell");
  sells.forEach((el, i) => {
    setTimeout(() => {
      setTimeout(() => {
        el.style.background = "green";
      }, 20);
      el.innerHTML = puzzlestr[i];
      el.style.background = "red";
    }, (i + 1) * 50);
  });
};

for (let i = 0; i < 81; i++) {
  let sell = document.createElement("div");
  sell.classList.add("sell");
  field.appendChild(sell);
}

startBtn.addEventListener("click", Fill);
startBtnPlay.addEventListener("click", () => {
  let puzzle = sudokuParse(document.querySelector("input").value);
  sudokuSolver(puzzle);
});
