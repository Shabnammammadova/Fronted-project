const homelogo = document.querySelector(".logo");
const signupBtn = document.querySelector(".signup-btn");
const marketplace = document.querySelector(".marketplace");
const creatorimgElement = document.querySelector(".card.card-img img");
const creatornameElement = document.querySelector(".card-body h3");
const creatorpriceElment = document.querySelector(".card-body p span");




homelogo.addEventListener("click",()=>{
    window.location.href = "../../pages/home/index.html"
})

signupBtn.addEventListener("click",()=>{
    window.location.href = "../../pages/acountpage/index.html"
})

marketplace.addEventListener("click",()=>{
    window.location.href = "../../pages/marketplace/index.html"
})



const searchParamStr = window.location.search;
const searchParam = new URLSearchParams(searchParamStr);
const id = searchParam.get("id");

if(!id){
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
  creatorimgElement.src = product.profileImgPath;
  creatornameElement.textContent = product.name;
  creatorpriceElment.textContent = product.totalSale.value;
  creatorpriceElment.textContent = product.totalSale.currency;
}

fillCreatorData(id);