const input = document.querySelector("form div.input-group input");
const form = document.querySelector("form");

input.addEventListener("blur", function (event) {
  const validate = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (!validate.test(event.target.value)) {
    return input.parentElement.classList.add("error");
  }

  return input.parentElement.classList.remove("error");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
});
