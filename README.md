## TODO

---

### Сперва поймем как вообще работает игра судоку

- представляет собой решетку из клеток 3×3 и содержит цифры от 1 до 9

- не должны повторяться по горизонтали
- не должны повторяться по вертикали
- не должны повторяться по горизонтали
- не должны повторяться в квадрате 3х3

---

### Далее сделаем норм структуру проекта - ассеты, в них текстовый файл, функции по отдельным компонентам (чтоб научиться всем работать с импортами и чтоб каждая функция выполняла только одну абстрактную задачу)

---

### Вытаскиваем из .txt файла (лежит в ассетах) строки и переводим в массивы-матрицы (read.js)

- всего 15 строк - 15 двумерных массивов 9х9
- соответственно делим каждую строку (отделяем через \n) на 9?
- в итоге должны получить массив и в нем 9 массивов (строк)
- все массивы записываем в файл arraysFromAssets.js
- используем fs - зайдем в прошлые проекты недели - чекнем как делать

---

### solve - пишем алгоритм тут, основную логику всю

---

### isSolved - проверяем решили / нет

---

### если isSolved выернет true - prettyBoard принимает из solved итоговую доску и красиво вернет в консоль результат
