// Aliza has got 40 Marks in Physics, 78 in Chemistry and 82 in Maths. Take these marks as
// input from user and store them in dictionary with "key as subject name" and "value as marks". By
// accessing data stored in dictionary, print average of his marks and also print the name of subject in
// which she got highest marks 

let marks = {
    physics: parseInt(prompt("Enter physics marks")),
    chemistry: parseInt(prompt("Enter chemistry marks")),
    maths: parseInt(prompt("Enter maths marks")),
};

let totalmarks = marks.physics + marks.chemistry + marks.maths;
let average = totalmarks/3;

let highestSubject = Object.keys(marks).reduce((max, subject) => marks[subject] > marks[max] ? subject : max);

console.log("Average Marks:", average.toFixed(2)); // 2 decimal tak round off
console.log("Highest Marks in:", highestSubject);