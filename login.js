document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const emailEnt = document.getElementById('email').value;
  const passwordEnt = document.getElementById('password').value;

  const alreadyUser = JSON.parse(localStorage.getItem('user'));

  if (!alreadyUser) {
    alert("We could not Find the user, Please Sign up first!");
    window.location.href = "index.html";
    return;
  }

  if ((emailEnt === alreadyUser.email) && (passwordEnt === alreadyUser.password)) {
    alert(`Login Successful , Welcome ${alreadyUser.fullName}!`);
    window.location.href = "welcome.html";
  }
  else if ((emailEnt !== alreadyUser.email) && (passwordEnt !== alreadyUser.password)) {
    alert("Email and Password both are invalid ! Try again");
    return;
  }
  else if (passwordEnt !== alreadyUser.password) {
    alert("Password Invalid!");
    return;
  }

  else if (emailEnt !== alreadyUser.email) {
    alert("You have not signed up yet!");
    window.location.href = "index.html";
  }

});