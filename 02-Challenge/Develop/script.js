const specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password

}

function generatePassword() {
   var options= userSelections()
   console.log(options);
   var bigArray=[]
   var finalPassword=[]
   var temp=[] 
   if (options.specialCharacters) {
    bigArray=bigArray.concat(specialChars)
    temp.push(pickRandom(specialChars))
   }

   for (let i = 0; i < options.passwordLength; i++) {
    finalPassword.push(pickRandom(bigArray)) 
  }
  for (let i = 0; i < temp.length; i++) {
    finalPassword[i]=temp[i]
  }
  
  return finalPassword.join("")
}
function pickRandom(array) {
  var randomIndex=(Math.floor(Math.random()*array.length))
  return array[randomIndex]
}


function userSelections() {
 var passwordLength= prompt("How long does your password need to be?")
 var capitalLetters= confirm("Does your password require capital letters?") 
 var lowercaseLetters= confirm("Does your password need lower case letters?")
 var specialCharacters= confirm("Does your password require special characters?")
 var numbers= confirm("Does your password need numbers?")
 return {
  passwordLength, lowercaseLetters, capitalLetters, specialCharacters, numbers
 }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
