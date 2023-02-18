var myVar = 5;
console.log(myVar);

var myString = "Hello World!.";
alert(myString);

let num1 = 5;
let num2 = 10;
let userNum = prompt("Enter a Number")
console.log(num1 + num2 + parseFloat(userNum))


var myBoolean = true;
if (myBoolean) {
    console.log("It's True")
}
else {
    console.log("It's False")
}

const number = 7;
if (number % 2 === 0) {
    console.log("even")
}
else {
    console.log("odd")
}

const string1 = "Hello";
const string2 = "world";
const results = string1 + " " + string2;

console.log(results);


const number1 = 2;
const number2 = 5;
let result = number1 * number2;
console.log(result)

const password = prompt("Enter password:");

if (password === "password") {

    alert("Access granted");
} else {

    alert("Access denied");
}



const numb1 = parseFloat(prompt("Enter the first number:"));
const numb2 = parseFloat(prompt("Enter the second number:"));
const numb3 = parseFloat(prompt("Enter the third number:"));

const largest = Math.max(numb1, numb2, numb3);


console.log("The largest number is: " + largest);



const strings1 = prompt("Enter the first string:");
const strings2 = prompt("Enter the second string:");

if (strings1 === strings2) {

  alert("The strings are equal");
} else {
  alert("The strings are not equal");
}
