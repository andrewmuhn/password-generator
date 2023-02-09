// Assignment code here


//Psuedo Code:
//List of characters assigned to arrays that can be pulled from.
//create a function that selects a random number than can recieve a variable to pass for the "length"
//assign variables that pull from the random function by passing their respetive array length
//user is asked the length of password and if/if not to include lower, upper, numbers, or special characters
//convert length of password from string to a num and assign it to a variable
//randomly select one of the 4 variables that inturn pull a random character.
//push that selected value onto a string.
//repeate last 2 steps until passowrd length defined by the user is reached.


let passwordGenerated = ``;

// Object contain arrays of all possible characters a password may use grouped into key value pairs that the user can select.
const chars = {
  lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  special: [` `, `!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, '`', `{`, `|`, `}`, `~`]
}

// function getting a random number with a variable passed for the length.
const random = arr => Math.floor(Math.random() * arr.length);

// variables that grab a random character from each of the above arrays
//expected output: a-z
let lowerRandom = chars.lower[random(chars.lower)];
//expected output: A-Z
let upperRandom = chars.upper[random(chars.upper)];
//expected output: 0-9
let numRandom = chars.num[random(chars.num)];
//expected output:  !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
let specialRandom = chars.special[random(chars.special)];

// function that randomly selects a single character from the arrays in the chars object using the random selector variables.
const getRandomAllChar = () => {
  let number = Math.floor(Math.random() * 4);
  switch (number) {
    case 0:
      return lowerRandom;
    case 1:
      return upperRandom;
    case 2:
      return numRandom;
    case 3:
      return specialRandom;
  }
}

// Todo: add at the end of a for loop inside of generatePassword variable
// adds the randomly generated character to the end of the string in passwordGenerated. 
passwordGenerated += getRandomAllChar();

// ! Testing function. Delete in final code
console.log(getRandomAllChar() + ' running function');
console.log(passwordGenerated);

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