const container = document.querySelector(".container")

const btnSubmit = document.querySelector(".userInput button");
/*
function getSquares(){
    const desiredSquares = document.querySelector(".userInput input").value
    return console.log(desiredSquares)
}
*/

//on submit button click this happens
btnSubmit.addEventListener('click', ()=> {
    container.innerHTML= ""
    const desiredSquares = document.querySelector(".userInput input").value
    getSquares(desiredSquares)
})

function getSquares(x){
if (x <= 100) {
for (i = 0; i < (x * x); i++){
 let newDiv = document.createElement("div");
    newDiv.classList.add("square")
    container.appendChild(newDiv)
    }
} else return
}