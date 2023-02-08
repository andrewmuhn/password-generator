// Assignment code here

// Object contain arrays of all possible characters a password may use grouped into key value pairs that the user can select.
const chars = {
  lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  num: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  special: [`!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, '`', `{`, `|`, `}`, `~`]
}

// function getting a random number with a variable passed for the length.
const random = arr => Math.floor(Math.random() * arr.length);

// variables that grab a random character from each of the above arrays
const lowerRandom = chars.lower[random(chars.lower)];
const upperRandom = chars.upper[random(chars.upper)];
const numRandom = chars.num[random(chars.num)];
const specialRandom = chars.special[random(chars.special)];

function generatePassword() {
  let charNum = prompt('How many characters ?', '20');

  let lowerCase = confirm('Include lower case letters?');
  if (lowerCase) {

  }

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