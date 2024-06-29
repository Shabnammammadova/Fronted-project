const homelogo = document.querySelector(".logo");
const signupBtn = document.querySelector(".signup-btn");
// const createCard = document.querySelector(".creator-cards .cards .card");
const marketplace = document.querySelector(".marketplace");
// const cardElemnt = document.querySelector(".creator-cards .cards")

homelogo.addEventListener("click", () => {
  window.location.href = "../../pages/home/index.html";
});

signupBtn.addEventListener("click", () => {
  window.location.href = "../../pages/acountpage/index.html";
});

// createCard.addEventListener("click" , ()=>{
//     window.location.href = "../../pages/product-detail/index.html"
// })

marketplace.addEventListener("click", () => {
  window.location.href = "../../pages/marketplace/index.html";
});

async function getCreators() {
  const response = await fetch(`${BASE_URL}/creators`);
  const data = await response.json();
  return data;
}

getCreators().then((data) => fillCard(data));

async function fillCard(creators) {
  console.log(creators);
  creators.forEach((creator) => {
    const productCards = document.querySelector(".cards.creators");
    productCards.innerHTML += `
    <div class="card">
    <div class="card-head">
        <p>${creator.id}</p>
    </div>
    <div class="card-img">
        <img src="/${creator.profileImgPath}" alt="">
    </div>
    <div class="card-body">
        <h3>${creator.name}</h3>
        <p>Total Sales: <span>${creator.totalSale.value} ${creator.totalSale.currency}</span></p>
    </div>
</div>
    `;
  });
}
