const clearBtn = document.getElementById("clearBtn");
const gridRow = document.querySelector("#gridRow");
const gridCell = document.createElement("div");
gridCell.id = "gridCell";

const rowMake = function () {
  for (let i = 0; i < 16; i++) {
    gridRow.appendChild(gridCell.cloneNode(true));
  }
};

for (let i = 0; i < 16; i++) {
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
    element.style.backgroundColor = "blue";
  });
});
