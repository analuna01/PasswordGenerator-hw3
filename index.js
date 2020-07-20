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

// Password criteria
var passwordLength = "8>=128";
var numbers = "0123456789".split();
var toUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
var toLowerCase = "abcdefghijklmnopqrstuvwxyz".split();
var specialChar = " !#$%&'()*+,-./:;<=>?@[^_`{|}~".split();


// Promts for password criteria
function generatePassword () {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");
  var numbers = confirm("Do you want numbers in your password?");
  var toLowerCase = confirm("Do you want lowercase in your password?");
  var toUpperCase = confirm("Do you want uppercase in your password?");
  var specialChar = confirm("Do you want special characters in your password?");
}

// Input Validation
function generatePassword () {
  
let password = [];
if (numbers){
  for (let i=0; i < 8; i++){password.push('randomChar')};
}
if (toLowerCase){
  password = password.concat (toLowerCase);
}
if (toUpperCase){
  password = password.contact (toUpperCase);
}
if (specialChar){
  password = password.contact (specialChar);
}

function shuffle(array){
  var password = array.passwordLength, temporaryValue, randompassword;
  while (0 !==password){
    randompassword = Math.floor(Math.random()* password);
    password -=1;
    temporaryValue = array [password];
    array[password]= array [randompassword];
    array[randompassword] = temporaryValue;

  }
  return array;

}


 //document.getElementById("password").innerHTML =
// Math.floor(Math.random() * 101);   




  
  

  


  

 
    





