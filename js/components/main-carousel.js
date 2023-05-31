const btn_right = document.querySelector(".button-arrow.-right");  // seletor de classe como css
const btn_left = document.querySelector(".button-arrow.-left"); 
const elements = document.querySelector(".elements");

let pixels = 10
btn_right.addEventListener("click", function() {
    pixels = pixels + 100
    elements.style = `transform: translateX(${pixels}px)`;
});

btn_left.addEventListener("click", function() {
    pixels = pixels - 100
    elements.style = `transform: translateX(${pixels}px)`;
});
