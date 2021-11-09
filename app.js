// get form
var form = document.getElementById("myForm");
// get submit btn
var submitBtn = document.querySelector(".submit");
// get error message
var oups = document.querySelector(".error");

// submit function
submitBtn.addEventListener("click", function() {
  form.submit();
  validateForm();
})

// function dorm validation
function validateForm() {
  var mail = document.forms["myForm"]["email"].value;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail == "" || !mail.match(validRegex)) {
    alert("Put an valid email");
    return false;
  } else if (mail.match(validRegex)) {
    return true;
  }
}
