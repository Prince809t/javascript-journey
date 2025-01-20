

let random = Math.random()

let a = prompt("Enter your first number : ")
let b = prompt("Enter your second number : ")
let c = prompt("Enter operation : ")
 

    let obj ={
         "+": "-" ,
        "*": "+" ,
         "-": "/" ,
        "/": "**" ,        
}

if (random > 0.1) {
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}
else{
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

