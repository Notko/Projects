
const container = document.querySelector(".container")
const btnSubmit = document.querySelector(".userInput #submit");
const btnColours =document.querySelectorAll(".colour-choice")
let colour = "black"

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
  }
};


btnColours.forEach(btnColour => {
  btnColour.addEventListener('click', () =>{
    colour = btnColour.dataset.colour
    console.log(colour)
  
  })
})



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
  } else {
  }
}
/*
function changeColour(){
  if (colour === "black"){
    container.addEventListener('mouseover', function(e){
      if (e.target && e.target.nodeName == "DIV") {
        e.target.classList.replace("square", "black") 
      }
    })
  } 
}

container.addEventListener('mouseover', changeColour)
*/


container.addEventListener('mouseover', function(e){
  if (colour === "black") {
    if (e.target && e.target.nodeName == "DIV") {
   // e.target.classList.remove("rainbow")
    e.target.style.backgroundColor = "black"
    }
  }
  if (colour === "rainbow") {
    if (e.target && e.target.nodeName == "DIV") {
    //e.target.classList.remove("black")
    e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
  }
})
//make them replace , find way to clear all classes. remove?



btnSubmit.addEventListener('click', updateContainer)



createGrid();