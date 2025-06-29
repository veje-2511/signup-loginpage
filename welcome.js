const user = JSON.parse(localStorage.getItem("user"));

if(!user){
  alert("You are not logged in!");
  window.location.href = "login.html";
}

else {
  const name = document.getElementById("welcome-box").innerText = `Welcome ${user.fullName} !`;
}