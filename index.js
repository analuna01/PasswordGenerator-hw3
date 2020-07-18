// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts

function generatePassword () {
    var numberChar = "0123456789";
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var specialChar = " !#$%&'()*+,-./:;<=>?@[^_`{|}~ ";
    var allChar = "numberChar + upperChar + lowerChar + specialChar";

} 

alert ("Password Length")


