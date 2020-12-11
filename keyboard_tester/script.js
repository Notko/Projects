<<<<<<< HEAD
const container = document.querySelector('.container');


for (i = 0; i < 101; i++) {
    const przycisk = document.createElement("div")
    container.appendChild(przycisk)
}
=======
/*
map divs in pattern of keyboard
make each div correspond to a keyboard in id or data and innerHTML
add keyevent to each div that changes colour from white to red if input is detected. leave it as red.
*/

const buttons = document.querySelectorAll(".container button")
let currentKey = ""




document.addEventListener("keydown", e => {
    console.log(e.key);
    if (e.key) {
        console.log("hi")
       buttons.forEach(button => {
           if (button.innerHTML === e.key) {
            button.classList.add("working")
           }
           
       })
    }
})


>>>>>>> 3448f89389697ce10e0f4f2a8660fb85cda233d3
