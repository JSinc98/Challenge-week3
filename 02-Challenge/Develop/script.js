const specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
const lowercaseLet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppercaseLet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numBers = ['0','1','2','3','4','5','6','7','8','9'];


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

   if (options.lowercaseLetters) {
    bigArray=bigArray.concat(lowercaseLet)
    temp.push(pickRandom(lowercaseLet))
   }

   if (options.capitalLetters) {
    bigArray=bigArray.concat(uppercaseLet)
    temp.push(pickRandom(uppercaseLet))
   }

   if (options.numbers){
    bigArray=bigArray.concat(numBers)
    temp.push(pickRandom(numBers))
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
 var passwordLength= prompt("How long does your password need to be? Minimum 8 to maximum 128 characters")
 while (passwordLength<8 || passwordLength>128) {
  passwordLength= prompt("Please enter a length for your password between 8-128 characters")
 }
 var specialCharacters= confirm("Do you want your password to have special characters?")
 var lowercaseLetters= confirm("Do you want your password to have lower case letters?")
 var capitalLetters= confirm("Do you want your password to have capital letters?") 
 var numbers= confirm("Do you want your password to have numbers?")

 return {
  passwordLength, lowercaseLetters, capitalLetters, specialCharacters, numbers
 }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
