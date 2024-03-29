const add = function add(firstNumber, secondNumber) {
  result = Number(firstNumber) + Number(secondNumber);
  document.querySelector(".calculator_screen_number").innerHTML = result;
  return result;
};
const subtract = function subtract(firstNumber, secondNumber) {
  result = Number(firstNumber) - Number(secondNumber);
  document.querySelector(".calculator_screen_number").innerHTML = result;
  return result;
};
const multiply = function multiply(firstNumber, secondNumber) {
  result = Number(firstNumber) * Number(secondNumber);
  document.querySelector(".calculator_screen_number").innerHTML = result;
  return result;
};
const divide = function divide(firstNumber, secondNumber) {
  result = Number(firstNumber) / Number(secondNumber);
  document.querySelector(".calculator_screen_number").innerHTML = result;
  return result;
};

let firstNumberArray = [];
let secondNumberArray = [];
let count = 0;
let buttonPressed = false;
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let operate = "";

document.querySelectorAll(".calcualtor_number_button").forEach((e) => {
  e.addEventListener("click", () => {
    if (buttonPressed == false) {
      if (count < 8) {
        firstNumberArray.push(e.innerHTML);
        firstNumber = firstNumberArray.join("");
        document.querySelector(".calculator_screen_number").innerHTML =
          firstNumber;
        count++;
      }
    } else {
      count = 0;
      if (count < 8) {
        secondNumberArray.push(e.innerHTML);
        secondNumber = secondNumberArray.join("");
        document.querySelector(".calculator_screen_number").innerHTML =
          secondNumber;
        count++;
      }
    }
  });
});

document.querySelectorAll(".calcualtor_operator_button").forEach((e) => {
  e.addEventListener("click", function () {
    buttonPressed = true;
    operate = e.innerHTML;
  });
});

document
  .querySelector(".calcualtor_calculate_button")
  .addEventListener("click", function () {
    switch (operate) {
      case "+":
        firstNumber = add(firstNumber, secondNumber);
        secondNumberArray = [];
        secondNumber;
        break;
      case "-":
        firstNumber = subtract(firstNumber, secondNumber);
        secondNumberArray = [];
        break;
      case "*":
        firstNumber = multiply(firstNumber, secondNumber);
        secondNumberArray = [];
        break;
      case "/":
        if (secondNumber == 0) {
          document.querySelector(".calculator_screen_number").innerHTML =
            "Error!";
        } else {
          firstNumber = divide(firstNumber, secondNumber);
          secondNumberArray = [];
        }
        break;
      default:
        break;
    }
  });

document
  .querySelector(".calculator_clear_button")
  .addEventListener("click", function () {
    document.querySelector(".calculator_screen_number").innerHTML = 0;
    firstNumberArray = [];
    secondNumberArray = [];
    result = 0;
    firstNumber = 0;
    secondNumber = 0;
    buttonPressed = false;
    count = 0;
  });

document
  .querySelector(".calculator_delete_button")
  .addEventListener("click", function () {
    if (!buttonPressed) {
      let convertFirstNumberIntoArray = firstNumber.split("");
      deleteLastNumber = convertFirstNumberIntoArray.pop();
      firstNumber = convertFirstNumberIntoArray.join("");
      document.querySelector(".calculator_screen_number").innerHTML =
        firstNumber;
    } else {
      let convertSecondNumberIntoArray = secondNumber.split("");
      deleteLastNumber = convertSecondNumberIntoArray.pop();
      secondNumber = convertSecondNumberIntoArray.join("");
      document.querySelector(".calculator_screen_number").innerHTML =
        secondNumber;
    }
  });
