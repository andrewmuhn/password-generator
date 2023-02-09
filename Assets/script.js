// Assignment code here


//Psuedo Code:
//List of characters assigned to arrays that can be pulled from.
//create an empty variable that will be used to store combined arrays
//create a function that selects a random number than can recieve a variable to pass for the "length"
//user is asked the length of password and if/if not to include lower, upper, numbers, or special characters
//convert length of password from string to a num and assign it to a variable
//based on user selections add the arrays together and save them to predefined variable
//randomly select a value from the new array the number of times that of the users selected password length
//push that selected value onto a string.
//repeate last 2 steps until passowrd length defined by the user is reached.
//return the finished password




// Object contain arrays of all possible characters a password may use grouped into key value pairs that the user can select.
const chars = {
  lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  num: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  special: [` `, `!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, '`', `{`, `|`, `}`, `~`]
}

//variable used to store the amalgamated array based on user preferences
let selection;

function generatePassword() {

  //variable used to store the password as it's created
  let passwordGenerated = ``;

  // function getting a random number with a variable passed for the length.
  const random = arr => Math.floor(Math.random() * arr.length);

  //user prompts to select length of password
  let charNum = prompt('How many characters long do you want your password?', '20');

  //validates that the initial prompt is both a number and between 8 and 128.
  passLength = parseInt(charNum);
  if (!charNum || isNaN(charNum) || passLength < 8 || passLength > 128) {
    alert('Please enter a numerical value between 8 and 128');
    return;
  }

  //user confirms weather or not to include lowercase letters, uppercase letters, numbers, and/or special characters
  let lowerCase = confirm('Include lower case letters?');
  let upperCase = confirm('Include uppercase letters?');
  let numeric = confirm('Include numbers?');
  let specialChar = confirm('Include special characters?');

  //all the options for each combination of selections. for each if statement it takes the selcted options and adds the respective arrays together using concat method
  if (lowerCase && upperCase && numeric && specialChar) {
    selection = chars.lower.concat(chars.upper, chars.num, chars.special);
  } else if (lowerCase && upperCase && numeric) {
    selection = chars.lower.concat(chars.upper, chars.num);
  } else if (lowerCase && upperCase && specialChar) {
    selection = chars.lower.concat(chars.upper, chars.special);
  } else if (lowerCase && specialChar && numeric) {
    selection = chars.lower.concat(chars.special, chars.num);
  } else if (specialChar && upperCase && numeric) {
    selection = chars.special.concat(chars.upper, chars.num);
  } else if (lowerCase && upperCase) {
    selection = chars.lower.concat(chars.upper);
  } else if (lowerCase && numeric) {
    selection = chars.lower.concat(chars.num);
  } else if (lowerCase && specialChar) {
    selection = chars.lower.concat(chars.special);
  } else if (upperCase && numeric) {
    selection = chars.upper.concat(chars.num);
  } else if (upperCase && specialChar) {
    selection = chars.upper.concat(chars.special);
  } else if (specialChar && numeric) {
    selection = chars.special.concat(chars.num);
  } else if (lowerCase) {
    selection = chars.lower;
  } else if (upperCase) {
    selection = chars.upper;
  } else if (numeric) {
    selection = chars.num;
  } else if (specialChar) {
    selection = chars.special;
  }
  //if no selections were made
  else {
    alert('You must make atleast one selection')
    return;
  }

  //-- for loop that runs the number of times the requested password length . it passed the new array, selection, into the random number function to get a random number the length of the array added each selection to the string passwordGenerated
  for (let i = 1; i <= passLength; i++) {
    let passChar = selection[random(selection)];
    passwordGenerated += passChar;
  }

  //return the generated password so that writePassword function can access it to display it to the browser
  return passwordGenerated;
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