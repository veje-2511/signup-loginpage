 document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

const fullName = document.getElementById('fullName').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirmPassword').value;

if ((email.indexOf('@') == -1 )|| (email.indexOf('.') == -1)){
  alert("Enter a valid Email Address!");
  return;
}

if (password !== confirmPassword) {
  alert("Passwords do not match!");
  return;
}

if (password.length < 6) {
  alert("The password must contain atleast 6 characters");
  return;
}

const user = {
  fullName : fullName,
  email : email,
  password : password
};

localStorage.setItem("user", JSON.stringify(user));
alert("Sign Up Successful!");
window.location.href = "login.html";

});