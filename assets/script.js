// Assignment Code
var generateBtn = document.querySelector("#generate");
var output = document.querySelector('#password');

function generatePassword(optionObj) {
  var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var num = [1, 2, 3, 4, 5, 6, 8, 9, 0]
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?']
  
}

//Length: between 8-128
//Character Types: upper, lower, num or special

function getPassword() {
  var wantLength = prompt('How long should your password be? Please keep your password between 8-128 characters.');
  var wantUpper = confirm('Do you want to include uppercase letter?');
  var wantLower = confirm('Do you want to include lowercase letters?');
  var wantNum = confirm('Do you want to include numbers?');
  var wantSpecial = confirm('Do you want to include special characters?');

  var parsedLength = parsedInt(wantLength);

  var options = {
    upper: wantUpper,
    lower: wantLower,
    num: wantNum,
    special: wantSpecial,
    length: parsedLength

  }

  generatePassword(options);

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

