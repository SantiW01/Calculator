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
