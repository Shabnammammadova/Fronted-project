const homelogo = document.querySelector(".logo");
const signupBtn = document.querySelector(".signup-btn");
const marketplace = document.querySelector(".marketplace");
const letterBtn = document.querySelector(".letter-btn");
const emailInputElement = document.querySelector(".enter-btn");

const errorMessage = document.getElementById("errormessage");

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

async function getCreators() {
  const response = await fetch(`${BASE_URL}/creators`);
  const data = await response.json();
  return data;
}

getCreators().then((data) => fillCard(data));

async function fillCard(creators) {
  creators.forEach((creator) => {
    const productCards = document.querySelector(".cards.creators");
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML += `
    <div class="card-head">
        <p>${creator.id}</p>
    </div>
    <div class="card-img">
        <img src="/${creator.profileImgPath}" alt="">
    </div>
    <div class="card-body">
        <h3>${creator.name}</h3>
        <p>Total Sales:   <span>${creator.totalSale.value} ${creator.totalSale.currency}</span></p>
    </div>

    `;
    productCards.append(cardElement);

    cardElement.addEventListener("click", () => {
      window.open(
        `../../pages/product-detail/index.html?id=${creator.id}`,
        "_self"
      );
    });
  });
}

// async function fillCard(creators) {
//   console.log(creators);
//   creators.forEach((creator) => {
//     const productCards = document.querySelector(".cards.creators");
//     productCards.innerHTML += `
//     <div class="card">
//     <div class="card-head">
//         <p>${creator.id}</p>
//     </div>
//     <div class="card-img">
//         <img src="/${creator.profileImgPath}" alt="">
//     </div>
//     <div class="card-body">
//         <h3>${creator.name}</h3>
//         <p>Total Sales: <span>${creator.totalSale.value} ${creator.totalSale.currency}</span></p>
//     </div>
// </div>
//     `;
//   });
// }

letterBtn.addEventListener("click", () => {
  regexEmail();
});

function regexEmail() {
  if (emailInputElement.value === "") {
     Toastify({
      text: "Email is required",
      duration: 3000,
     }).showToast();
  } else if (!EMAIL_REGEX.test(emailInputElement.value)) {
     Toastify({
       text: "Email is wrong format!",
       duration: 3000,
     }).showToast();
  } else if (EMAIL_REGEX.test(emailInputElement.value)) {
     Toastify({
       text: "Email is correct format",
       duration: 3000,
     }).showToast();
  }
}
