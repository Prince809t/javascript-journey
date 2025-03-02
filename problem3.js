
let n = parseInt(prompt("Kitne numbers check karne hain?"));  // User se number count lena
let count = 0;  // Even numbers ka count

for (let i = 1; i <= n; i++) {
    let num = parseInt(prompt("Number " + i + " enter karein:"));
    
    if (num % 2 === 0) {  // Agar even hai toh count badhao
        count++;
    }
}

console.log("Total even numbers:", count);
