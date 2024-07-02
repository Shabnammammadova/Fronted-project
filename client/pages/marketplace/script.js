const homelogo = document.querySelector(".logo");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const marketplace = document.querySelector(".marketplace");
const nftCards = document.querySelector(".cards.nft-cards");

const footerLetterBtn = document.querySelector(".letter-btn.footer");
const emailbtnFooter =document.querySelector(".enter-btn.footer");

const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

homelogo.addEventListener("click", () => {
  window.location.href = "../../pages/home/index.html";
});

signupBtn.addEventListener("click", () => {
  window.location.href = "../../pages/acountpage/index.html";
});
loginBtn.addEventListener("click" , ()=>{
  window.location.href = "../../pages/login/index.html"
});

marketplace.addEventListener("click", () => {
  window.location.href = "../../pages/marketplace/index.html";
});

async function getCreatorFromApi() {
  const response = await fetch(`${BASE_URL}/nfts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pageSize: 6,
    }),
  });
  const product = await response.json();
  return product;
}

async function fillCreatorData() {
  const product = await getCreatorFromApi();
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

fillCreatorData();



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