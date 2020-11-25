
const container = document.querySelector(".container")
const btnSubmit = document.querySelector(".userInput button");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
  }
};



function updateContainer(){
    const desiredSquares = document.querySelector(".userInput input").value 
    container.innerHTML= ""
    container.style.setProperty(
        "grid-template-columns", `repeat(${desiredSquares}, 1fr)`
    )
    container.style.setProperty(
        "grid-template-rows", `repeat(${desiredSquares}, 1fr)`
    )
    getSquares(desiredSquares)
}

function getSquares(x){
if (x <= 64 && x >= 16) {
for (i = 0; i < (x * x); i++){
 const newDiv = document.createElement("div");
    newDiv.classList.add("square")
    container.appendChild(newDiv)
    }
  } 
}

container.addEventListener('mouseover', function(e){
  if (e.target && e.target.nodeName == "DIV") {
   e.target.classList.replace("square", "black") 
  }
})



btnSubmit.addEventListener('click', updateContainer)


createGrid();