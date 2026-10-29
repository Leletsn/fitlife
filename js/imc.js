const form = document.querySelector("#bmi-form");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const resultBox = document.querySelector("#result");
const emptyMessage = document.querySelector("#result-empty");
const resultContent = document.querySelector("#result-content");
const bmiValue = document.querySelector("#bmi-value");
const bmiCategory = document.querySelector("#bmi-category");

function classifyBmi(bmi) {
  if (bmi < 18.5) return "Abaixo do peso (menos de 18,5)";
  if (bmi < 25) return "Peso normal (18,5 a 24,9)";
  if (bmi < 30) return "Sobrepeso (25 a 29,9)";
  return "Obesidade (30 ou mais)";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = Number(weightInput.value);
  const height = Number(heightInput.value);
  const bmi = weight / (height * height);

  bmiValue.textContent = bmi.toFixed(1);
  bmiCategory.textContent = classifyBmi(bmi);

  emptyMessage.classList.add("hidden");
  resultContent.classList.remove("hidden");
  resultBox.classList.add("ring-2", "ring-primary/40");
  resultBox.scrollIntoView({ block: "nearest" });
});
