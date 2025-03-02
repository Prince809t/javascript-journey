// Write a program that accepts a word from the user and reverses it using loop. For example, 
// ‘Pakistan’ becomes ‘natsikaP’

let word = prompt("Enter a word:");
// User se word input lena


// Ek khali string banayi jisme reversed word store hoga
let reversedWord = "";

// Loop chalakar last se pehla letter tak copy karna
for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i]; // Har letter ko add karna
}

// Output print karna
console.log("Reversed word:", reversedWord);


