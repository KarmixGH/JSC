const btn = document.querySelector("button");
btn.addEventListener("click", calculateBMI);

function calculateBMI() {
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#result");

  const kg = weight;
  const h = height / 100;

  const BMI = Math.round(kg / h ** 2);
  result.innerHTML = `Your BMI is: ${BMI}`;

  if (BMI < 18.5) {
    result.innerHTML = `Your BMI is:  ${BMI}`;
    result.style.color = "red";
    alert("Your BMI is too low.");
  } else if (BMI >= 18.5 && BMI < 30) {
    result.innerHTML = `Your BMI is:  ${BMI}`;
    result.style.color = "green";
    alert("Your BMI is normal.");
  } else if (BMI >= 30 && BMI < 35) {
    result.innerHTML = `Your BMI is:  ${BMI}`;
    result.style.color = "red";
    alert("Your BMI is overweight.");
  } else {
    result.innerHTML = `Your BMI is:  ${BMI}`;
    result.style.color = "red";
    alert("Your BMI is obese.");
  }
}
