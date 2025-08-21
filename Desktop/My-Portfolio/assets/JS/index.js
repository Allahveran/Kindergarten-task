// hero hissə
let firstPhoto = document.querySelector(".firstPhoto");
let rightHero = document.querySelector(".rightHero");

//about hissə
let aboutTitle = document.querySelector(".aboutTitle");
let leftAbout = document.querySelector(".leftAbout");
let middleAbout = document.querySelector(".middleAbout");
let rightAbout = document.querySelector(".rightAbout");

//interestTitile hissə
let interestsTitle = document.querySelector(".interestsTitle");
let infoMovie = document.querySelector(".infoMovie");
let movieList = document.querySelector(".movieList");
let infoMusic = document.querySelector(".infoMusic");
let musicList = document.querySelector(".musicList");
let otherInterests = document.querySelector(".otherInterests");

//gallery hissə
let images = document.querySelector(".images");

const writeHtml = () => {
  // hero hissə

  let heroData = [
    {
      image: "./assets/images/firstPhoto.jpg",
      h2: "Salam",
      h1: "Mən, Məmmədov Allahverən",
      h3: "Və bu mənim portfoliomdur.",
    },
  ];
  firstPhoto.innerHTML = heroData
    .map((hero) => `<img src=${hero.image} alt="image">`)
    .join("");
  rightHero.innerHTML = heroData
    .map(
      (hero) => `<h2>${hero.h2}</h2>
                        <h1>${hero.h1}</h1>
                        <h3>${hero.h3}</h3>`
    )
    .join("");

  //about hissə

  let aboutData = [
    {
      title: "Haqqımda",
      first_image: "./assets/images/myChildhood.jpg",
      first_info:
        "Mən, Məmmədov Allahverən 1998-ci il,20 noyabr tarixində İsmayilli rayonunda anadan olmuşam. Orta təhsilimi 1 saylı məktəbdə almışam və 2016-cı ildə oranı bitirib Ali məktəbə qəbul olmuşam.",
      middle_image: "./assets/images/BDU.jpeg",
      middle_info:
        "2016-ci ildə Bakı Dövlət Universitetinin Coğrafiya Müəllimi ixtisasına qəbul olub, 2020-ci ildə bitirmişəm.",
      right_image: "./assets/images/myWorkTime.jpg",
      right_info: "Müəyyən illərdə Barmen və Barista işləmişəm",
    },
  ];
  aboutTitle.innerText = aboutData.map((about) => `${about.title}`).join("");
  leftAbout.innerHTML = aboutData
    .map(
      (about) => ` <div class="childhood">
                            <img src=${about.first_image} alt="image">
                        </div>
                        <p>${about.first_info}</p>`
    )
    .join("");
  middleAbout.innerHTML = aboutData
    .map(
      (about) => `<div class="education">
                            <img src=${about.middle_image} alt="image">
                        </div>
                        <p>${about.middle_info}</p>`
    )
    .join("");
  rightAbout.innerHTML = aboutData
    .map(
      (about) => `<div class="workTime">
                            <img src=${about.right_image} alt="image">
                        </div>
                        <p>${about.right_info}</p>`
    )
    .join("");

  //gallery hissə

  let random = "";
  for (let i = 1; i <= 16; i++) {
    let randomNumber = Math.ceil(Math.random() * 1000);
    random += `<img src="https://picsum.photos/1920/1080?random=${randomNumber}" alt="image">`;
  }
  images.innerHTML = random;

  //interestTitle hissə

  interestsTitle.innerText = `Maraqlar`;
  infoMovie.innerText = `Filmlərdən əsasən detektiv, drama və elmi-fantastik janrında filmləri xoşlayıram. Ən çox bəyəndiyim 10 filmin siyahısı:`;
  let movies = [
    "In Bruges",
    "Munich",
    "American History X",
    "Detachment",
    "Goodfellas",
    "Öğretmen",
    "Tangerines",
    "Дурак",
    "Fəryad",
    "About Elli",
  ];
  movieList.innerHTML = movies
    .map((movie) => `<li class="movieItem">${movie}</li>`)
    .join("");

  infoMusic.innerText = `Demək olar bütün janrda musiqiləri dinləyirəm, amm əsasən rok və klassik janrda musiqilərə daha çox önəm verirəm. Ən çox bəyəndiyim 10 musiqinin siyahısı:`;
  let musics = [
    "Joe Dassin - Et si n'existais pas",
    "Daft Punk - Veridis Quo",
    "The Half - Eyni səhifələr",
    "Vaqif Mustafazadə - Düşüncə",
    "iz Khalifa - Black and Yellow",
    "System Of A Down - Lonely Day",
    "Rammstein - Ohne Dich",
    "Виктор Цой - Группа Крови",
    "Soundrack of the film Memories of Murder",
    "Emre Aydın - Duymak istiyorum",
  ];
  musicList.innerHTML = musics
    .map((music) => `<li class="musicItem">${music}</li>`)
    .join("");

  otherInterests.innerHTML = `<p>Əlavə olaraq avtomobil dünyası ilə maraqlanıram və kokteyl hazırlamağı çox
                            sevirəm. 
                            Divar rəsmləri (graffiti) çəkməyi xoşlayıram.</p>
                        <div class="graffiti"><img src="./assets/images/graffiti.jpg" alt="image"></div>`;
};

writeHtml();

//contact hissə
let nameUser = document.querySelector("#name");
let surnameUser = document.querySelector("#surname");
let phoneUser = document.querySelector("#phone");
let messageUser = document.querySelector("#message");
let sendMessage = document.querySelector(".sendMessage");
let warning = document.querySelector(".warning");

let info = {
  name: "",
  surname: "",
  phone: "",
  message: "",
};

nameUser.addEventListener("change", (e) => {
  let nameValue = e.target.value;
  let regexNAme = /^[a-zA-Z\s]*$/;
  if (
    nameValue.length > 1 &&
    nameValue.length < 15 &&
    regexNAme.test(nameValue)
  ) {
    info.name = nameValue;
    nameUser.classList.remove("active");
  } else {
    info.name = "";
    nameUser.classList.add("active");
  }
});

surnameUser.addEventListener("change", (e) => {
  let surnameValue = e.target.value;
  let regexNAme = /^[a-zA-Z\s]*$/;
  if (
    surnameValue.length > 3 &&
    surnameValue.length < 15 &&
    regexNAme.test(surnameValue)
  ) {
    info.surname = surnameValue;
    surnameUser.classList.remove("active");
  } else {
    info.surname = "";
    surnameUser.classList.add("active");
  }
});

phoneUser.addEventListener("change", (e) => {
  let phoneValue = e.target.value;
  let regexPhone = /^[0-9\s+]*$/;
  if (
    phoneValue.length > 11 &&
    phoneValue.length < 20 &&
    regexPhone.test(phoneValue)
  ) {
    info.phone = phoneValue;
    phoneUser.classList.remove("active");
  } else {
    info.phone = "";
    phoneUser.classList.add("active");
  }
});

messageUser.addEventListener("change", (e) => {
  let messageValue = e.target.value;
  let regexMessage = /\S/;
  if (
    messageValue.length >= 0 &&
    messageValue.length <= 200 &&
    regexMessage.test(messageValue)
  ) {
    info.message = messageValue;
    messageUser.classList.remove("active");
  } else {
    info.message = "";
    messageUser.classList.add("active");
  }
});

const addInfo = () => {
  sendMessage.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      info.name !== "" &&
      info.surname !== "" &&
      info.phone !== "" &&
      info.message !== ""
    ) {
      console.log(info);
      warning.innerText = ``;
    } else {
      warning.innerText = `Zəhmət olmasa xanaları düzgün şəkildə doldurun!`;
    }
  });
};
addInfo();

//admin paneli
function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Sadə yoxlama (realda backend olmalıdır!)
  if (username === "Allahveran" && password === "1998") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "change.html";
  } else {
    error.textContent = "Yanlış istifadəçi adı və ya şifrə!";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "admin.html";
}

// Admin səhifəsini qorumaq üçün
if (window.location.pathname.includes("change.html")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "admin.html";
  }
}
