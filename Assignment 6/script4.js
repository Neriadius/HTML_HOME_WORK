//task 5

let container = document.querySelector(".container");
container.onmouseover = container.onmouseout = handler;

function handler(event) {
    document.querySelector(".container")
    if (event.type == 'mouseover') {
    event.target.style.background = 'pink'
  }
  if (event.type == 'mouseout') {
    event.target.style.background = ''
  }
};

//task 6

let input = document.getElementById("textInput");
let output = document.getElementById("output");

input.addEventListener("keyup", function() {
  output.innerHTML.textContent = "You typed: " + input.value;
}
);

//task 7

function setOp(operator) {
  op = operator;
}

function pressE() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Enter numbers";
  } else {
    switch(op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : "Error: division by zero";
        break;
      case 'C':
        document.getElementById("num1").innerHTML = "0";
        num1 = 0;
        document.getElementById("num2").innerHTML = "0";
        num2 = 0;
      default:
        result = "Select operator";
    }
  }

  document.getElementById("result").innerHTML = result;
}
