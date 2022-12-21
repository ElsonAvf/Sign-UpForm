const passwordDiv = document.querySelector("#inputs-container > div:nth-child(5)");
const confirmPasswordDiv = document.querySelector("#inputs-container > div:nth-child(6)");
const submitForm = document.querySelector("form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const visibilityIcons = document.querySelectorAll(".material-symbols-outlined");
const passwordInputs = document.querySelectorAll("input[type='password']");

password.addEventListener('blur', () => {
  if (!password.validity.valid && password.value) {
    passwordDiv.classList.add("password-weak");
  } else {
    passwordDiv.classList.remove("password-weak");
  }
})

submitForm.addEventListener("submit", (e) => {
  if (password.value !== confirmPassword.value) {
    confirmPasswordDiv.classList.add("password-dont-match");
    e.preventDefault();
    confirmPassword.setCustomValidity('password don\'t match');
  }
})

confirmPassword.addEventListener("focus", () => {
    confirmPasswordDiv.classList.remove("password-dont-match");
    confirmPassword.setCustomValidity("");
})

for (let i = 0; i < visibilityIcons.length; i++) {
  visibilityIcons[i].addEventListener('click', (e) => {
    if (e.target.textContent === "visibility") {
    e.target.textContent = "visibility_off";
    passwordInputs[i].type = "password";
    } else {
    e.target.textContent = "visibility";
    passwordInputs[i].type = "text";
    }
  })
}