const DEFAULT_GRID_SIZE = 2;
const DEFAULT_COLOR = "#f1f1f1";

const colorPicker = document.querySelector(".color-picker");
const colorSelector = document.querySelector(".color-selector");
const randomColor = document.querySelector(".random-colors");
const eraser = document.querySelector(".eraser");
const clearGrid = document.querySelector(".clear");
const gridSizeSelector = document.querySelector(".grid-size-selector");
const grid = document.querySelector(".grid");
const testbutton = document.querySelector(".test-button");
const toggleGrid = document.querySelector(".toggle-grid");
const gridCell = document.querySelector(".grid-cell");
const gridSizeText = document.querySelector(".grid-size");
const gridSizeSlider = document.querySelector(".grid-size-range");

let value,
  colorValue,
  currentMode = 1,
  drawingMode = "click";

gridSizeText.textContent =
  DEFAULT_GRID_SIZE * 2 + " x " + DEFAULT_GRID_SIZE * 2;

function defaultGridSize(value) {
  for (let i = 0; i < 2; i++) {
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
      gridCell.setAttribute("draggable", "false");
      gridCell.addEventListener("click", changeColor);
      gridCell.addEventListener("mouseover", changeColor);
      gridCell.addEventListener("mousedown", changeColor);
      gridElementVertical.appendChild(gridCell);
    }
  }
  createGridElements(value);
}

function removeGridChilds() {
  let gridChildCount = grid.childElementCount;

  if (gridChildCount > 0) {
    for (i = 1; i <= gridChildCount; i++) {
      grid.removeChild(grid.lastChild);
    }
  } else return 0;
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
  if (drawingMode == "mouseover") {
    if (e.type == "mouseover") {
      if (currentMode == 1) {
        e.target.style.backgroundColor = colorValue;
      } else if (currentMode == 2) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      } else if (currentMode == 3) {
        e.target.style.backgroundColor = "#ffffff";
      }
    }
  } else if (drawingMode == "click") {
    if ((e.type == "mouseover" && mouseDown == true) || e.type == "click") {
      if (currentMode == 1) {
        e.target.style.backgroundColor = colorValue;
      } else if (currentMode == 2) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      } else if (currentMode == 3) {
        e.target.style.backgroundColor = "#ffffff";
      }
    }
  }
}

function clearGridButton(e) {
  if (e.type == "mouseleave"){
    if (counter == 1){
        e.target.textContent = "Clear";
        e.target.classList.toggle("clear");
        e.target.classList.toggle("clear-confirm");
        counter = 0;
    }
  }
  if (e.type == "click") {
    e.target.classList.toggle("clear");
    e.target.classList.toggle("clear-confirm");
    e.target.textContent = "Sure?";
    counter++;
    if (counter == 2) {
      const gridCellItems = document.querySelectorAll(".grid-cell");
      for (let i = 0; i < gridCellItems.length; i++) {
        gridCellItems[i].style.backgroundColor = "#ffffff";
      }
      e.target.textContent = "Clear";
      counter = 0;
    }
  }
}

gridSizeSelector.addEventListener("click", () => {
  if (drawingMode == "mouseover") {
    drawingMode = "click";
    gridSizeSelector.textContent = "Mode: Click";
  } else {
    drawingMode = "mouseover";
    gridSizeSelector.textContent = "Mode: Hover";
  }
});

toggleGrid.addEventListener("click", () => {
  const gridCellItems = document.querySelectorAll(".grid-cell");
  for (let i = 0; i < gridCellItems.length; i++) {
    gridCellItems[i].classList.toggle("grid-cell-border");
  }
});

colorPicker.addEventListener("mouseleave", () => {
  colorValue = document.querySelector(".color-picker").value;
  currentMode = 1;
})

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

let counter = 0;

clearGrid.addEventListener("mouseover", () => {
    clearGrid.addEventListener("click", clearGridButton);
});

clearGrid.addEventListener("mouseleave", clearGridButton)

gridSizeSlider.addEventListener("input", () => {
  gridSizeText.textContent =
    gridSizeSlider.value + " x " + gridSizeSlider.value;
  removeGridChilds();
  value = gridSizeSlider.value;
  for (i = 0; i < value; i++) {
    createGridLayout(value);
  }
});

window.onload = () => {
  defaultGridSize(DEFAULT_GRID_SIZE);
  //default color mode (1)
  colorValue = document.querySelector(".color-picker").value;
  currentMode = 1;
};
