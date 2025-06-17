var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var operatorInput = document.getElementById('operator');
var resultInput = document.getElementById('result');
var calculateBtn = document.getElementById('Result');
var clearBtn = document.getElementById('clear');

calculateBtn.addEventListener('click', function() {
  var num1 = parseFloat(num1Input.value);
  var num2 = parseFloat(num2Input.value);
  var op = operatorInput.value.trim();
  var result;


  switch (op) {
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
      if (num2 === 0) {
        alert("Error: Division by zero");
        result = '';
      } else {
        result = num1 / num2;
      }
      break;
    case '%':
      if (num2 === 0) {
        alert("Error: Division by zero");
        result = '';
      } else {
        result = num1 % num2;
      }
      break;
    default:
      alert("Invalid operator");
      result = '';
  }

  resultInput.value = result;
});

clearBtn.addEventListener('click', function() {
  num1Input.value = '';
  num2Input.value = '';
  operatorInput.value = '';
  resultInput.value = '';
});

