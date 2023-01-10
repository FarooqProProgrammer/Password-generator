const generate = document.getElementById("generate");
const password = document.getElementById("password");
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";

generate.addEventListener("click", function() {
  let length = document.getElementById("length").value;
  let includeLowercase = document.getElementById("lowercase").checked;
  let includeUppercase = document.getElementById("uppercase").checked;
  let includeNumbers = document.getElementById("numbers").checked;
  let includeSpecial = document.getElementById("special").checked;

  let passwordString = "";

  if (includeLowercase) passwordString += lowercase;
  if (includeUppercase) passwordString += uppercase;
  if (includeNumbers) passwordString += numbers;
  if (includeSpecial) passwordString += special;

  let passwordArray = [];
  for (let i = 0; i < length; i++) {
    passwordArray.push(
      passwordString[Math.floor(Math.random() * passwordString.length)]
    );
  }

  password.value = passwordArray.join("");
});
