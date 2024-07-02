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
          text: "Email is correct format",
          duration: 3000,
          close:true,
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
          gravity: "bottom", 
          positionLeft: false,
         }).showToast();
      }
     emailbtnFooter.value = ""
}
    