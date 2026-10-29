const form = document.querySelector("#bmr-form");
const genderSelect = document.querySelector("#gender");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const ageInput = document.querySelector("#age");
const resultBox = document.querySelector("#result");
const emptyMessage = document.querySelector("#result-empty");
const resultContent = document.querySelector("#result-content");
const bmrValue = document.querySelector("#bmr-value");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = Number(weightInput.value);
  const height = Number(heightInput.value);
  const age = Number(ageInput.value);

  const baseRate = 10 * weight + 6.25 * height - 5 * age;
  const genderAdjustment = genderSelect.value === "male" ? 5 : -161;

  bmrValue.textContent = Math.round(baseRate + genderAdjustment);

  emptyMessage.classList.add("hidden");
  resultContent.classList.remove("hidden");
  resultBox.classList.add("ring-2", "ring-primary/40");
  resultBox.scrollIntoView({ block: "nearest" });
});
