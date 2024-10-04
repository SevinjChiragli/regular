const regex = /^[a-z][a-z0-9._]{4,17}$/;
let login = document.getElementById("login");
login.addEventListener("input", (ev) => {
  if (regex.test(ev.target.value)) {
    document.getElementById("loginP").innerText = "your log-in exist";
  } else {
    document.getElementById("loginP").innerText = "your log-in DOES NOT exist";
  }
});

const regex1 = /^[A-Z][a-zA-Z]*$/;
let name = document.getElementById("name");
name.addEventListener("input", (ev) => {
  if (regex1.test(ev.target.value)) {
    document.getElementById("nameP").innerText = "your name is true";
  } else {
    document.getElementById("nameP").innerText = "your name DOES NOT true";
  }
});

const regex2 = /^[A-Z][a-zA-Z]*$/;
let surname = document.getElementById("surname");
surname.addEventListener("input", (ev) => {
  if (regex2.test(ev.target.value)) {
    document.getElementById("surnameP").innerText = "your surname is true";
  } else {
    document.getElementById("surnameP").innerText =
      "your surname DOES NOT true";
  }
});

const regex3 = /^[a-z][a-z0-9._]*@[a-z0-9.-]+\.[a-z]{2,}$/;
let mail = document.getElementById("email");
mail.addEventListener("input", (ev) => {
  if (regex3.test(ev.target.value)) {
    document.getElementById("emailP").innerText = "your mail is true";
  } else {
    document.getElementById("emailP").innerText =
      "your mail DOES NOT true";
  }
});

const regex4=/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9._]{8,18}$/
let password = document.getElementById("password");
password.addEventListener("input", (ev) => {
  if (regex4.test(ev.target.value)) {
    document.getElementById("passwordP").innerText = "password is true";
  } else {
    document.getElementById("passwordP").innerText =
      "password DOES NOT true";
  }
});
