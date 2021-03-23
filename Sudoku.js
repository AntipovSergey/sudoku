// создаем класс Sudoku, который будет отвечать за нашу игру и за само поле, игру, приложение
// нужен конструктор, который будет принимать аргумент, который поможет нам инициировать наш судоку-объект

class Sudoku {
  constructor(initString = '000000000000000000000000000000000000000000000000000000000000000000000000000000000') {
 
    const startValues = initString.split('').filter((x) => '1234567890'.includes(x)).map((x) => Number(x));

    console.log(startValues);

    // создадим 81 ячейку
    this.body = [];
    let idCounter = 1;
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        this.body.push({
          id: idCounter,
          x,
          y,
          s: parseInt(y / 3) * 3 + parseInt(x / 3),
          number: startValues[idCounter - 1], // 0, если мы не знаем какой элемент в ячейке
          selected: false,
          supported: false,
          started: false,
          important: false,
          error: false,
        });
        idCounter++;
      }
    }
  }

  // isSolved();
  fixStarted() {
    for (let i = 0; i < 81; i++) {
      if (this.body[i].number != 0) {
        this.body[i].started = true;
      }
    }
  }

  // быстрый доступ к строке, столбцу, сегменту
  getRow(n) { // n - номер строки, функция должна возвращать массив из 9 элементов строки n // ИЛИ IF Y === N -> push
    const row = [];
    for (let i = 0; i < 9; i++) {
      row.push(this.body[9 * n + i]); // находит элемент  9 * n и добавляет его и i++....
    }
    return row;
  }

  getColumn(n) { // n - номер столбца (счет от 0), функция должна возвращать массив из 9 элементов столбца n // ИЛИ IF X === N -> push
    const column = [];

    for (let i = 0; i < 9; i++) {
      column.push(this.body[i * 9 + n]);
    }
    return column;
  }

  getSegment(n) { // n - номер сегмента, функция должна возвращать массив из 9 элементов сегмента n // все s === n;
    const segment = [];

    const x = n % 3;
    const y = parseInt(n / 3);

    for (let dy = 0; dy < 3; dy++) { // отклонение от y
      for (let dx = 0; dx < 3; dx++) { // отклонение от x
        segment.push(this.body[
          y * 27 + dy * 9 + x * 3 + dx
        ]);
      }
    }
    return segment;
  }

  keydownHandler(event, cell) {
    if ('1234567890'.includes(event.key)) {
      cell.number = parseInt(event.key);
    } else if (['Backspace', 'Delete'].includes(event.key)) {
      if (cell.started === true) {
        event.preventDefault();
      } else cell.number = 0;
    }
    for (const item of this.body) {
      if (item.number === cell.number) {
        cell.important = true;
        item.important = true;
      }
    }

    event.preventDefault();
    this.viewUpdate();
  }

  focusHandler(event, cell) {
    cell.selected = true;
    console.log(cell);

    for (const item of this.getRow(cell.y)) {
      item.supported = true;
    }
    for (const item of this.getColumn(cell.x)) {
      item.supported = true;
    }
    for (const item of this.body) {
      if (item.number === cell.number) {
        cell.important = true;
        item.important = true;
      }
    }
    this.viewUpdate();
  }

  blurHandler(event, cell) {
    cell.selected = false;

    for (const item of this.getRow(cell.y)) {
      item.supported = false;
    }
    for (const item of this.getColumn(cell.x)) {
      item.supported = false;
    }
    for (const item of this.body) {
      cell.important = false;
      item.important = false;
    }
    this.viewUpdate();
  }

  getHTML(size) { // создаем виртуальный DOM
    this.fixStarted();
    for (const item of this.body) { // item -ячейка
      const inputElement = document.createElement('input');
      inputElement.classList.add('sudoku-cell');
      inputElement.setAttribute('type', 'text');

      inputElement.addEventListener('keydown', (event) => this.keydownHandler(event, item));
      inputElement.addEventListener('focus', (event) => this.focusHandler(event, item));
      inputElement.addEventListener('blur', (event) => this.blurHandler(event, item));

      item.element = inputElement;
    }

    const rootElement = document.createElement('div');
    rootElement.classList.add('sudoku-game');
    rootElement.style.width = `${size}px`;
    rootElement.style.height = `${size}px`;
    rootElement.style.fontSize = `${size / 20}px`;

    for (let s = 0; s < 9; s++) {
      const segmentElement = document.createElement('div');
      segmentElement.classList.add('sudoku-segment');

      for (const cell of this.getSegment(s)) { // cell -ячейка
        segmentElement.append(cell.element);
      }

      rootElement.append(segmentElement);
    }
    this.viewUpdate();

    return rootElement;
  }

  viewUpdate() {
    for (const cell of this.body) {
      cell.element.classList.remove('supported-cell', 'selected-cell', 'important-cell');
      cell.element.value = cell.number ? cell.number : '';

      if (cell.supported) {
        cell.element.classList.add('supported-cell');
      }
      if (cell.selected) {
        cell.element.classList.add('selected-cell');
      }
      if (cell.started) {
        cell.element.classList.add('start-cell');
      }
      if (cell.important) {
        cell.element.classList.add('important-cell');
      }
      if (cell.error) {
        cell.element.classList.add('.error');
      }
    }
  }
}

/*
 parseInt(0/3) * 3 = 0
parseInt(1/3) * 3 = 0
parseInt(2/3) * 3 = 0
parseInt(3/3) * 3 = 3
parseInt(4/3) * 3 = 3
parseInt(5/3) * 3 = 3
parseInt(6/3) * 3 = 6
parseInt(7/3) * 3 = 6
parseInt(8/3) * 3 = 6

В целом можно заменить на:
y - y%3
 */
