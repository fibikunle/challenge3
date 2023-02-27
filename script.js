// Assignment Code
var generateBtn = document.querySelector("#generate");

//set variables 
var passwordlength;
var lowercasechar = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var uppercasechar = "A,B,C,D,E,F,G,G,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var numbers = "1,2,3,4,5,6,7,8,9,0"
var specialcharacters = ['!','"','#','$','%','&','(',')','*','+','-','.','/','≈:',';','<','=','>','?','@','\',','_','{','|','}','~'];
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

//Prompt for lowercasevalidation
function lowercaseconditionsaremet (){
  lowercasevalidation = prompt ('Do you want lower case to be included in your password? Enter  Y or N');
  lowercasevalidation = lowercasevalidation.toLowerCase();

  if ('') {
    alert ('Please type Y or N');
    lowercaseconditionsaremet();
  }

}
//run multiple functions and generate pwd  
function generatePassword (){
  pwdlength ();
  console.log(passwordlength);
  lowercaseconditionsaremet();
  console.log (lowercasevalidation);
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
