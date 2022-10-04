const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const td = document.getElementsByClassName('item');
const cleanBtn = document.getElementById('clean');
const solveBtn = document.getElementById('btnTwo');
let str;

btn1.addEventListener('click', () => {
  str = str1;
  for (let i = 0; i < str1.length; i++) {
    td[i].innerText = str1[i];
  }
});

btn2.addEventListener('click', () => {
  str = str2;
  for (let i = 0; i < str2.length; i++) {
    td[i].innerText = str2[i];
  }
});

btn3.addEventListener('click', () => {
  str = str3;
  for (let i = 0; i < str3.length; i++) {
    td[i].innerText = str3[i];
  }
});

btn4.addEventListener('click', () => {
  str = str4;
  for (let i = 0; i < str4.length; i++) {
    td[i].innerText = str4[i];
  }
});

btn5.addEventListener('click', () => {
  str = str5;
  for (let i = 0; i < str5.length; i++) {
    td[i].innerText = str5[i];
  }
});

btn6.addEventListener('click', () => {
  str = str6;
  for (let i = 0; i < str6.length; i++) {
    td[i].innerText = str6[i];
  }
});

cleanBtn.addEventListener('click', () => {
  window.location.reload();
});

solveBtn.addEventListener('click', () => {
  const arr = document.getElementsByClassName('item');
  const res = solve(str);
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].innerHTML = res[i];
  }
});


