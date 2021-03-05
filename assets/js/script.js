// Assignment code here
//Arrays with the possible password inputs
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbol =["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ":", ";", "'", ",", "<", ".", ">", "/", "?"];

//Empty array to store all of the selected elements for the password
var charSelection = [];
var charChosen = [];
//random number generator to select the elements I need
function selector(){
  var selection= Math.floor(Math.random()*charSelection.length);
  return selection;
}
//Start of generator code
var length = ""
  //password length prompt
function generatePassword(){
  function passwordLength(){
    while (true) {
      length = window.prompt("Please choose a password length between 8 and 128 characters.");
      if (length !== "" && length !== null && length >= 8 && length <= 128) {
        break;
      }
      else{
        window.alert("That is not a valid response.");
      }
    }
  }
  passwordLength();
  console.log(length)
    //Number letter and symbol prompts that add options to possible array.
    //concat() var charSelection= char selection.concat(uppercase, lowercase, number, symbol)
  var addUpper = window.confirm("Do you want uppercase letters?");
  var addLower = window.confirm("Do you want lowercase letters?");
  var addNumber = window.confirm("Do you want numbers?");
  var addSymbol = window.confirm("Do you want symbols?");
  function createArray(){
    if (addUpper){
      charSelection = charSelection.concat(uppercase);
    };
    if (addLower){
      charSelection= charSelection.concat(lowercase);
    };
    if(addNumber){
      charSelection= charSelection.concat(number);
    };
    if(addSymbol) {
      charSelection = charSelection.concat(symbol)
    }
    console.log(charSelection)
  }
  createArray()
    //use random number generator to select components
  
  function selectComponents(){
    charChosen = [];
    for ( var i = 0; i < length; i++) {
      charChosen = charChosen.concat(charSelection[selector()]);
    }
  }  
    //cylcle through until one of each of the asked for symbols is selected.
    // come up with a way to loop through each of the selected arrays to compare to charChosen (includes function?)
  function checkCharacters (password, characterSet){
    for (var i = 0; i < characterSet.length; i++){
      if (password.includes(characterSet[i])){
        return true;
      }
    }
    return false;
  }
  function checkAll() {
    if (addUpper && !checkCharacters(charChosen, uppercase)){
      return false;
    }
    if (addLower && !checkCharacters(charChosen, lowercase)){
      return false;
    }
    if (addNumber && !checkCharacters(charChosen, number)){
      return false;
    }
    if (addSymbol && !checkCharacters(charChosen, symbol)){
      return false;
    }
    return true;
  }
  do {
    selectComponents();
    console.log(charChosen.join(''));
  } while (!checkAll());
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = charChosen.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
