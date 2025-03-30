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

let value;

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
        e.target.style.backgroundColor = "#000000";
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

window.onload = () => {
    defaultGridSize(DEFAULT_GRID_SIZE);
}


