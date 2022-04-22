// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log('first changes');
}

// Функция принимает на вход "готовую" доску, 
// индекс "пустого" элемента и оставшиеся
// возможные варианты для этого места.
// В процессе проверки, вычитает из массива возможных вариантов те цифры, что есть уже по вертикали.
// На выход, ессли остался только один возможные вариант,
// тогда возвращает доску и заново запускает runner().
// Если остался массив возможных вариантов, вызывает поиск по группам и 
// отдает доску, индексы и оставшиеся возможные варианты.
function checkVertical(board, indX, indY, options){
  for (y = 0; y < board.length; y += 1){
      let newOptions = options.map((el) => {})
      if (options.length === 1) {
        board[indY][indX] = options[0]
      }
  }
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
