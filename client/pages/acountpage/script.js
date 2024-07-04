const homelogo = document.querySelector(".logo");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const footerLetterBtn = document.querySelector(".letter-btn.footer");
const emailbtnFooter =document.querySelector(".enter-btn.footer");

const createBtn = document.querySelector(".create-btn");

const burgerNavbarlogo = document.getElementById("burgerIcon");
const burgerMenu = document.querySelector(".navbar.burger-menu");


const userNameinput = document.getElementById("usernameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmInput = document.getElementById("confirmInput");

const message = document.querySelectorAll(".message");


const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  
homelogo.addEventListener("click",()=>{
    window.location.href = "../../pages/home/index.html"
})

signupBtn.addEventListener("click",()=>{
    window.location.href = "../../pages/acountpage/index.html"
})

loginBtn.addEventListener("click" , ()=>{
    window.location.href = "../../pages/login/index.html"
})

footerLetterBtn.addEventListener("click",()=>{
    regexEmailFooter();
})
    

createBtn.addEventListener("click",()=>{
registerForm();

})

function registerForm(){
message.forEach(message =>{
    message.textContent = ""
});
if(userNameinput.value === ""){
    message[0].textContent = "*Required Field";
    message[0].style.color = "red"
}
else if(userNameinput.value.length < 3){
    message[0].textContent = "Username must be at least 3 characters"
}
if(emailInput.value === ""){
    message[1].textContent = "*Required Field";
    message[1].style.color = "red"
}
else if (!EMAIL_REGEX.test(emailInput.value)){
    message[1].textContent = "Email is wrong format";
    message[1].style.color = "red"
}
if(passwordInput.value === ""){
    message[2].textContent = "*Required Field";
    message[2].style.color = "red"
}
else if(passwordInput.value.search(/[a-z]/)<0){
    message[2].textContent = "Your password must contain at least one letter."
    message[2].style.color = "red"
}
else if(passwordInput.value.search(/[A-Z]/)<0){
    message[2].textContent = "Your password must contain at least one upper letter."
    message[2].style.color = "red"
}
else if(passwordInput.value.search(/[!#$%&?]/)<0){
    message[2].textContent = "Your password must contain at least one special character."
    message[2].style.color = "red"
}
if(confirmInput.value === ""){
    message[3].textContent = "*Required Field";
    message[3].style.color = "red"
}
else if(confirmInput.value !== passwordInput.value){
    message[3].textContent = "Confirm password must match with password!";
    message[3].style.color = "red"
}
else{
    Toastify({
        text: "Account create successfully",
        close:true,
        duration: 3000
        }).showToast();
}
}

function regexEmailFooter() {
      if (emailbtnFooter.value === "") {
         Toastify({
          text: "Email is required",
          duration: 3000,
          close:true,
          gravity: "bottom", 
          positionLeft: false,
         }).showToast();
      } else if (!EMAIL_REGEX.test(emailbtnFooter.value)) {
         Toastify({
          text: "Email is wrong format!",
          duration: 3000,
          close:true,
          backgroundColor: "red",
          gravity: "bottom", 
          positionLeft: false,
         }).showToast();
      } else if (EMAIL_REGEX.test(emailbtnFooter.value)) {
         Toastify({
          text: "Email sent",
          duration: 3000,
          close:true,
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
          gravity: "bottom", 
          positionLeft: false,
         }).showToast();
      }
     emailbtnFooter.value = ""
}

burgerNavbarlogo.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('open');
  
  });
  window.addEventListener('resize',()=>{
    if(window.innerWidth>1280){
      burgerMenu.classList.remove('open')
    }
  })
