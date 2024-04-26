/*
    1 Create a function that will return the sum 3 numbers
    2 Create a function that will return the difference of the 2 numbers
    3 Create a function that will return the product of the 2 numbers
    4 Create a function that will return the average of the 2 numbers
*/

let num1 = 13;
let num2 = 17;
let num3 = 12;

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(`Sum of 3 Numbers: ${sum(num1, num2, num3)}`);

function difference(num1, num2) {
    return num1 - num2;
}
console.log(`Difference of 2 Numbers: ${difference(num1, num2)}`);

function product(num1, num2) {
    return num1 * num2;
}
console.log(`Product of 2 Numbers: ${product(num1, num2)}`);

function average(num1, num2) {
    return (num1 + num2) / 2;
}
console.log(`Average of 2 Numbers: ${average(num1, num2)}`);