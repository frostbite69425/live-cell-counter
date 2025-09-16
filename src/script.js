// SELECTORS

let liveCellCount = document.body.querySelector(".live-cell-count");

let deadCellCount = document.body.querySelector(".dead-cell-count");

let liveDecrementBtn = document.querySelector(".live-decrement-btn");

let liveResetBtn = document.querySelector(".live-reset-btn");

let liveIncrementBtn = document.querySelector(".live-increment-btn");

let deadDecrementBtn = document.querySelector(".dead-decrement-btn");

let deadResetBtn = document.querySelector(".dead-reset-btn");

let deadIncrementBtn = document.querySelector(".dead-increment-btn");

let instaBtn = document.querySelector(".insta");

// LISTENERS

// LIVE CELL COUNTER

liveIncrementBtn.addEventListener("click", () => {
  liveCount = Number(liveCellCount.textContent);
  liveCellCount.textContent = liveCount + 1;
});

liveDecrementBtn.addEventListener("click", () => {
  liveCount = Number(liveCellCount.textContent);
  if (liveCount > 0) {
    liveCellCount.textContent = liveCount - 1;
  }
});

liveResetBtn.addEventListener("click", () => {
  liveCellCount.textContent = 0;
});

deadIncrementBtn.addEventListener("click", () => {
  deadCount = Number(deadCellCount.textContent);
  deadCellCount.textContent = deadCount + 1;
});

deadDecrementBtn.addEventListener("click", () => {
  deadCount = Number(deadCellCount.textContent);
  if (deadCount > 0) {
    deadCellCount.textContent = deadCount - 1;
  }
});

deadResetBtn.addEventListener("click", () => {
  deadCellCount.textContent = 0;
});

instaBtn.addEventListener("click", () => {
  window.location.href = "https://www.instagram.com/frostbite.101/";
});
