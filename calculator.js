const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand : false,
  operator: null,
};

function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
//  let display = p.getElementById("screen").innerHTML
  updateDisplay();
}

 function negate() {

}

function number(numb) {
let numbers = document.getElementById("calculator-screen").innerHTML += numb;
console.log("numb");
// To check if numbers appear in console
}

function plus() {

}

function minus() {

}

function times() {

}

function divide() {

}

function percent() {

}
function decimal(dot) {
  if (calculator.waitingForSecondOperand  === true) return;

  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function clear() {

}

function number(numb) {
  let numbers = document.getElementById("calculator-screen").innerHTML += numb;
  console.log("numb");
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = number;
    calculator.waitingForSecondOperand = false;
  } else {
    displayValue === '0' ? number : displayValue + number;
      }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }
  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const currentValue = firstOperand || 0;
    const result = performCalculation[operator] (currentValue, inputValue);
    calculator.displayValue = String(result);
    calculator.displayValue
  }
}

function equal() {
  document.getElementById("equal-sign") == eval(expression.toString());
}
//Nice-to-Haves//
function x2power() {

}

function x3power() {

}

function xypower() {

}
