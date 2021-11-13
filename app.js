// get form
var form = document.getElementById("myForm");
// get error message
var oups = document.querySelector(".error");


form.addEventListener("submit", (e) => {
  var mail = document.forms["myForm"]["email"].value;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var form = document.getElementById("myForm");
  if (mail == "" || !mail.match(validRegex)) {
    oups.innerHTML = "Put a valid email!";
    e.preventDefault();
  } else if (mail.match(validRegex)) {
    return true;
  }
})
