const container = document.querySelector('#container');
const row = document.querySelector(".row");
const rows = document.querySelectorAll(".row");
const elementToResize = document.getElementById('#body');
const mySlider = document.querySelector(".mySlider");
const sliderValue = document.querySelector(".sliderValue");
let mousedown = false;

function resizeToWindow() {
    const WindowWidth = window.innerWidth;
    const WindowHeight = window.innerHeight;
    elementToResize.style.width = newWidth + 'px';
    elementToResize.style.height = newHeight + 'px';
}
function createRow(Number) {
    let div = document.createElement('div');
    div.classList.add('row');
    container.appendChild(div);
    for(let i = 0; i < Number; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        div.appendChild(box);
    }
}
function createPad(Number) {
for(let i = 0; i < Number; i++){
    createRow(Number);
    }
}

function deletePad() {
    rows.remove();
}

container.addEventListener("mousedown", function(e) {
    mousedown = true;
    container.addEventListener("mousemove", function(e) {
        if (mousedown && e.target.classList.contains("box")) { // Check if mouse is down
            const hoveredElement = document.elementFromPoint(e.clientX, e.clientY); // Corrected typo (event.clienX -> e.clientX)
            if (hoveredElement) {
                hoveredElement.style.backgroundColor = "black";
                }
            }
        });
});

// Add mouseup event listener to stop tracking when mouse button is released
document.addEventListener("mouseup", function(e) {
    mousedown = false; // Reset mousedown flag
});

mySlider.addEventListener("input", function(e){
    sliderValue.textContent = mySlider.value;
    createPad(mySlider.value);
})

