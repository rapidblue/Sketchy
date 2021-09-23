// Declare html elements
const clearBtn = document.getElementById("clearBtn");
const gridRow = document.querySelector("#gridRow");
const sliderValue = document.querySelector("#myRange");
const sliderValSqr = document.querySelector("#sliderValSqr");
const rainbowBtn = document.querySelector(".rainbow");
const normalBtn = document.querySelector(".normal");
const body = document.querySelector("body");

// Create div element with an ID of gridCell
const gridCell = document.createElement("div");
gridCell.id = "gridCell";

// This function creates a single row of cells based off the slider input
const rowMake = function () {
  for (let i = 0; i < sliderValue.max; i++) {
    gridRow.appendChild(gridCell.cloneNode(true));
    gridRow.style.gridTemplateColumns = `repeat(${sliderValue.value}, 1fr)`;
    gridRow.style.gridTemplateRows = `repeat(${sliderValue.value}, 1fr)`;
  }
};

// Loop to call the rowMake function based on slider max value
for (let i = 0; i < sliderValue.max; i++) {
  rowMake();
}

// Create a nodelist for all div with an ID of gridCell
const cellList = document.querySelectorAll("#gridCell");

// Clear button function to turn all items in the nodelist white
clearBtn.addEventListener("click", () => {
  cellList.forEach((element) => {
    element.style.backgroundColor = "white";
  });
});

// Color in nodes in the nostlist on mouse hover
cellList.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = favColor();
  });
});

// Slider to set grid size and reset canvas
sliderValue.addEventListener("input", () => {
  function clear() {
    cellList.forEach((element) => {
      element.style.backgroundColor = "white";
    });
  }
  clear();
  sliderValSqr.textContent = `${sliderValue.value} x ${sliderValue.value}`;
  rowMake();
});

//Rainbow function to randomize colors
const rainbow = () => {
  let x = Math.floor(Math.random() * 16777215).toString(16);
  return `#${x}`;
};

//Added function to rainbow button & a little meme
rainbowBtn.addEventListener("click", () => {
  cellList.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = rainbow();
      body.style.backgroundImage = `url("https://image.emojipng.com/253/11544253.jpg")`;
    });
  });
});
const favColor = () => {
  return document.querySelector("#favcolor").value;
};

//Added function to normal button
normalBtn.addEventListener("click", () => {
  cellList.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = favColor();
      body.style.backgroundImage = ``;
    });
  });
});
