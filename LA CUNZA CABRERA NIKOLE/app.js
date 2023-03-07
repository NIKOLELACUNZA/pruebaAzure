document.addEventListener("DOMContentLoaded", () => {
  //DOM Elements
  const $email = document.querySelector("#email");
  const $password = document.querySelector("#password");
  const $submit = document.querySelector("#submit");

  //events
  $email.addEventListener("input", validate);
  $password.addEventListener("input", validate);

  //functions
  function validateEmail(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  }

  function validate(evt) {
    const value = evt.target.value.trim();
    const fieldName = evt.target.id;
    const fieldElement = evt.target.parentElement;

    if (!value) {
      showAlert("EL campo es requerido", fieldElement);
      $submit.classList.add('disabled');
      return;
    }

    if (fieldName === "email" && !validateEmail(value)) {
      showAlert("EL email no es valido.", fieldElement);
      $submit.classList.add('disabled');
      return;
    }

    clearAlert(fieldElement);
    $submit.classList.remove('disabled');
  }

  function showAlert(msg, fieldElement) {
    clearAlert(fieldElement);

    const $error = document.createElement("span");
    $error.textContent = msg;
    $error.classList.add("text-danger");
    fieldElement.appendChild($error);
  }

  function clearAlert(fieldElement) {
    const alert = fieldElement.querySelector(".text-danger");
    if (alert) alert.remove();
  }
});
