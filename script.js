const FirstNameInput = document.querySelector("#first-name-input");
const LastNameInput = document.querySelector("#last-name-input");
const EmailInput = document.querySelector("#email-input");
const PasswordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

FirstNameInput.onkeyup = () => {
  FirstNameInput.classList.remove("is-valid");
  FirstNameInput.classList.remove("is-invalid");
};
LastNameInput.onkeyup = () => {
  LastNameInput.classList.remove("is-valid");
  LastNameInput.classList.remove("is-invalid");
};
EmailInput.onkeyup = () => {
  EmailInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPasswordOk = false;

  if (FirstNameInput.value === "") {
    FirstNameInput.classList.add("is-invalid");
  } else {
    FirstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }
  if (LastNameInput.value === "") {
    LastNameInput.classList.add("is-invalid");
  } else {
    LastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }
  if (validateEmail(EmailInput.value)) {
    EmailInput.classList.add("is-valid");
    isEmailOk = true;
  } else {
    EmailInput.classList.add("is-invalid");
  }

  if (PasswordInput.value.length >= 6) {
    PasswordInput.classList.add("is-valid");
    isPasswordOk = true;
  } else {
    PasswordInput.classList.add("is-invalid");
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk) {
    alert("Registered successfully");
  }
};
