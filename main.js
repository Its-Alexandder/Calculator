
let input = document.querySelector(".pantalla");
let equal = document.getElementById("igual");
let clear = document.querySelector(".operator-btn:nth-child(1)");
let erase = document.querySelector(".operator-btn:nth-child(2)");

window.onload = () => {
  input.textContent = "0";
};

function appendToDisplay(value) {
  if (input.textContent === "0" || input.textContent === "MathERROR") {
    input.textContent = "";
  }
  input.textContent += value;
}

function clearDisplay() {
  input.textContent = "0";
}

function deleteDigit() {
  input.textContent = input.textContent.slice(0, -1);
  if (input.textContent === "") {
    input.textContent = "0";
  }
}

equal.addEventListener("click", () => {
  try {
    let result = eval(input.textContent.replace('x', '*').replace('÷', '/'));
    if (Number.isNaN(result) || !Number.isFinite(result)) {
      input.textContent = "Error";
    } else {
      input.textContent = result;
    }
} catch (error) {
  input.textContent = "MathERROR";
}
});

clear.addEventListener("click", clearDisplay);
erase.addEventListener("click", deleteDigit);

document.querySelectorAll(".numero, .operator-btn:not(:nth-child(-n+2))").forEach((button) => {
button.addEventListener("click", () => {
  appendToDisplay(button.textContent);
});
});
