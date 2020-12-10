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


