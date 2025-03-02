// Write a program that takes a list of numbers as input and returns the sum of all the elements in the 
// list.
let n = parseInt(prompt("Kitne numbers ka Sum chaiye?"));
let sum = 0;
for(let i = 1; i <= n; i++){
    let num = parseInt(prompt("Number" + i + "Enter Karein:"));
    sum += num;
}
console.log("Total Sum is: ", sum);