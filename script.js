// Assignment Code
var generateBtn = document.querySelector("#generate");

//set variables 
var passwordlength;
var lowercasechar = "abcdefghijklmnopqrstuvwxyz";
var uppercasechar = "ABCDEFGGIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialcharacters = "!#$%&(,)*+-./≈:;<=>?@\_{|}~";
var lowercasevalidation;
var uppercasevalidation;
var numbersvalidation;
var specialcharactersvalidation;

//Prompt for password length conditions 

function pwdlength (){
  passwordlength = prompt ("Please choose between 8 to 128 characters long for password length: ");
if (passwordlength < 8){
  alert('You have entered a password length less than 8,please enter a number between 8-128');
  pwdlength();
}else if (passwordlength>128){
  alert ('You have entered a password length greater than 128, please enter a number between 8-128');
  pwdlength ();
} else{
  alert ('Please follow further instructions to meet the conditions to generate a password');
}
  return passwordlength;
}
//Prompt for uppercase conditions 
function uppercaseconditionsaremet (){
  uppercasevalidation = prompt ("Do you want upper case to be included in your password?(Enter Yes or No)");
  uppercasevalidation = uppercasevalidation.toString();

  if ("") {
    alert ("Please type Yes or No");
    uppercaseconditionsaremet();

  } else if (uppercasevalidation === 'Yes'){
    uppercasevalidation = true;
    return uppercasevalidation;

  } else if (uppercasevalidation === 'No'){
    uppercasevalidation = false;
    return uppercasevalidation;
  } else {
    alert ("Type in Yes or No");
    uppercaseconditionsaremet();
  }
  return uppercasevalidation;
}

// Prompt for numbersconditionsaremet

function numbersconditions (){
  numbersvalidation = prompt ('Do you want numbers to be included in your password? Enter Yes or No');
  numbersvalidation = numbersvalidation.toString();

  if (numbersvalidation === null) {
    alert ('Please type Yes or No');
    numbersvalidation();
  } else if (numbersvalidation === "Yes"){
    numbersvalidation = true;
    return numbersvalidation;

  } else if (numbersvalidation === "No"){
    numbersvalidation = false;
    return numbersvalidation;

  } else {
    alert ("Type in Yes or No");
    numbersconditions();
  }
  return numbersvalidation
}

//special characters to be included in the password
function specialcharactersconditions (){
  specialcharactersvalidation = prompt ("Do you want special characters to be included in your password? Enter Yes or No");
  specialcharactersvalidation = specialcharactersvalidation.toString();

  if (specialcharactersvalidation === null || specialcharactersvalidation === "") {
    alert ("Please type Yes or No");
    specialcharactersconditions();
  }else if (specialcharactersvalidation === "Yes"){
    specialcharactersvalidation = true;
    return specialcharactersvalidation;
  }else if (specialcharactersvalidation === "No"){
    specialcharactersvalidation = false;
    return specialcharactersvalidation;

  } else {
    alert ("Type Yes or No");
    specialcharactersconditions ();
  }return specialcharactersvalidation;
  }
//functions for generating password 

function generatePassword (){
  pwdlength ();
  console.log(passwordlength);
  uppercaseconditionsaremet();
  console.log (uppercasevalidation);
  numbersconditions();
  console.log(numbersvalidation);
  specialcharactersconditions();
  console.log(specialcharactersvalidation);


var xters = lowercasechar;
var pwd = "";
if (uppercasevalidation && specialcharactersvalidation && numbersvalidation){
  xters += uppercasechar + specialcharacters + numbers;
} else if (uppercasevalidation && numbersvalidation){
  xters += uppercasechar + numbers;
} else if (numbersvalidation && specialcharactersvalidation){
  xters += numbers + specialcharacters;
}else if (uppercasevalidation && specialcharactersvalidation){
  xters += uppercasechar + specialcharacters;
}else if (numbersvalidation) {
  xters += numbersvalidation;
}else if (uppercasechar){
  xters += uppercasechar
}else if (specialcharactersvalidation){
  xters += specialcharacters

}else{
  xters === lowercasechar;
}

for (var i = 0; i < passwordlength; i++){
  pwd += xters.charAt(Math.floor(Math.random()*xters.length));
}
return pwd
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
