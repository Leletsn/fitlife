const WATER_STEP_ML = 250;

const goalMl = Number(document.querySelector("#water-goal").textContent);
const addButton = document.querySelector("#add-water");
const resetButton = document.querySelector("#reset-water");
const progress = document.querySelector("#water-progress");
const bar = document.querySelector("#water-bar");
const totalElement = document.querySelector("#water-total");
const percentElement = document.querySelector("#water-percent");
const goalMessage = document.querySelector("#goal-message");

let totalMl = 0;

function render() {
  const percent = Math.min(100, Math.round((totalMl / goalMl) * 100));

  totalElement.textContent = totalMl;
  percentElement.textContent = percent;
  bar.style.width = `${percent}%`;
  progress.setAttribute("aria-valuenow", percent);
  bar.classList.toggle("rounded-r-[30px]", percent === 100);
  goalMessage.classList.toggle("hidden", percent < 100);
}

addButton.addEventListener("click", () => {
  totalMl += WATER_STEP_ML;
  render();
});

resetButton.addEventListener("click", () => {
  totalMl = 0;
  render();
});
