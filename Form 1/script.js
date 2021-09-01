const form = document.getElementById("form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //getting the value form inputs
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (userNameValue === "") {
    setErrorFor(userName, "Username cannot be empty.");
  } else {
    setSuccessFor(userName);
  }
};

 function setErrorFor (input, message)  {
  const formControl = input.parentElement; //.form-control
  const small = form.querySelector("small");

  //add error msg inside small Tag
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
};
