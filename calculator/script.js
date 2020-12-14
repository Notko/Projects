
const numbers = Array.from(document.querySelectorAll(".numbers"))
    numbers.map(number => {
        number.addEventListener("click", () => {
            getNumber(number)
        })
    })
const operators = Array.from(document.querySelectorAll(".operators"))
    operators.map(operator => {
        operator.addEventListener("click", () => {
            currentOperator = operator.textContent
            console.log(currentOperator)
        })
    })
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");  
const ac = document.getElementById("ac")


let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let sum = "";
let sumB = ""
display.textContent = "0"



function getNumber(e) {
    if (currentOperator === "" && sum === "") {
        firstNumber += e.textContent
       console.log(firstNumber)
       display.textContent = firstNumber   
    }
    else if (currentOperator !== "") {
        secondNumber += e.textContent
        console.log(secondNumber)
        display.textContent = ""
        display.textContent = secondNumber
    }
    if (firstNumber !== "" && secondNumber !== "" && currentOperator !== "" && sum === ""){
        sumB = operate(currentOperator, Number(firstNumber), Number(secondNumber))
        console.log("sumb" + sumB)
        if (sumB !== 0) {
            firstNumber = sumB
            display.textContent = sumB
            secondNumber = ""
        }
    }
}    



///////////////////////////////////////
//functions for all math operations>>//
//////////////////////////////////////

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b)
            break
        case "-":
            return subtract(a, b)
            break
        case "*": 
            return multiply(a, b)
        case "/":
            return divide(a, b)
            break

    }
}

//console.log(operate("+", 10, 15))

ac.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
    sum = "";
    sumB = ""
    display.textContent = "0"
})


equals.addEventListener("click", () => {
    sum = operate(currentOperator, Number(firstNumber), Number(secondNumber))
    console.log(sum)
    display.textContent = sum
    currentOperator = ""
    if (sum !==undefined) {
         firstNumber = sum 
     } else {
         firstNumber = 0
     }
     sum = ""
     secondNumber = ""
    console.log("firstNo" + ":" + firstNumber)
    console.log("secondNo" + ":" + secondNumber)
});