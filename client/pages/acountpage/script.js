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

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

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

async function registerForm(){
  let allInput = true
message.forEach(message =>{
    message.textContent = ""
});
if(userNameinput.value === ""){
    message[0].textContent = "*Required Field";
    message[0].style.color = "red";
    allInput = false
}
else if(userNameinput.value.length < 3){
    message[0].textContent = "Username must be at least 3 characters";
    message[0].style.color = "red";
    allInput = false
}
if(emailInput.value === ""){
    message[1].textContent = "*Required Field";
    message[1].style.color = "red";
    allInput = false
}
else if (!EMAIL_REGEX.test(emailInput.value)){
    message[1].textContent = "Email is wrong format";
    message[1].style.color = "red";
    allInput = false
}
if(passwordInput.value === ""){
    message[2].textContent = "*Required Field";
    message[2].style.color = "red";
    allInput = false
}
else if(!PASSWORD_REGEX.test( passwordInput.value)){
    message[2].textContent = "Password is wrong format."
    message[2].style.color = "red";
    allInput = false
}
if(confirmInput.value === ""){
    message[3].textContent = "*Required Field";
    message[3].style.color = "red";
    allInput = false
}
else if(confirmInput.value !== passwordInput.value){
    message[4].textContent = "Confirm password must match with password!";
    message[4].style.color = "red";
    allInput = false
}
if (allInput) {
  try {
      const registerResponse = await fetch(`${BASE_URL}/register`, {
          method: 'POST',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              username: userNameinput.value,
              email: emailInput.value,
              password: passwordInput.value,
          })
      });

      const registerResult = await registerResponse.json();
      if (registerResponse.ok) {
          Toastify({
              text: "Account created succesfully!",
              close: true,
              duration: 3000,
              backgroundColor:"green"
          }).showToast();
      } else {
          Toastify({
              text: registerResult.error,
              close: true,
              duration: 3000,
              backgroundColor: "red",
          }).showToast();
      }
  } catch (error) {
      Toastify({
          text: "An error occurred.",
          close: true,
          duration: 3000,
          backgroundColor: "red",
      }).showToast();
  }
}
}

    

function regexEmailFooter() {
  if (emailbtnFooter.value === "") {
    showToast("Email is required", "blue");
  } else if (!EMAIL_REGEX.test(emailbtnFooter.value)) {
    showToast("Email is wrong format!", "red");
  } else {
    showToast("Email sent", "linear-gradient(to right, #00b09b, #96c93d)");
  }
  emailbtnFooter.value = "";
}

function showToast(message, bgColor) {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    backgroundColor: bgColor,
    gravity: "bottom",
    positionLeft: false,
  }).showToast();
}

burgerNavbarlogo.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('open');
  
  });
  window.addEventListener('resize',()=>{
    if(window.innerWidth>1280){
      burgerMenu.classList.remove('open')
    }
  })
