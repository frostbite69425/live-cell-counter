// SELECTORS

let liveCellCount = document.body.querySelector(".live-cell-count");

let deadCellCount = document.body.querySelector(".dead-cell-count");

let incrementButton = document.body.querySelector(".increment-btn");

let decrementButton = document.body.querySelector(".decrement-btn");

let resetButton = document.body.querySelector(".reset-btn");

incrementButton.addEventListener("click", () => {
  liveCount = Number(liveCellCount.textContent);
  liveCellCount.textContent = liveCount + 1;
});

decrementButton.addEventListener("click", () => {
  deadCount = Number(deadCellCount.textContent);
  deadCellCount.textContent = deadCount + 1;
});

resetButton.addEventListener("click", () => {
  deadCellCount.textContent = liveCellCount.textContent = 0;
});
