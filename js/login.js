const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const loginBefore = document.getElementById("login-before");
const loginAfter = document.getElementById("login-after");

const loginOk = document.querySelector("h1");

// loginButton.innerText = "로그인";

const user = localStorage.getItem("name");

function loginSubmit(event) {
  // event.preventDefault();
  const userName = loginInput.value;
  console.log(userName);
  localStorage.setItem("name", userName);
  login();
}

function login() {
  if (user === null) {
    loginBefore.classList.remove("hidden");
    loginAfter.classList.add("hidden");
    console.log("로그인해주세요");
    loginForm.addEventListener("submit", loginSubmit);
  } else {
    loginForm.classList.add("hidden");
    loginAfter.classList.remove("hidden");
    loginOk.innerText = `${user}'s To Do List`;
  }
}

login();
