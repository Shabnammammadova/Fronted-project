const homelogo = document.querySelector(".logo");
const signupBtn = document.querySelector(".signup-btn");
const marketplace = document.querySelector(".marketplace");
const nftCards = document.querySelector(".cards.nft-cards");

homelogo.addEventListener("click", () => {
  window.location.href = "../../pages/home/index.html";
});

signupBtn.addEventListener("click", () => {
  window.location.href = "../../pages/acountpage/index.html";
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
