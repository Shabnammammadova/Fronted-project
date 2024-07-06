const homelogo = document.querySelector(".logo");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const marketplace = document.querySelector(".marketplace");
const ranking = document.querySelector(".rankings");
const letterBtn = document.querySelector(".letter-btn");
const emailInputElement = document.querySelector(".enter-btn");

const footerLetterBtn = document.querySelector(".letter-btn.footer");
const emailbtnFooter =document.querySelector(".enter-btn.footer");

const burgerNavbarlogo = document.getElementById("burgerIcon");
const burgerMenu = document.querySelector(".navbar.burger-menu");

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

ranking.addEventListener("click",()=>{
  window.location.href = "../../pages/ranking/index.html"
})

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


letterBtn.addEventListener("click", () => {
  regexEmail();
});

function regexEmail() {
  if (emailInputElement.value === "") {
     Toastify({
      text: "Email is required",
      duration: 3000,
      close:true,
      gravity: "bottom", 
      positionLeft: false,
     }).showToast();
  } else if (!EMAIL_REGEX.test(emailInputElement.value)) {
     Toastify({
      text: "Email is wrong format!",
      duration: 3000,
      close:true,
      backgroundColor: "red",
      gravity: "bottom", 
      positionLeft: false,
     }).showToast();
  } else if (EMAIL_REGEX.test(emailInputElement.value)) {
     Toastify({
      text: "Email sent",
      duration: 3000,
      close:true,
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      gravity: "bottom", 
      positionLeft: false,
     }).showToast();
  }
  emailInputElement.value = ""
}


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



//card skeleton

setTimeout( ()=> {
  const cards = document.querySelectorAll('.cards.creators .card');
  cards.forEach(card => {
      card.style.background = '#3b3b3b';

      const img = card.querySelector('.card-img img');
      if (img) {
          img.style.display = 'block';
      }
      
      const head = card.querySelector('.card-head');
      if (head) {
          head.style.background = '#2b2b2b';
          head.style.color = ''; 
      }

      const p = card.querySelector('.card-head p');
      if (p) {
          p.style.color = '#858584'; 
      }
      const bodyPElement = card.querySelector(".card-body p");
      if(bodyPElement){
        bodyPElement.style.background = "transparent";
        bodyPElement.style.color = "#858584";
      }

      const bodyElements = card.querySelectorAll('.card-body, .card-body h3, .card-body p span');
      bodyElements.forEach(el => {
          el.style.background = 'transparent';
          el.style.color = '#fff'; 
      });
  
      const beforeAnimationElement = card.querySelector('::before');
      if (beforeAnimationElement) {
          beforeAnimationElement.style.background="3b3b3b"
      }

  });
}, 3000); 


//burger menu function 
burgerNavbarlogo.addEventListener('click', ()=>{
  burgerMenu.classList.toggle('open');

});
window.addEventListener('resize',()=>{
  if(window.innerWidth>1280){
    burgerMenu.classList.remove('open')
  }
})



function countDownTimer(){
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24


        let today = new Date(),
        dd = String (today.getDate()).padStart(2,"0")
        mm = String (today.getMonth() + 1).padStart(2,"0"),
        yyy = today.getFullYear(),
        nextYear = yyy +1,
        dayMonth = "07/13/",
        birthday = dayMonth + yyy,

        today = mm + "/" + dd + "/" + yyy;
        if(today>birthday){
          birthday = dayMonth +  nextYear;
        }
   
        const countDown = new Date(birthday).getTime(),
        x = setInterval(function timer(){
          const now = new Date().getTime(),
          distance =  countDown - now;

          document.getElementById("days").innerText = Math.floor(distance/(day));
          document.getElementById("hours").innerText = Math.floor(distance % (day)/(hour));
          document.getElementById("minutes").innerText = Math .floor(distance % (hour) / (minute));
          document.getElementById("seconds").innerText = Math.floor(distance % (minute) / (second))
        
   },1000)
}
countDownTimer()

