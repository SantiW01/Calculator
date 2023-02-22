const add = function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};
const subtract = function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};
const multiply = function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};
const divide = function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
};

let numberArray = [];
let count = 0;
let buttonPressed = false;

function MakeOperation(operate, firstNumber, secondNumber) {
  switch (operate) {
    case "+":
      add(firstNumber, secondNumber);
      break;
    case "-":
      subtract(firstNumber, secondNumber);
      break;
    case "*":
      multiply(firstNumber, secondNumber);
      break;
    case "/":
      divide(firstNumber, secondNumber);
      break;
  }
}

function DisplayNumber(number) {
  if (count < 8) {
    numberArray.push(number);
    count += 1;
  }
  document.querySelector(".calculator_screen_number").innerHTML =
    numberArray.join("");

  return numberArray.join("");
}

DisplayNumber();
