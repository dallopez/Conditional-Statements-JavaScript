//ask for 1st number in prompt
num1 = prompt("enter a number ");

//If input is not a number
if(isNaN(num1))
//shows error
console.log("Input is not a number");
else{

//ask for operator in prompt
op = prompt("Enter an operator (+, -, *, / ");
//If not valid operator
if(op !== "+" && op != "-" && op !== "*" && op !== "/" && op !== "%"){
//shows error
console.log("Input is not an operator")
}else{

//ask for 2nd number in prompt
num2 = prompt("enter another number ");
//Converts inputs to numbers
var n1 = Number(num1);
var n2 = Number(num2);
//If second input is not a number
if(isNaN(num2)){
//shows error
console.log("Input is not a number.");
}
else if(op === "+")
//If operator is '+' performs addition
console.log("The answer is: " + (n1 + n2));
else if(op === "-")
//If operator is '-' performs subtraction
console.log("The answer is: " + (n1 - n2));
else if(op === "*")
//If operator is '*' performs product
console.log("The answer is: " + (n1 * n2));
else if(op === "/")
//If operator is '/' performs division
console.log("The answer is: " + (n1 / n2));
}
  
}