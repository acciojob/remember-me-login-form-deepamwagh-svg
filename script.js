//your JS code here. If required.
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

window.onload = function () {
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedUser && savedPass) {
    existingBtn.style.display = "block";
  }
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  alert("Logged in as " + username.value);

  if (checkbox.checked) {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
});

existingBtn.addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");
  alert("Logged in as " + savedUser);
});
