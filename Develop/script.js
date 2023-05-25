/* List of special charaters to be included in password when user answers Ok to include special character on the prompt */
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

/* List of lower case letters to be used when user selects Ok to include lower case alphabet in the prompt */
let lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];


/* List of upper case letters to be used when user answers Ok in including upper case letters in the prompt */
let upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// List of numeric values to be included in password when used selects Ok to include numbers in the prompt
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function getPasswordOptions()
  // variable to store user input on how many characters they want the password to have
  let length = parseInt(
    prompt('How many characters would you like your password to contain? Note: Must be atleast 8 characters '), //added note to input minimum of 8 characters for better security
    10
  );
























































var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


