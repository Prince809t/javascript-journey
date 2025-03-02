// Write a program to take a list and a number input from user and then delete all elements in the list 
// less than that number 

let n = parseInt(prompt("Kitne numbers enter karna chahte hain?")); // List ka size
let numbers = [];  // List store karne ke liye

for (let i = 1; i <= n; i++) {
    let num = parseInt(prompt("Number " + i + " enter karein:"));
    numbers.push(num);  // List me number add karo
}  

let threshold = parseInt(prompt("Kaunse number se chhote elements delete karne hain?"));

// Filter function se list ko update karo
numbers = numbers.filter(num => num >= threshold);

console.log("Filtered List:", numbers);
