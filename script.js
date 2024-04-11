const container = document.querySelector('#container');
const row = document.querySelector(".row");
const rows = document.querySelectorAll(".row");
const elementToResize = document.getElementById('#body');
const mySlider = document.querySelector(".mySlider");
const sliderValue = document.querySelector(".sliderValue");
const deleteButton = document.querySelector("#delete");
let mousedown = false;

function resizeToWindow() {
    const WindowWidth = window.innerWidth;
    const WindowHeight = window.innerHeight;
    elementToResize.style.width = newWidth + 'px';
    elementToResize.style.height = newHeight + 'px';
}

function createPad(Number) {
    for (let i = 0; i < Number; i++) {
        let div = document.createElement('div');
        div.classList.add('row');
        container.appendChild(div);
        for (let i = 0; i < Number; i++) {
            let box = document.createElement('div');
            box.classList.add('box');
            div.appendChild(box);
        }
    }
}

function deletePad() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

container.addEventListener("mousedown", function (e) {
    mousedown = true;
    container.addEventListener("mousemove", function (e) {
        if (mousedown && e.target.classList.contains("box")) { // Check if mouse is down
            const hoveredElement = document.elementFromPoint(e.clientX, e.clientY); // Corrected typo (event.clienX -> e.clientX)
            if (hoveredElement) {
                hoveredElement.style.backgroundColor = "black";
            }
        }
    });
});

// Add mouseup event listener to stop tracking when mouse button is released
document.addEventListener("mouseup", function (e) {
    mousedown = false; // Reset mousedown flag
});

mySlider.addEventListener("input", function (e) {
    deletePad();
    let value = mySlider.value;
    sliderValue.textContent = "[ " + value + " x " + value + " ]";
    createPad(value);
})


button.addEventListener("click", function (e) {
    createPad(value);
})

deleteButton.addEventListener("click", function (e) {
    deletePad();
})

document.addEventListener("DOMContentLoaded", function (e) {
    createPad(64);
})