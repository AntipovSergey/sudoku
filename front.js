let field = document.createElement("div");
document.body.appendChild(field);
let startBtn = document.createElement("button");
startBtn.textContent = "Start";
startBtn.classList.add("start-btn");
document.body.appendChild(startBtn);
field.classList.add("field");

for (let i = 0; i < 81; i++) {
  let sell = document.createElement("div");
  sell.textContent = 1;
  sell.classList.add("sell");
  field.appendChild(sell);
}

let input = document.querySelector;
