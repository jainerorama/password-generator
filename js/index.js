// Dom Elements 
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"]

const passwordInput = document.getElementById("password-input")
const secondPassword = document.getElementById("second-password")
const passwordLengthEl = document.getElementById("password-length")
const clipboard = document.getElementById("clipboard-btn")
const toggle = document.querySelector(".toggle")
const text = document.querySelector(".text")

// ----------- Toggle Buttons Element -------------//
const toggleNumbers = document.getElementById("toggle-numbers")
const toggleSymbols = document.getElementById("toggle-symbols")



function render(arr){
  let passwordLength = parseInt(passwordLengthEl.value)
  passwordInput.value =""
  for (let i = 0; i < passwordLength; i++){
    const  randomNumber =  Math.floor(Math.random()*arr.length)
    passwordInput.value += arr[randomNumber]
  }
}


function generatePasswords() {
   
    console.log(toggleNumbers, toggleSymbols);
    
    if ( toggleNumbers.checked === true && toggleSymbols.checked === true){
      render(characters)
    }else if ( toggleNumbers.checked === true && toggleSymbols.checked === false){
      render(numbers)
    }else if (toggleSymbols.checked === true && toggleNumbers.checked === false){
      render(symbols)
    }else {
      render(letters)
    }
}

clipboard.addEventListener("click", function(){
    
  // Select the text field
  passwordInput.select();
  passwordInput.setSelectionRange(0, passwordInput.length); // For mobile devices
  
  // Copy the text inside the text field
  navigator.clipboard.writeText(passwordInput.value);
  
  clipboard.classList.add("active")
  // To remove the selection of the text 
  window.getSelection().removeAllRanges()

  setTimeout(function(){
     clipboard.classList.remove("active")
     passwordInput.blur()
  },2000)

}      
  
)

