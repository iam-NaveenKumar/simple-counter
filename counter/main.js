let count = 0;

let value = document.querySelector(".value");

let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");

increase.addEventListener("click", () => {
  num("increase");
  display();
});

decrease.addEventListener("click", () => {
  num("decrease");
  display();
});

reset.addEventListener("click", () => {
  num("reset");
  display();
});

function num(btn_value) {
  if (btn_value === "increase") {
    count++;
  } else if (btn_value === "decrease") {
    count--;
  } else {
    count = 0;
  }
}

function display() {
  value.innerHTML = count;
  if (count > 0) {
    value.style.color = "green";
  } else if (count < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "black";
  }
}
