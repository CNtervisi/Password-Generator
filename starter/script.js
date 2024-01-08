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
  var passwordLength = prompt ("Choose a password length between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Invald length. Please choose a number between 8 and 128.");
    return getPasswordOptions();
  }
  //if the user inputs anything else that is not a number between 8 OR 128, the prompt will ask the user to enter a number.
  if (isNaN(passwordLength)) {
    alert("Invalid input. Please enter a number.");
    return getPasswordOptions();
  }
  var lowerCase = confirm ("Do you want lowercase letters?");
  var upperCase = confirm ("Do you want uppercase letters?");
  var numbers = confirm ("Do you want numbers?");
  var symbols = confirm ("Do you want symbols?");
  return { passwordLength, lowerCase, upperCase, numbers, symbols };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Function to generate random password with user's input
function generatePassword() {
  var options = getPasswordOptions ();
  var password = "";
  var typesCount = options.lowerCase + options.upperCase + options.numbers + options.symbols;
  var all = [];
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
  for (var i = 0; i < options.passwordLength; i++) {
    password += getRandom(all);
  }

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