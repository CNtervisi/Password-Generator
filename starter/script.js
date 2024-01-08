// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt user to enter password length, ensure it's between 8 and 128
  var passwordLength = prompt ("Choose a password length between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Invald length. Please choose a number between 8 and 128.");
    return getPasswordOptions();
  }
 // Check if user input is a number, otherwise prompt again
  if (isNaN(passwordLength)) {
    alert("Invalid input. Please enter a number.");
    return getPasswordOptions();
  }
  // Confirm whether user wants lowercase, uppercase, numeric, and symbolic characters in the password
  var lowerCase = confirm ("Do you want lowercase letters?");
  var upperCase = confirm ("Do you want uppercase letters?");
  var numbers = confirm ("Do you want numbers?");
  var symbols = confirm ("Do you want symbols?");
  // Return the password options as an object
  return { passwordLength, lowerCase, upperCase, numbers, symbols };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Function to generate random password with user's input
function generatePassword() {
// Get the password options from the user
  var options = getPasswordOptions ();
  var password = "";
  var typesCount = options.lowerCase + options.upperCase + options.numbers + options.symbols;
  var all = [];
// Concatenate the character arrays based on user's preference
  if (options.lowerCase) {
    all = all.concat(lowerCasedCharacters);
  }
  if (options.upperCase) {
    all = all.concat (upperCasedCharacters);
  }
  if (options.numbers) {
    all = all.concat (numericCharacters);
  }
  if (options.symbols) {
    all = all.concat (specialCharacters);
  }
// Generate the password by randomly selecting characters until reaching the desired length
  for (var i = 0; i < options.passwordLength; i++) {
    password += getRandom(all);
  }
// Return the generated password
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);