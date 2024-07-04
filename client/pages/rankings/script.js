const homelogo = document.querySelector(".logo");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const marketplace = document.querySelector(".marketplace");

const burgerNavbarlogo = document.getElementById("burgerIcon");
const burgerMenu = document.querySelector(".navbar.burger-menu");


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
loginBtn.addEventListener("click" , ()=>{
    window.location.href = "../../pages/login/index.html"
});
  
burgerNavbarlogo.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('open');
  
  });
  window.addEventListener('resize',()=>{
    if(window.innerWidth>1280){
      burgerMenu.classList.remove('open')
    }
  })
  