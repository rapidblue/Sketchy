const clearBtn = document.getElementById("clearBtn");
const gridRow = document.querySelector("#gridRow");
const sliderValue = document.querySelector("#myRange");
const gridCell = document.createElement("div");

gridCell.id = "gridCell";

const userPrompt = 16;

const rowMake = function () {
  for (let i = 0; i < userPrompt; i++) {
    gridRow.appendChild(gridCell.cloneNode(true));
    gridRow.style.gridTemplateColumns = `repeat(${userPrompt}, 1fr)`;
    gridRow.style.gridTemplateRows = `repeat(${userPrompt}, 1fr)`;
  }
};

for (let i = 0; i < userPrompt; i++) {
  rowMake();
}

const cellList = document.querySelectorAll("#gridCell");

clearBtn.addEventListener("click", () => {
  cellList.forEach((element) => {
    element.style.backgroundColor = "white";
  });
});

cellList.forEach((element) => {
  element.addEventListener("mouseover", (event) => {
    element.style.backgroundColor = "black";
  });
});
