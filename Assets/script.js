// Assignment code here
function generatePassword() {
  let charNum = prompt('How many characters ?', '20');

  let lowerCase = confirm('Include lower case letters?');

  let upperCase = confirm('Include uppercase letters?');

  let numeric = confirm('Include numbers?');

  let specialChar = confirm('Include special characters?');
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);