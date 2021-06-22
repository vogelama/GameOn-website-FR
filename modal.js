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


/* VALIDATING THE FORM */
/* CONST VALUES FOR FORM AND INPUTS */
const form = document.getElementById('form');
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});


/* CHECKING INPUTS TO SEE IF THEY FOLLOW THE RULES AND GET VALIDATED OR ARE INCORRECT AND GET ERROR MESSAGE */
function checkInputs() {
  // get the values from the inputs 
  const firstValue = first.value.trim();
  const lastValue = last.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();

  if(firstValue.length < 2) {
    // add error class
    setErrorFor(first, 'Au moins 2 lettres');
  } else {
    // add success class 
    setSuccessFor(first);
  }

  if(lastValue.length < 2) {
    // add error class
    setErrorFor(last, 'Au moins 2 lettres');
  } else {
    // add success class 
    setSuccessFor(last);
  }

  if(emailValue === '') {
    // add error class
    setErrorFor(email, 'Ne laissez pas vide');
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'E-mail est invalide');
  } else {
    // add success class 
    setSuccessFor(email);
  }

  if(birthdateValue === '') {
    // add error class
    setErrorFor(birthdate, 'Ne laissez pas vide');
  } else {
    // add success class 
    setSuccessFor(birthdate);
  }

  if(quantityValue === '' || quantityValue > 99) {
    // add error class
    setErrorFor(quantity, 'Doit être un numéro entre 0 et 99');
  } else {
    // add success class 
    setSuccessFor(quantity);
  }

  // success message if everything is successful 
}


/* CUSTOM FUNCTION TO CHECK EMAIL VALIDITY */
function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/* FUNCTIONS TO SET ERROR MESSAGE OR SET INPUT AS SUCCESSFUL */
function setErrorFor(input, message) {
  const formData = input.parentElement; //.formData
  const small = formData.querySelector('small'); //<small>

  // add error message inside small element
  small.innerText = message;
  // add error class
  formData.className = 'formData error';
}

function setSuccessFor(input) {
  const formData = input.parentElement; //.formData

  // add success class
  formData.className = 'formData success';
}
















// //Error Messages input elements
// //function to validate all input fields 
// function validate(event) {
//   event.preventDefault();
//   validateFirstName();
//   validateLastName();
//   validateEmail();
//   validateBirthdate();
//   validateQuantity();
// }

// //if input fields are incorrect call error message for each incorrect input 
// function validateFirstName() {
//   if(first.value.length < 2) { //more than 2 characters
//     displayErrorMessage(first, "Au moins 2 lettres");
//   } 
// }
// function validateLastName() {
//   if(last.value.length < 2) { //more than 2 characters
//     displayErrorMessage(last, "Au moins 2 lettres");
//   }
// }
// function validateEmail() {
//   // var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if(email.value === '') { //must be a valid email
//     displayErrorMessage(email, "L'email est invalide");
//   }
// }
// function validateBirthdate() {
//   if(birthdate.value === '') { //is empty 
//     displayErrorMessage(birthdate, "Ne laissez pas vide");
//   }
// }
// function validateQuantity() {
//   if(quantity.value === '') { //a numeric value between 0 and 99
//     displayErrorMessage(quantity, "Doit être un numéro entre 0 et 99");
//   }
// }
// //function to display error message
// function displayErrorMessage(input, message){
//   input.parentElement.querySelector('small').textContent = message;
// }







