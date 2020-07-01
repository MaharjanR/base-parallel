const submit = document.querySelector("#submit");
const email = document.getElementById("email");
const form = document.querySelector("#form");
const icon = document.querySelector("#icon-error");
const addedEmail = document.querySelector("#added-email");

function validEmail(e) {
  var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(e).search(filter) != -1;
}

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const checkEmail = validEmail(email.value);

  if (checkEmail) {
    console.log("true");
    form.classList.remove("error");
    icon.classList.remove("show-error");
    addedEmail.classList.add("success");

    setTimeout(() => {
      addedEmail.classList.remove("success");
    }, 3000);
  } else {
    form.classList.add("error");
    icon.classList.add("show-error");
  }
});
