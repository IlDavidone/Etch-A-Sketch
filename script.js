const colorSelector = document.querySelector(".color-selector");
const randomColor = document.querySelector(".random-colors");
const eraser = document.querySelector(".eraser");
const clearGrid = document.querySelector(".clear");
const gridSizeSelector = document.querySelector(".grid-size-selector");
const grid = document.querySelector(".grid");
const testbutton = document.querySelector(".test-button");

let value = 4;

function createGridVertical(value) {
    const gridElementVertical = document.createElement("div");
    gridElementVertical.classList.add("vertical-grid");
    grid.appendChild(gridElementVertical);
}

function createGridElements(value) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridElementVertical.appendChild(gridCell);
}

if(value != 0) {
    for(i = 0; i < value; i++) {
        createGridVertical(value);
        createGridElements(value);
    }
}

gridSizeSelector.addEventListener("click", () => {
    value = prompt("Enter your preferred grid size (ex: 16)");
})


