// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = "8>=128";
var numbers = "0123456789".split();
var toUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
var toLowerCase = "abcdefghijklmnopqrstuvwxyz".split();
var specialChar = " !#$%&'()*+,-./:;<=>?@[^_`{|}~".split();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Promts for password criteria
function generatePassword() {
  var passwordLength = prompt(
    "Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128."
  );
  if (passwordLength <8 || passwordLength >128) {
    alert("Please select between 8 and 128 characters")
    return; 
  }
  var numbers = confirm("Do you want numbers in your password?");
  var toLowerCase = confirm("Do you want lowercase in your password?");
  var toUpperCase = confirm("Do you want uppercase in your password?");
  var specialChar = confirm("Do you want special characters in your password?");
  
  var InputVal = []
  let password = "";
  if (numbers) {
    InputVal.push(numbers);
  }
  if (toLowerCase) {
    InputVal.push(toLowerCase);
  }
  if (toUpperCase) {
    InputVal.push(toUpperCase);
  }
  if (specialChar) {
    InputVal.push(specialChar);
  }
   console.log(password)

  var result = InputVal.flat()

  for (var i=0; i<passwordLength; i++) {
  password = password + [Math.floor(Math.random()* passwordLength)];
  }
  return password;
}

