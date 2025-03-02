// Calculate the Body Mass Index (BMI)of two variables inputby the user , where
// BMI = weight / (height)^2

let weight = parseFloat(prompt("Enter your Weight: "));
let height = parseFloat(prompt("Enter your Height: "));

bmi = weight / (height * height);
console.log("your bmi is : ", bmi.toFixed(2));

if(bmi < 18.5){
    console.log("you are underweight.");
}
else if (bmi >= 18.5 && bmi < 24.9){
    console.log("you have a normal weight.");

}
else if (bmi >=25 && bmi < 29.9){
    console.log("you are over weight");
}
else{
    console.log("you are obese.");
}