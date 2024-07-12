const homelogo = document.querySelector(".logo");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const marketplace = document.querySelector(".marketplace");
const nftCards = document.querySelector(".cards.nft-cards");

const footerLetterBtn = document.querySelector(".letter-btn.footer");
const emailbtnFooter = document.querySelector(".enter-btn.footer");

const burgerNavbarlogo = document.getElementById("burgerIcon");
const burgerMenu = document.querySelector(".navbar.burger-menu");

const loadMoreBtn = document.querySelector(".load-more-btn");

const ranking = document.querySelector(".rankings");
const collectionSpanElement = document.querySelector(".collection span");

const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

let skip = 0;
let pageSize = 6;
let totalNFT = 18;

let count = 0;

let cardSaveLocalStorage = [];
const localStorageCard = localStorage.getItem("card");
if (localStorageCard) {
  try {
    cardSaveLocalStorage = JSON.parse(localStorageCard);
  } catch (error) {
    console.error("Error localStorage 'card':", error);
   
    cardSaveLocalStorage = [];
  }
}

homelogo.addEventListener("click", () => {
  window.location.href = "../../pages/home/index.html";
});

signupBtn.addEventListener("click", () => {
  window.location.href = "../../pages/acountpage/index.html";
});

loginBtn.addEventListener("click", () => {
  window.location.href = "../../pages/login/index.html";
});

marketplace.addEventListener("click", () => {
  window.location.href = "../../pages/marketplace/index.html";
});

ranking.addEventListener("click", () => {
  window.location.href = "../../pages/ranking/index.html";
});

async function getCreatorFromApi(skip, pageSize) {
  const response = await fetch(`${BASE_URL}/nfts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      skip,
      pageSize,
    }),
  });
  const product = await response.json();

  return product;
}

async function fillCreatorData() {
  const product = await getCreatorFromApi(skip, pageSize);
  const nftCardElement = document.querySelector(".cards.nft-cards");

  product.nfts.forEach((nft) => {
    nftCardElement.innerHTML += `
      <div class="card">
        <i class="fa-solid fa-heart" id="i"></i>
        <div class="card-header">
          <img src="/${nft.imgPath}" alt="" />
        </div>
        <div class="card-body">
          <div class="card-info">
            <p>${nft.name}</p>
            <span><img src="../../../assets/images/Avatar 4.png" alt="" />MoonDancer</span>
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
      </div>`;
  });

  cardAddCollection();
  skip += pageSize;
  if (skip >= totalNFT) {
    loadMoreBtn.style.display = "none";
  }

  localStorage.setItem("card", JSON.stringify(cardSaveLocalStorage));
}

loadMoreBtn.addEventListener("click", fillCreatorData);

fillCreatorData();

footerLetterBtn.addEventListener("click", () => {
  regexEmailFooter();
});

function regexEmailFooter() {
  if (emailbtnFooter.value === "") {
    Toastify({
      text: "Email is required",
      duration: 3000,
      close: true,
      gravity: "bottom",
      positionLeft: false,
    }).showToast();
  } else if (!EMAIL_REGEX.test(emailbtnFooter.value)) {
    Toastify({
      text: "Email is in wrong format!",
      duration: 3000,
      close: true,
      backgroundColor: "red",
      gravity: "bottom",
      positionLeft: false,
    }).showToast();
  } else if (EMAIL_REGEX.test(emailbtnFooter.value)) {
    Toastify({
      text: "Email sent",
      duration: 3000,
      close: true,
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      gravity: "bottom",
      positionLeft: false,
    }).showToast();
  }
  emailbtnFooter.value = "";
}

burgerNavbarlogo.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1280) {
    burgerMenu.classList.remove("open");
  }
});


function cardAddCollection() {
  const heartIcons = document.querySelectorAll('.cards.nft-cards .card #i');

  count = parseInt(localStorage.getItem("count")) || cardSaveLocalStorage.filter(Boolean).length;

  heartIcons.forEach((heartIcon, index) => {
    heartIcon.addEventListener('click', () => {
      heartIcon.classList.toggle('active');
      if (heartIcon.classList.contains('active')) {
        count++;
        cardSaveLocalStorage[index] = true;
      } else {
        count--;
        cardSaveLocalStorage[index] = false;
      }
      collectionSpanElement.textContent = count;

      localStorage.setItem("count", count.toString());
      localStorage.setItem("card", JSON.stringify(cardSaveLocalStorage));
    });

    if (cardSaveLocalStorage[index]) {
      heartIcon.classList.add('active');
    }
  });

  collectionSpanElement.textContent = count.toString();

  const collectionNumber = document.querySelector(".collection");
  const created = document.querySelector(".created");

  collectionNumber.addEventListener('click', () => {
    if (!collectionNumber.classList.contains('active')) {
      collectionNumber.classList.add('active');
      created.classList.remove('active');
      collectionNumber.style.borderBottom = "2px solid #858584";
      created.style.borderBottom = "none";
      loadMoreBtn.style.display = "none";
      selectCard();
    }
  });

  created.addEventListener("click", () => {
    if (!created.classList.contains('active')) {
      created.classList.add('active');
      collectionNumber.classList.remove('active');
      created.style.borderBottom = "2px solid #858584";
      collectionNumber.style.borderBottom = "none";
      loadMoreBtn.style.display = "block";
      showAllCards();
    }
  });

  localStorage.setItem("card", JSON.stringify(cardSaveLocalStorage));
}


function selectCard() {
  const cards = document.querySelectorAll(".cards.nft-cards .card");

  cards.forEach((card) => {
    const heartIcon = card.querySelector('#i');

    if (heartIcon.classList.contains('active')) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }

  });
 
  localStorage.setItem("card", JSON.stringify(cardSaveLocalStorage));
}

function showAllCards() {
  const cards = document.querySelectorAll('.cards.nft-cards .card');

  cards.forEach((card) => {
    card.style.display = 'block';
  });
}
