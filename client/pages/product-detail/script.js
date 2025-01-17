const homelogo = document.querySelector(".logo");
const signupBtn = document.querySelector(".signup-btn");
const marketplace = document.querySelector(".marketplace");
const ranking = document.querySelector(".rankings");
const cardBody = document.querySelector(".card-body");
const cardInfo = document.querySelector(".card-info");
const creatorImg = document.querySelector(".card-info img");
const creatorDetailInfo = document.querySelector(".detail-info .left h1");
const creatorProfilVolume = document.querySelector(".profil-volume p");
const creatorProfilNftSold = document.querySelector(".profil-nftsold p");
const creatorProfilFollowers = document.querySelector(".profil-followers p");
const creatorProfileBio = document.querySelector(".profil-bio p");
const copyBtn = document.querySelectorAll(".copy-btn");



const creatorChainId = document.querySelector(".copy-btn input");


const burgerNavbarlogo = document.getElementById("burgerIcon");
const burgerMenu = document.querySelector(".navbar.burger-menu");


const footerLetterBtn = document.querySelector(".letter-btn.footer");
const emailbtnFooter =document.querySelector(".enter-btn.footer");

const loginBtn = document.querySelector(".login-btn");

const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

homelogo.addEventListener("click", () => {
  window.location.href = "../../pages/home/index.html";
});

signupBtn.addEventListener("click", () => {
  window.location.href = "../../pages/acountpage/index.html";
});

marketplace.addEventListener("click", () => {
  window.location.href = "../../pages/marketplace/index.html";
});

ranking.addEventListener("click",()=>{
  window.location.href = "../../pages/ranking/index.html"
})

loginBtn.addEventListener("click" , ()=>{
  window.location.href = "../../pages/login/index.html"
})
const searchParamStr = window.location.search;
const searchParam = new URLSearchParams(searchParamStr);
const id = searchParam.get("id");

if (!id) {
  window.open("../../pages/home/index.html");
}

async function getCreatorFromApi(id) {
  const response = await fetch(`${BASE_URL}/creators/${id}`);
  if (response.status !== 200) {
    return window.open("../../pages/home/index.html", "_self");
  }
  const product = await response.json();
  return product;
}




async function fillCreatorData(id) {
  const product = await getCreatorFromApi(id);
  creatorImg.src = `/${product.profileImgPath}`;
  creatorDetailInfo.textContent = `${product.name}`;
  creatorProfilVolume.textContent = `${product.volume}`;
  creatorProfilNftSold.textContent = `${product.nftSold}`;
  creatorProfilFollowers.textContent = `${product.followers}`;
  creatorProfileBio.textContent = `${product.bio}`;
  creatorChainId.value = `${product.chainId.slice(0,4)}...${product.chainId.slice(-4)}`;
  

  copyBtn.forEach(copyBtn => {
    copyBtn.addEventListener("click", () => {
      const formatChainId = `${product.chainId.slice(0, 4)}...${product.chainId.slice(-4)}`;
      
      creatorChainId.value = formatChainId;
  

      creatorChainId.select();
      creatorChainId.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(product.chainId);

      creatorChainId.value = `${product.chainId.slice(0, 4)}...${product.chainId.slice(-4)}`;
      Toastify({
        text: "Copy ChainId",
        close: true,
        gravity: "bottom",
        positionLeft: false,
        duration: 3000
      }).showToast();
    });
  });
  
product.nfts.forEach((nft) => {
    const nftCardElement = document.querySelector(".cards.nft-cards");
    nftCardElement.innerHTML += `
  <div class="card">
            <div class="card-header">
              <img src="/${nft.imgPath}" alt="" />
            </div>
            <div class="card-body">
              <div class="card-info">
                <p>${nft.name}</p>
                <span
                  ><img
                    src="../../../assets/images/Avatar 4.png"
                    alt=""
                  />MoonDancer</span
                >
              </div>
              <div class="card-footer">
                <div class="left">
                  <p>Price</p>
                  <span>${nft.price.value} ETH</span>
                </div>
                <div class="right">
                  <p>Highest Bid</p>
                  <span>${nft.highestBid.value} wETH</span>
                </div>
              </div>
            </div>
          </div> 
  `;
  });
}

fillCreatorData(id);

// copyBtn.forEach(copyBtn=>{
//   copyBtn.addEventListener("click", () => {
//     creatorChainId.select();
//     creatorChainId.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(creatorChainId.value);
//     Toastify({
//       text: "Copy ChainId",
//       close:true,
//       gravity: "bottom",
//       positionLeft: false, 
//       duration: 3000
//       }).showToast();
    
//   });
// })




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


burgerNavbarlogo.addEventListener('click', ()=>{
  burgerMenu.classList.toggle('open');

});
window.addEventListener('resize',()=>{
  if(window.innerWidth>1280){
    burgerMenu.classList.remove('open')
  }
})