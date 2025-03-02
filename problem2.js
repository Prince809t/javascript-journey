/*
Write a programm to make a simple calculator performing a four basic opertion(+,-,*,/) on two number input by user the 
following condiition must be satisfied :
a) A '+' sign must not be used for addition .
b) you can only use a maximum of 3 varaibles .
c)Your program should ask the user which operation he/she wants to perform and gives the 
output accordinglly.
*/

let num1 = parseFloat(prompt("Enter your first number: "));
let op = prompt("Enter your operation (+ , - , * , /):");
let num2 = parseFloat(prompt("Enter your second number: "));

if(op === "add" || op === "addition"){
    console.log(num1 - (-num2));
}
else if (op === "-"){
    console.log(num1 - num2);
}
else if (op === "*"){
    console.log(num1 * num2);
}
else if (op === "/"){
    if(num2 !== 0){
        console.log(num1 / num2);
    }
    else{
        console.log("Error: zero not be divide");
    }
}
else{
    console.log("Error : you can only use this opertor(+ , - , * , /)");
}