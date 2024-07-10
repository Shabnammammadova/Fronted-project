const homelogo = document.querySelector(".logo");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const marketplace = document.querySelector(".marketplace");


const burgerNavbarlogo = document.getElementById("burgerIcon");
const burgerMenu = document.querySelector(".navbar.burger-menu");


const footerLetterBtn = document.querySelector(".letter-btn.footer");
const emailbtnFooter =document.querySelector(".enter-btn.footer");

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
  



const aboutCreators = document.querySelector(".about-creators");


async function getCreators() {
    const response = await fetch(`${BASE_URL}/creators`);
    const data = await response.json();
    return data;
  }
  
  getCreators().then((data) => fillCard(data));
  
  async function fillCard(creators) {
    creators.forEach((creator) => {
      const aboutCards = document.querySelector(".about-creators");
      const cardElement = document.createElement("div");
      cardElement.classList.add("creators");
      cardElement.innerHTML += `
             <div class="creators">
            <div class="creator-info">
<div class="creator">
    <p>${creator.id}</p>
    <img src="/${creator.profileImgPath}" alt="">
    <span>${creator.name}</span>
</div>
<div class="creator-nft">
    <p class="p-change">+${creator.totalSale.value}%</p>
    <p class="p-nft">${creator.nftSold}</p>
    <p class="p-volume">${creator.volume} ETH</p>
</div>
            </div>
        </div>
  
      `;
      aboutCards.append(cardElement);
  
    });
}



//Rankings skeleton

setTimeout(()=>{
    const rankingCards = document.querySelectorAll('.about-creators .creators');
    rankingCards.forEach(card =>{
        card.style.background = '#3b3b3b';

        const img = card.querySelector('.creator img')
      if(img) { img.style.display = 'block';
      }
       const head = card.querySelector('.creator p')
       if (head){
        head.style.background = '#2b2b2b';
        head.style.color = '#858584';
       }
       const span = card.querySelector('.creator span');
       if(span){
        span.style.color = "#fff"
       }

       const pChange = card.querySelector('.creator-nft .p-change');
       if(pChange){
        pChange.style.color = "#00AC4F"
       }

       const bodyElements = card.querySelectorAll('.creator-nft,  .creator-nft .p-nft, .creator-nft .p-volume');
       bodyElements.forEach(el =>{
        el.style.background = "transparent";
        el.style.color = '#fff'
       })
        

    })
},3000)

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