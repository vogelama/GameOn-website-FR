/* RESPONSIVE NAVIGATION BAR */
// navigation transitions from links to menu icon 
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//////////////////////////////////////////////////////////////

/* OPENING FORM */
// targeting form as a whole
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/* CLOSING FORM */
// targeting x button to close form
const closeForm = document.querySelectorAll(".close"); 

// launch modal close event
closeForm.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal close form
function closeModal(){
  modalbg.style.display = "none";
}
//////////////////////////////////////////////////////////////

/* VALIDATING THE FORM */
/* Using document query selector to select the input fields and the form */
const first = document.querySelector('#first');
const last = document.querySelector('#last');
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const quantity = document.querySelector('#quantity');

const form = document.querySelector('#reserve');


/* attaching the submit event listener to the form using addEventListener */
form.addEventListener('submit', function validate(e) {

  // validate input fields 
  let isFirstValid = checkFirst(),
      isLastValid = checkLast(),
      isEmailValid = checkEmail(),
      isBirthdateValide = checkBirthdate(),
      isQuantityValid = checkQuantity();

  // validate form 
  let isFormValid = 
      isFirstValid &&
      isLastValid &&
      isEmailValid &&
      isBirthdateValide &&
      isQuantityValid;

  //don't submit to the server if form is invalid 
  if (!isFormValid) {
      // prevent the form from submitting
      e.preventDefault(); 
  }
});


/* Utility function for email */
const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};


/* Functions that show the error / success message */
const showError = (input, message) => {
  // get the formData element
  const formData = input.parentElement;
  // add the error class
  formData.classList.remove('success');
  formData.classList.add('error');

  // show the error message
  const error = formData.querySelector('small');
  error.textContent = message; 
};
const showSuccess = (input) => {
  // get the formData element
  const formData = input.parentElement;
  // remove the error class
  formData.classList.remove('error');
  formData.classList.add('success');

  // hide the error message
  const error = formData.querySelector('small');
  error.textContent = ''; 
};


/* Input field validating functions */
/* Validate the first name field */
const checkFirst = () => {

  let valid = false;
  const firstValue = first.value.trim();

  if (firstValue.length < 2) {
    showError(first, 'Au moins 2 lettres');
  } else {
    showSuccess(first);
    valid = true; 
  }
  return valid;
};
/* Validate the last name field */
const checkLast = () => {

  let valid = false;
  const lastValue = last.value.trim();

  if (lastValue.length < 2) {
    showError(last, 'Au moins 2 lettres');
  } else {
    showSuccess(last);
    valid = true; 
  }
  return valid;
};
/* Validate the email field */
const checkEmail = () => {

  let valid = false;
  const emailValue = email.value.trim();

  if (emailValue === '') {
    showError(email, 'Email est invalide');
  } else if (!isEmailValid(emailValue)) {
    showError(email, 'Email est invalide');
  } else {
    showSuccess(email);
    valid = true; 
  }
  return valid;
};
/* Validate the birthdate field */
const checkBirthdate = () => {

  let valid = false;
  const birthdateValue = birthdate.value.trim();

  if (birthdateValue === '') {
    showError(birthdate, 'Mettez date de naissance');
  } else {
    showSuccess(birthdate);
    valid = true; 
  }
  return valid;
};
/* Validate the tournament quantity field */
const checkQuantity = () => {

  let valid = false;
  const quantityValue = quantity.value.trim();

  if (quantityValue === '' || quantityValue > 99) {
    showError(quantity, 'Doit être un numéro entre 0 et 99');
  } else {
    showSuccess(quantity);
    valid = true; 
  }
  return valid;
};


















































