import validator from "validator";

import { domStrings } from "../domManipution/domManipulation";

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

export const formValidation = () => {
  // Check there is a form on current page
  if (!domStrings.form) return console.log("There is no form on this page");

  // set an event listener on form element
  domStrings.form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Checks if a particular input tag exit in form and call validator for the user input
    if (domStrings.fullname) {
      validateUserFullname(domStrings.fullname.value);
    }

    if (domStrings.email) {
      validateEmail(domStrings.email.value);
    }

    if (domStrings.phone) {
      validatePhone(domStrings.phone.value);
    }

    if (domStrings.password) {
      validatePassword(domStrings.password.value);
    }

    if (domStrings.confirmPassword) {
      validateConfirmPassword(domStrings.confirmPassword.value);
    }
  });
};

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// Functions below validates userputs
function validateUserFullname(name) {
  // Check if fullname is empty
  if (validator.isEmpty(name) || undefined) {
    setError(domStrings.fullname, "fullname can't be blank,");
  } else if (name.length < 3) {
    setError(
      domStrings.fullname,
      "fullname should @least three characters long."
    );
  } else if (!validator.isAlpha(name)) {
    setError(domStrings.fullname, "fullname should contain only letters");
  } else {
    setSuccess(domStrings.fullname);
  }
}

function validateEmail(email) {
  // Check if email is empty
  if (validator.isEmpty(email)) {
    setError(domStrings.email, "email can't be blank");
  } else if (!validator.isEmail(email)) {
    setError(domStrings.email, "please enter a vaild email address");
  } else {
    setSuccess(domStrings.email);
  }
}

function validatePhone(phone) {
  // Check if phone input is empty
  if (validator.isEmpty(phone)) {
    setError(domStrings.phone, "phone can't be blank");
    // Check if phone contains alphabets
  } else if (validator.isAlphanumeric(phone)) {
    setError(domStrings.phone, "phone number should only contain numbers");
    // Check if phone is valid phone number
  } else if (!validator.isMobilePhone(phone)) {
    setError(domStrings.phone, "please enter a vaild phone number");
  } else {
    setSuccess(domStrings.phone);
  }
}

function validatePassword(password) {
  // Check if password is empty
  if (validator.isEmpty(password)) {
    setError(domStrings.password, "password can't be blank");
    domStrings.password.value = "";
    // Check if password is 8 characters long
  } else if (password.length < 8) {
    setError(
      domStrings.password,
      "password should be @least 8 characters long."
    );
    domStrings.password.value = "";
    // Check if password contains uppercase, lowercase and especial characters
  } else if (!validator.isAlphanumeric(password)) {
    setError(
      domStrings.password,
      "password should contain letters and numbers"
    );
    domStrings.password.value = "";
  } else {
    setSuccess(domStrings.password);
  }
}

function validateConfirmPassword(confirmPassword) {
  // Check if confirm password is empty
  if (validator.isEmpty(confirmPassword)) {
    setError(domStrings.confirmPassword, "password do not match");
    domStrings.confirmPassword.value = "";
    // Check if confirm password matches password
  } else if (confirmPassword !== domStrings.password.value) {
    setError(domStrings.confirmPassword, "password do not match");
    domStrings.confirmPassword.value = "";
  } else {
    setSuccess(domStrings.confirmPassword);
  }
}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// Create and styles error message;
function setError(input, message) {
  const formControl = input.parentElement;
  const notification = formControl.querySelector(".form__message");

  // set Text content
  notification.textContent = message;
  // display element's class display property
  notification.style.display = "block";

  //set input element color property
  input.classList = "form__input form__danger";
}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
function setSuccess(input) {
  const formControl = input.parentElement;
  const notification = formControl.querySelector(".form__message");

  input.classList = "form__input form__success";
  notification.style.display = "none";
}
