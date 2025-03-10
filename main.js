function formValidation() {
  const form = document.querySelector("#form");
  const emailInput = document.querySelector("#email");
  const nameInput = document.querySelector("#name");
  const passwordInput = document.querySelector("#password");
  const ageInput = document.querySelector("#age");
  const personalInput = document.querySelector("#personal");
  const mobileInput = document.querySelector("#mobile");
  const confirmInput = document.querySelector("#confirm");

  const showErrorMessage = (input, message) => {
    input.closest(".form-group").classList.remove("success");
    input.closest(".form-group").classList.add("error");
    input.closest(".form-group").querySelector(".error-message").textContent =
      message;
  };
  const showSuccessMessage = (input, message) => {
    input.closest(".form-group").classList.remove("error");
    input.closest(".form-group").classList.add("success");
    input.closest(".form-group").querySelector(".error-message").textContent =
      message;
  };

  const isNameValid = () => {
    const val = nameInput.value.trim();
    if (val === "") {
      showErrorMessage(nameInput, "Name is required");
      return false;
    } else if (val.length < 3) {
      showErrorMessage(nameInput, "Name is too short");
      return false;
    } else {
      showSuccessMessage(nameInput, "Name is valid");
      return true;
    }
  };
  const isEmailValid = () => {
    const val = emailInput.value.trim();
    const emailRegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (val === "") {
      showErrorMessage(emailInput, "Email is required");
      return false;
    } else if (!emailRegExp.test(val)) {
      showErrorMessage(emailInput, "Email is not correct format");
      return false;
    } else if (!/@gmail\.com$/.test(val)) {
      showErrorMessage(emailInput, "Email must be gmail.com");
      return false;
    } else {
      showSuccessMessage(emailInput, "Email is valid");
      return true;
    }
  };
  const isAgeValid = () => {
    const val = ageInput.value.trim();
    if (Number(val) < 0 || Number(val) > 10) {
      showErrorMessage(ageInput, "Age must be between 0 and 10");
      return false;
    } else {
      showSuccessMessage(ageInput, "Age is valid");
      return true;
    }
  };
  const isPersonalValid = () => {
    const val = personalInput.value.trim();
    const numberRegExp = /^\d{11}$/;
    if (val === "") {
      showErrorMessage(personalInput, "Personal-number is required");
      return false;
    } else if (val.length !== 11) {
      showErrorMessage(
        personalInput,
        "Personal number must consist of 11 characters."
      );
      return false;
    } else if (!numberRegExp.test(val)) {
      showErrorMessage(personalInput, "Only numbers");
      return false;
    } else {
      showSuccessMessage(personalInput, "Personal-number is valid");
      return true;
    }
  };
  const isMobileValid = () => {
    const val = mobileInput.value.trim();
    const numberRegExp = /^\d{9}$/;
    if (val === "") {
      showErrorMessage(mobileInput, "Mobile-number is required");
      return false;
    } else if (val.length !== 9) {
      showErrorMessage(
        mobileInput,
        "Mobile number must consist of 9 characters."
      );
      return false;
    } else if (!numberRegExp.test(val)) {
      showErrorMessage(mobileInput, "Only numbers");
      return false;
    } else {
      showSuccessMessage(mobileInput, "Mobile number is valid");
      return true;
    }
  };
  const isConfirmValid = () => {
    const val = confirmInput.value.trim();
    if (val === "") {
      showErrorMessage(confirmInput, "Confirm-password is required");
      return false;
    } else if (val !== passwordInput.value) {
      showErrorMessage(confirmInput, "Confirm-password must same as password");
      return false;
    } else {
      showSuccessMessage(confirmInput, "Confirm-password is valid");
      return true;
    }
  };
  const isPasswordValid = () => {
    const val = passwordInput.value.trim();
    if (val.length !== 6) {
      showErrorMessage(passwordInput, "Password must consist of 6 characters");
      return false;
    } else {
      showSuccessMessage(passwordInput, "Password is valid");
      return true;
    }
  };

  nameInput.addEventListener("input", isNameValid);
  emailInput.addEventListener("input", isEmailValid);
  ageInput.addEventListener("input", isAgeValid);
  personalInput.addEventListener("input", isPersonalValid);
  mobileInput.addEventListener("input", isMobileValid);
  confirmInput.addEventListener("input", isConfirmValid);
  passwordInput.addEventListener("input", isPasswordValid);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameValid = isNameValid();
    const emailValid = isEmailValid();
    const ageValid = isAgeValid();
    const personalValid = isPersonalValid();
    const mobileValid = isMobileValid();
    const confirmValid = isConfirmValid();
    const passwordValid = isPasswordValid();
    if (
      nameValid &&
      emailValid &&
      ageValid &&
      personalValid &&
      mobileValid &&
      confirmValid &&
      passwordValid
    ) {
      console.log("Form is valid");
    }
  });
}
formValidation();
