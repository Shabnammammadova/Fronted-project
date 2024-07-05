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