// Write a Python program to create the multiplication table (from 1 to 10) of a number.

let num = parseInt(prompt("Input a Number:"));

for  (let i = 1; i <= 10; i++){
    console.log(num + "x" + i + "=" + (num * i));
}

