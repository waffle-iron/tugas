/*
Tugas 2

Ubahlah anonymous functions dibawah ini menjadi ES6 Arrow Function!

  const multiply = function (num1, num2) {
    return num1 * num2;
  }

  const divide = function (num1, num2) {
    return num1 / num2;
  }

  const doubleMe = function (num) {
    return num * 2;
  }

  console.log(multiply(5,2));
  console.log(divide(10,2));
*/
"use strict";

const multiply =  (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const doubleMe = num => num * 2;

console.log(multiply(5,2));
console.log(divide(10,2));