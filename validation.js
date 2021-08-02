$(document).ready(function () {
  // Validate Username
  $("#usercheck").hide();
  let usernameError = true;
  $("#inputUsername").keyup(function () {
    validateUsername();
  });
  function validateUsername() {
    let usernameValue = $("#inputUsername").val();
    if (usernameValue.length == "") {
      $("#usercheck").show();
      usernameError = false;
      return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 10) {
      $("#usercheck").show();
      $("#usercheck").html("**length of username must be between 3 and 10");
      usernameError = false;
      return false;
    } else {
      $("#usercheck").hide();
    }
  }
  // Validate Email
  const email = document.getElementById("email");
  email.addEventListener("blur", () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let s = email.value;
    if (regex.test(s)) {
      email.classList.remove("is-invalid");
      emailError = true;
    } else {
      email.classList.add("is-invalid");
      emailError = false;
    }
  });

  //Validate First Name
  const firstname = document.getElementById("fn");
  firstname.addEventListener("blur", () => {
    let fregex = /^[a-zA-Z]+$/;
    let fs = firstname.value;
    if (fregex.test(fs)) {
      firstname.classList.remove("is-invalid");
      fnError = true;
    } else {
      firstname.classList.add("is-invalid");
      fnError = false;
    }
  });
  //validate Last Name
  const lastname = document.getElementById("ln");
  lastname.addEventListener("blur", () => {
    let fregex = /^[a-zA-Z]+$/;
    let fs = lastname.value;
    if (fregex.test(fs)) {
      lastname.classList.remove("is-invalid");
      lnError = true;
    } else {
      lastname.classList.add("is-invalid");
      lnError = false;
    }
  });

  // Validate Password
  $("#passcheck").hide();
  let passwordError = true;
  $("#password").keyup(function () {
    validatePassword();
  });
  function validatePassword() {
    let passwrdValue = $("#password").val();
    if (passwrdValue.length == "") {
      $("#passcheck").show();
      passwordError = false;
      return false;
    }
    if (passwrdValue.length < 6 || passwrdValue.length > 10) {
      $("#passcheck").show();
      $("#passcheck").html(
        "**length of your password must be between 6 and 10"
      );
      $("#passcheck").css("color", "red");
      passwordError = false;
      return false;
    } else {
      $("#passcheck").hide();
    }
  }

  // Validate Confirm Password
  $("#conpasscheck").hide();
  let confirmPasswordError = true;
  $("#conpassword").keyup(function () {
    validateConfirmPasswrd();
  });
  function validateConfirmPasswrd() {
    let confirmPasswordValue = $("#conpassword").val();
    let passwrdValue = $("#password").val();
    if (passwrdValue != confirmPasswordValue) {
      $("#conpasscheck").show();
      $("#conpasscheck").html("**Password didn't Match");
      $("#conpasscheck").css("color", "red");
      confirmPasswordError = false;
      return false;
    } else {
      $("#conpasscheck").hide();
    }
  }

  // Submitt button
  $("#submitbtn").click(function () {
    validateUsername();
    validatePassword();
    validateConfirmPasswrd();
    validateEmail();
    if (
      usernameError == true &&
      passwordError == true &&
      confirmPasswordError == true &&
      emailError == true &&
      lnError == true &&
      fncheck == true
    ) {
      return true;
    } else {
      return false;
    }
  });
});
