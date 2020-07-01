const submit = document.querySelector("#submit");
const email = document.getElementById("email");
const form = document.querySelector("#form");
const icon = document.querySelector("#icon-error");

function validEmail(e) {
  var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(e).search(filter) != -1;
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(email);
  console.log(email.value);

  const checkEmail = validEmail(email.value);

  if (checkEmail) {
    console.log("true");
    form.classList.remove("error");
    icon.classList.remove("show-error");
  } else {
    form.classList.add("error");
    icon.classList.add("show-error");
  }
});
