// Assignment Code
var generateBtn = document.querySelector("#generate");
var output = document.querySelector('#password');


function writePassword(password) {
  output.innerText = password;
}  

function generatePassword(optionsObj) {
  var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var num = [1, 2, 3, 4, 5, 6, 8, 9, 0];
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?'];
  
  var passwordOptions = [];
  var passwordOutput = [];

  if (optionsObj.lower) {
    passwordOptions = passwordOptions.concat(lower);
  }

  if (optionsObj.upper) {
    passwordOptions = passwordOptions.concat(upper);
  }

  if (optionsObj.num) {
    passwordOptions = passwordOptions.concat(num);
  }

  if (optionsObj.special) {
    passwordOptions = passwordOptions.concat(special);
  }

  for (var i = 0; i < optionsObj.amount; i++) {
    var randomPassword = passwordOptions[Math.floor(Math.random()* passwordOptions.length)];

    passwordOutput.push(randomPassword)
  }

}



//Length: between 8-128
//Character Types: upper, lower, num or special

function writePassword() {
  var wantAmount = prompt('How long should your password be? Please keep your password between 8-128 characters.');
  var wantUpper = confirm('Do you want to include uppercase letter?');
  var wantLower = confirm('Do you want to include lowercase letters?');
  var wantNum = confirm('Do you want to include numbers?');
  var wantSpecial = confirm('Do you want to include special characters?');

  var parsedAmount = parsedInt(wantAmount);

  var options = {
    upper: wantUpper,
    lower: wantLower,
    num: wantNum,
    special: wantSpecial,
    length: parsedAmount

  }

  generatePassword(options);

}


// Write password to the #password input
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

