function random() {
  return Math.ceil(Math.random() * 9);
}
// функция random() генерирует случайные числа в диапазоне от 1 до 9 включительно

function check() {
  let arr = [];
  for (let i = 0; i < 150; i++) {
    arr.push(random());
  }
  return arr.sort().filter((x, i, arr) => x !== arr[i + 1]).length;
}
// функция check() создаёт массив из 150 случайных чисел, сгенерированных функцией random(),
// а затем фильтует полученный массив от повторяющихся чисел
// и возвращает количество только разных чисел

let newArr = [];
for (let i = 0; i < 100000; i++) {
  newArr.push(check());
}
console.log(Math.min(...newArr), Math.max(...newArr));
// проверяем какое минимальное и максимальное количество только разных чисел
// вернёт функция check(), если запустить её 100.000 раз
