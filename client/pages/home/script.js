const homelogo = document.querySelector(".logo");
const signupBtn = document.querySelector(".signup-btn");
const createCard = document.querySelector(".creator-cards .cards .card")


homelogo.addEventListener("click",()=>{
    window.location.href = "../../pages/home/index.html"
})

signupBtn.addEventListener("click",()=>{
    window.location.href = "../../pages/acountpage/index.html"
})

createCard.addEventListener("click" , ()=>{
    window.location.href = "../../pages/product-detail/index.html"
})