const homelogo = document.querySelector(".logo");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn")
const marketplace = document.querySelector(".marketplace");
const letterBtn = document.querySelector(".letter-btn");
const emailInputElement = document.querySelector(".enter-btn");

const footerLetterBtn = document.querySelector(".letter-btn.footer");
const emailbtnFooter =document.querySelector(".enter-btn.footer");

const burgerNavbarlogo = document.getElementById("burgerIcon");
const burgerMenu = document.querySelector(".navbar.burger-menu");

const message = document.querySelectorAll(".message");
const createBtn = document.querySelector(".create-btn");

const userNameinput = document.getElementById("usernameInput");
const emailInput = document.getElementById("emailInput");

const passwordInput = document.getElementById("passwordInput");


const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

homelogo.addEventListener("click", () => {
  window.location.href = "../../pages/home/index.html";
});

loginBtn.addEventListener("click" , ()=>{
  window.location.href = "../../pages/login/index.html"
})
signupBtn.addEventListener("click", () => {
  window.location.href = "../../pages/acountpage/index.html";
});

marketplace.addEventListener("click", () => {
  window.location.href = "../../pages/marketplace/index.html";
});




footerLetterBtn.addEventListener("click",()=>{
    regexEmailFooter();
})
    
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
  if(passwordInput.value === ""){
      message[1].textContent = "*Required Field";
      message[1].style.color = "red"
  }

  else{
      Toastify({
          text: "Login",
          close:true,
          duration: 3000
          }).showToast();
  }
}


burgerNavbarlogo.addEventListener('click', ()=>{
  burgerMenu.classList.toggle('open');

});
window.addEventListener('resize',()=>{
  if(window.innerWidth>1280){
    burgerMenu.classList.remove('open')
  }
})