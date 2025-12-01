//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
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

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    const savedUser = localStorage.getItem("username");
    if (savedUser) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }
});

existingBtn.addEventListener("click", function () {
    const savedUser = localStorage.getItem("username");
    alert(`Logged in as ${savedUser}`);
});
