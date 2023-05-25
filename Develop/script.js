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


/* List of numbers to be included on the password when user asnwers Ok to include numberic values on the prompt */
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];






var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


