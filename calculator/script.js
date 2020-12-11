
const operands = Array.from(document.querySelectorAll(".numbers"))
const operators = Array.from(document.querySelectorAll(".operators"))
const display = document.querySelector(".display")
const equals = document.querySelector(".equals")
const ac = document.getElementById("ac")


let currentOperand = ""
let secondOperand = ""
let currentOperator = "";



//function for clicking and receiving number
function getOperand1() {
    operands.map(e => {
        e.addEventListener("click",() =>{
            console.log(e.textContent)
            display.textContent += e.textContent
            currentOperand += Number(e.textContent)
            //add some sort of updater for currentoperand stored value??
        }) 
    })
}

function getOperand2() {
    operands.map(e => {
        e.addEventListener("click",() =>{
            console.log(e.textContent)
            display.textContent += e.textContent
            secondOperand += e.textContent
            console.log(secondOperand)
        }) 
    })
   
}

function getOperator() {
    operators.map(e => {
        e.addEventListener("click", () => {
            console.log(e.textContent)
            currentOperator = e.textContent
            getOperand2()
        })
    })
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

function operate(operand, a, b) {
    switch(operand) {
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


function clearAll() {
    currentOperand = "";
    secondOperand = "";
    currentOperator = "";
    display.textContent = ""
}

//run stuff//
getOperand1()

operators.map(e =>{
    e.addEventListener("click", ()=> {
          getOperand2()
    })
  
})

ac.addEventListener('click', clearAll)

equals.addEventListener('click', () => {
    console.log("operand ONE " + currentOperand)
    console.log("operand TWO " + secondOperand)
    console.log(operate(currentOperator, Number(currentOperand), Number(secondOperand)))
    //console.log(operate("/", 20, 10))
    getOperand1()
})