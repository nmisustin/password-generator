// Assignment code here
//Arrays with the possible password inputs
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbol =["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ":", ";", "'", ",", "<", ".", ">", "/", "?"];

//Empty array to store all of the selected elements for the password
var charSelection = [];

//random number generator to select the elements I need
function selector(){
  var selection= Math.floor(Math.random()*charSelection.length);
  return selection;
}
//Start of generator code
var length = ""
  //password length prompt
  function passwordLength(){
    while (length ==="" || length === "null"){
      length = window.prompt("Please choose a password length between 8 and 128 characters.");
      if (length < 8 || length > 128){
        passwordLength();
      }
    }
  }
  passwordLength();
console.log(length)
  //Number letter and symbol prompts that add options to possible array.
  //concat() var charSelection= char selection.concat(uppercase, lowercase, number, symbol)
  function createArray(){
    var addUpper = window.confirm("Do you want uppercase letters?");
    if (addUpper){
      charSelection = charSelection.concat(uppercase);
    };
    var addLower = window.confirm("Do you want lowercase letters?");
    if (addLower){
      charSelection= charSelection.concat(lowercase);
    };
    var addNumber = window.confirm("Do you want numbers?");
    if(addNumber){
      charSelection= charSelection.concat(number);
    };
    var addSymbol = window.confirm("Do you want symbols?");
    if(addSymbol) {
      charSelection = charSelection.concat(symbol)
    }
    console.log(charSelection)
  }
  createArray()
  //use random number generator to select components

  //cylcle through until one of each of the asked for symbols is selected.



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
