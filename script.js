const DEFAULT_GRID_SIZE = 2;
const DEFAULT_COLOR = '#f1f1f1';

const colorSelector = document.querySelector(".color-selector");
const randomColor = document.querySelector(".random-colors");
const eraser = document.querySelector(".eraser");
const clearGrid = document.querySelector(".clear");
const gridSizeSelector = document.querySelector(".grid-size-selector");
const grid = document.querySelector(".grid");
const testbutton = document.querySelector(".test-button");
const toggleGrid = document.querySelector(".toggle-grid");
const gridCell = document.querySelector(".grid-cell");

let value, colorValue, currentMode;

function defaultGridSize(value) {
    for(let i = 0; i < 2; i++){
        createGridLayout(value);
    }
}

function createGridLayout(value) {
  const gridElementVertical = document.createElement("div");
  gridElementVertical.classList.add("vertical-grid");
  grid.appendChild(gridElementVertical);
  function createGridElements(value) {
    for (u = 0; u < value; u++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell", "grid-cell-border");
      gridCell.addEventListener("mouseover", changeColor);
      gridElementVertical.appendChild(gridCell);
    }
  }
  createGridElements(value);
}

function removeGridChilds() {

    let gridChildCount = grid.childElementCount;

    if(gridChildCount > 0){
    for(i = 1; i <= gridChildCount; i++){
        grid.removeChild(grid.lastChild);
    }}
    else return 0;
}

function changeColor(e) {
    if(e.type == "mouseover"){
        if(currentMode == 1) {
            e.target.style.backgroundColor = colorValue;
        }
        else if(currentMode == 2) {
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        }
        else if(currentMode == 3){
            e.target.style.backgroundColor = '#ffffff';
        }
    };
}

gridSizeSelector.addEventListener("click", () => {
    removeGridChilds();
    value = prompt("Enter your preferred grid size (ex: 16)");
    for (i = 0; i < value; i++) {
        createGridLayout(value);
      }
});

toggleGrid.addEventListener("click", () => {
    const gridCellItems = document.querySelectorAll(".grid-cell");
        for(let i = 0; i < gridCellItems.length; i++){
            gridCellItems[i].classList.toggle("grid-cell-border");
        }
});

colorSelector.addEventListener("click", () => {
    colorValue = document.querySelector(".color-picker").value;
});

colorSelector.addEventListener("click", () => {
    currentMode = 1;
});

randomColor.addEventListener("click", () => {
    currentMode = 2;
});

eraser.addEventListener("click", () => {
    currentMode = 3;
});

clearGrid.addEventListener("click", () => {
    const gridCellItems = document.querySelectorAll(".grid-cell");
    for(let i = 0; i < gridCellItems.length; i++){
        gridCellItems[i].style.backgroundColor = '#ffffff';
    }
})

window.onload = () => {
    defaultGridSize(DEFAULT_GRID_SIZE);
}


