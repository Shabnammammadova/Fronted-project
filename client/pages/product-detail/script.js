const homelogo = document.querySelector(".logo");
const signupBtn = document.querySelector(".signup-btn");
const marketplace = document.querySelector(".marketplace");
const cardBody = document.querySelector(".card-body");
const cardInfo = document.querySelector(".card-info");
const creatorImg = document.querySelector(".card-info img");
const creatorDetailInfo = document.querySelector(".detail-info .left h1");
const creatorProfilVolume = document.querySelector(".profil-volume p");
const creatorProfilNftSold = document.querySelector(".profil-nftsold p");
const creatorProfilFollowers = document.querySelector(".profil-followers p");
const creatorProfileBio = document.querySelector(".profil-bio p");
const copyBtn = document.querySelector(".copy-btn");
const creatorChainId = document.querySelector(".copy-btn input");

homelogo.addEventListener("click", () => {
  window.location.href = "../../pages/home/index.html";
});

signupBtn.addEventListener("click", () => {
  window.location.href = "../../pages/acountpage/index.html";
});

marketplace.addEventListener("click", () => {
  window.location.href = "../../pages/marketplace/index.html";
});

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
  creatorChainId.value = `${product.chainId}`;

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

copyBtn.addEventListener("click", () => {
  const copiedArea = document.createElement("input");
  copiedArea.value = copyBtn.textContent;
  copiedArea.select();
  copiedArea.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copiedArea.value);
});
