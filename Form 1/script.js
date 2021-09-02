const form = document.getElementById("form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //getting the value form inputs
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (userNameValue === '') {
    setErrorFor(userName, "Username cannot be empty.");
  } else {
    setSuccessFor(userName);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be empty');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
  } else {
    setSuccessFor(password);
  }

  if (confirmPasswordValue === '') {
    setErrorFor(confirmPassword, "Username cannot be empty");
  } else if( confirmPasswordValue !== passwordValue){
    setErrorFor(confirmPassword,"Password doesnot match")
  }
  else{
    setSuccessFor(confirmPassword);

  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = form.querySelector("small");

  //add error msg inside small Tag

  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
};
function setSuccessFor (input)  {
  const formControl = input.parentElement; //.form-control
  formControl.className = "form-control success";
};

//  Email Check function
function isEmail (email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// const form = document.getElementById('form');
// const userName = document.getElementById('userName');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const confirmPassword = document.getElementById('confirmPassword');

// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });

// function checkInputs() {
// 	// trim to remove the whitespaces
// 	const userNameValue = userName.value.trim();
// 	const emailValue = email.value.trim();
// 	const passwordValue = password.value.trim();
// 	const confirmPasswordValue = confirmPassword.value.trim();
	
// 	if(userNameValue === '') {
// 		setErrorFor(userName, 'Username cannot be blank');
// 	} else {
// 		setSuccessFor(userName);
// 	}
	
// 	if(emailValue === '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
// 	}
	
// 	if(passwordValue === '') {
// 		setErrorFor(password, 'Password cannot be blank');
// 	} else {
// 		setSuccessFor(password);
// 	}
	
// 	if(confirmPasswordValue === '') {
// 		setErrorFor(confirmPassword, 'Password2 cannot be blank');
// 	} else if(confirmPasswordValue !== confirmPassword) {
// 		setErrorFor(confirmPassword, 'Passwords does not match');
// 	} else{
// 		setSuccessFor(confirmPassword);
// 	}
// }

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }

