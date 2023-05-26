/* List of special charaters to be included in password when user answers Ok to include special character on the prompt */
let specialCharacters = [
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
/* represents the button in html for generating password with id of generate  */
let generateBtn = document.querySelector("#generate");


function getPasswordOptions() {
  /* variable to store user input on how many characters they want the password to have*/
  let length = parseInt(
    prompt(
      "How many characters would you like your password to contain? Note: Must be atleast 8 characters "
    ), //added note to input minimum of 8 characters for better security in the prompt screen
    10,
      
  
  );
  /* checks that user inputs a number in password length, prompts terminate if false */
  if (Number.isNaN(length)) {
    alert("Password length must be provided as a number");
    return;
  }

  /* checks that user inputs numbers equal to 8 or above for better security, prompt terminate if false */
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }

  /* checks that user doesn;t exceed 128 max character for password length, terminates if false */
  if (length > 128) {
    alert("Password length must less than 129 characters");
    return;
  }
  /* prompt options whether user wants to include special characters on the password */
  let hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );

  /* prompt options whether user wants to include numbers on the password */
  let hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );

  /* prompt option whether user wants to include lower-case letters in the password */
  let hasLowerCasedCharacters = confirm(
    "Click OK to confirm including lowercase characters."
  );

  /* prompt option whether user wants to include upper-case letters in the password */
  let hasUpperCasedCharacters = confirm(
    "Click OK to confirm including uppercase characters."
  );

  /* conditional statement to check if user selected atleast 1 character type to include in the password, prompt appears when all 4 variable are returned false and terminates */
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert("Atleast one character type must be selected");
    return;
  }

  /* object to store user inputs on password length, if to include special characters, numbers, lower and or uppercase letters */
  let passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  };

  return passwordOptions;
}

/* function to generate random items from the array - number, uppercase, lowercase letters and special characters */
function getRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let randElement = arr[randIndex];

  return randElement;
}

/* function to run when generating password based from users input on previous prompts */
function generatePassword() {
  let options = getPasswordOptions();
  /*  variable to hold stored password while adding other elements*/
  let result = [];

  /* variable to hold random character generated- number, upper/lower case and special character to be included on the password */
  let possibleCharacters = [];

  /* variable to hold character from possibleCharacters function to be added on final password */
  let guaranteedCharacters = [];
  /* terminates the function if options doesnt exist */
  if (!options) return;

  /* conditional statement to check if user selected Ok in having special characters, if true , adds the and place them inside guaranteedCharacters for joining  */
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  /* conditional statement to check if user selected Ok in having numberic value, if true , adds the numberic value and place them inside guaranteedCharacters for joining */
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  /* conditional statement to check if user selected Ok in having lower case letters in password, if true , adds the lower case value and place them inside guranteedCharacters for joining later */
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  /* conditional statement to check if user selected Ok in having upper case letter in the password, if true, adds the uppercase letter and place them inside guaranteedCharacters for joining later */
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  /*loop to get possible characters based from the count of password length */
  for (let i = 0; i < options.length; i++) {
    let possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }

  /* adds minimum of atleast 1 character in the result */
  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join("");
}

/*returns the final generated password back in html to appear inside the text area */
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}


/* when generate password button is clicked it will run writePassword function to show the password in text area */
generateBtn.addEventListener("click", writePassword);

  