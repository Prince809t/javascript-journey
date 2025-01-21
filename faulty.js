


let random = Math.random();

let a = prompt("Enter your first number : ");
let c = prompt("Enter operation (+, -, *, /): ");
let b = prompt("Enter your second number : ");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**", // Exponentiation operator (raises 'a' to the power of 'b')
};

// Faulty operation selection
let faultyOperation = obj[c] || c; // Agar user ne invalid operator diya ho, toh wahi use kare

if (random > 0.1) {
    console.log(`The faulty result is ${a} ${faultyOperation} ${b}`);
    alert(`The faulty result is ${eval(`${a} ${faultyOperation} ${b}`)}`);
} else {
    alert(`The faulty result is ${eval(`${a} ${faultyOperation} ${b}`)}`);
}
