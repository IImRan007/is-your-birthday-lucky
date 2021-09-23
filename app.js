const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#btn-check");
const output = document.querySelector(".output");

function comparingValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    output.innerText = "Your Birthday Is Lucky🙂";
  } else {
    output.innerText = "Your Birthday Is Not Lucky😥";
  }
}

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = addNumbers(dob);

  if (sum && dob) {
    comparingValues(sum, luckyNumber.value);
  } else {
    output.innerText = "Please enter both the fields";
  }
}

function addNumbers(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkButton.addEventListener("click", checkBirthDateIsLucky);
