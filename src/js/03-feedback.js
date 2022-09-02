import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
form.addEventListener("input", throttle(onTextareaInput, 500));
form.addEventListener("submit", onFormSubmit);

const formData = {};

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(STORAGE_KEY);
}

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

(function formDataSaved() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = document.querySelector(".feedback-form input");
  const message = document.querySelector(".feedback-form textarea");
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();
