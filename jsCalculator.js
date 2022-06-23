// program for a simple calculator
document.body.style.backgroundColor="lightbule";

// take the first number
const number1 = parseInt(prompt('Enter first number: '));

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take a second number
const number2 = parseInt(prompt('Enter second number: '));



let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
  
    
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
alert(`${number1} ${operator} ${number2} = ${result}`);
