const empty = "";
const ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lcase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*_-+";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pnumber = document.getElementById("p-number");
const psymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");


submit.addEventListener("click", function () {
  let initialPassword = empty;

  upperCase.checked ? (initialPassword += ucase) : "";
  lowerCase.checked ? (initialPassword += lcase) : "";
  pnumber.checked ? (initialPassword += number) : "";
  psymbol.checked ? (initialPassword += symbol) : "";

  console.log(initialPassword);
  password.value=generatePassword(pLength.value, initialPassword);
  console.log(pLength.value);
  console.log(initialPassword.length);
});

function generatePassword(l, initialPassword){
    let pass="";
    for (let i = 0; i < l; i++) {
        pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length))
    }
    
    

    return pass;
}

