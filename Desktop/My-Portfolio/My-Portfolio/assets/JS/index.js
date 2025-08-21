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
  firstPhoto.innerHTML = `<img src="./assets/images/firstPhoto.jpg" alt="image">`;
  rightHero.innerHTML = `<h2>Salam</h2>
                        <h1>Mən, Məmmədov Allahverən</h1>
                        <h3>Və bu mənim portfoliomdur.</h3>`;

  //about hissə
  aboutTitle.innerText = `Haqqımda`;
  leftAbout.innerHTML = ` <div class="childhood">
                            <img src="./assets/images/myChildhood.jpg" alt="image">
                        </div>
                        <p>Mən, Məmmədov Allahverən 1998-ci il,20 noyabr tarixində İsmayilli rayonunda anadan olmuşam.
                            Orta təhsilimi 1 saylı məktəbdə almışam və 2016-cı ildə oranı bitirib Ali məktəbə qəbul
                            olmuşam.</p>`;
  middleAbout.innerHTML = `<div class="education">
                            <img src="./assets/images/BDU.jpeg" alt="image">
                        </div>
                        <p>2016-ci ildə Bakı Dövlət Universitetinin Coğrafiya Müəllimi ixtisasına qəbul olub, 2020-ci
                            ildə bitirmişəm.</p>`;
  rightAbout.innerHTML = `<div class="workTime">
                            <img src="./assets/images/myWorkTime.jpg" alt="image">
                        </div>
                        <p>Müəyyən illərdə Barmen və Barista işləmişəm</p>`;

  //interestTitile hissə
  interestsTitle.innerText = `Maraqlar`;
  infoMovie.innerText = `Filmlərdən əsasən detektiv, drama və elmi-fantastik janrında filmləri xoşlayıram. Ən çox bəyəndiyim 10 filmin siyahısı:`;
  movieList.innerHTML = ` <li class="movieItem">In Bruges</li>
                            <li class="movieItem">Munich</li>
                            <li class="movieItem">American History X</li>
                            <li class="movieItem">Detachment</li>
                            <li class="movieItem">Goodfellas</li>
                            <li class="movieItem">Öğretmen</li>
                            <li class="movieItem">Tangerines</li>
                            <li class="movieItem">Дурак</li>
                            <li class="movieItem">Fəryad</li>
                            <li class="movieItem">About Elli</li>`;
  infoMusic.innerText = `Demək olar bütün janrda musiqiləri dinləyirəm, amm əsasən rok və klassik janrda musiqilərə daha çox önəm verirəm. Ən çox bəyəndiyim 10 musiqinin siyahısı:`;
  musicList.innerHTML = `<li class="musicItem">Joe Dassin - Et si n'existais pas</li>
                            <li class="musicItem">Daft Punk - Veridis Quo</li>
                            <li class="musicItem">The Half - Eyni səhifələr</li>
                            <li class="musicItem">Vaqif Mustafazadə - Düşüncə</li>
                            <li class="musicItem">Wiz Khalifa - Black and Yellow</li>
                            <li class="musicItem">System Of A Down - Lonely Day</li>
                            <li class="musicItem">Rammstein - Ohne Dich</li>
                            <li class="musicItem">Виктор Цой - Группа Крови</li>
                            <li class="musicItem">Soundrack of the film "Memories of Murder"</li>
                            <li class="musicItem">Emre Aydın - Duymak istiyorum</li>`;
  otherInterests.innerHTML = `<p>Əlavə olaraq avtomobil dünyası ilə maraqlanıram və kokteyl hazırlamağı çox
                            sevirəm. 
                            Divar rəsmləri (graffiti) çəkməyi xoşlayıram.</p>
                        <div class="graffiti"><img src="./assets/images/graffiti.jpg" alt="image"></div>`;

  //gallery hissə
  images.innerHTML = `<img src="https://picsum.photos/1920/1080?random=1" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=2" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=3" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=4" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=5" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=6" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=7" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=8" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=9" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=10" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=11" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=12" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=13" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=14" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=15" alt="image">
                    <img src="https://picsum.photos/1920/1080?random=16" alt="image">`;
};
writeHtml();









//contact hissə
let nameUser=document.querySelector("#name")
let surnameUser=document.querySelector("#surname")
let phoneUser=document.querySelector("#phone")
let messageUser=document.querySelector("#message")
let sendMessage=document.querySelector(".sendMessage")
let warning=document.querySelector(".warning")



let info={
    name:"",
    surname:"",
    phone:"",
    message:""
}


nameUser.addEventListener("change",(e)=>{
    let nameValue=e.target.value
    let regexNAme=/^[a-zA-Z\s]*$/
    if(nameValue.length>3 &&nameValue.length<15 && regexNAme.test(nameValue)){
     info.name=nameValue
    }else{
       info.name!==nameValue 
       nameUser.style.border="4px solid red"
        
    }
   
})

surnameUser.addEventListener("change",(e)=>{
 let surnameValue=e.target.value
    let regexNAme=/^[a-zA-Z\s]*$/
    if(surnameValue.length>3 &&surnameValue.length<15 && regexNAme.test(surnameValue)){
     info.surname=surnameValue
    }else{
       info.name!==surnameValue 
       surnameUser.style.border="4px solid red"
        
    }
})

phoneUser.addEventListener("change",(e)=>{
let phoneValue=e.target.value
let regexPhone=/^[0-9\s+]*$/
if(phoneValue.length>11 && phoneValue.length<20 && regexPhone.test(phoneValue)){
info.phone=phoneValue
}else{
info.phone!==phoneValue
phoneUser.style.border="4px solid red"
}
})

messageUser.addEventListener("change",(e)=>{
    let messageValue=e.target.value
    let regexMessage=/\S/;
    if(messageValue.length>=0&&messageValue.length<200 &&  regexMessage.test(messageValue)){
       info.message=messageValue 
    }else{
       info.message!==messageValue
       messageUser.style.border="4px solid red" 
        
    }

})

const addInfo=()=>{
    sendMessage.addEventListener("click",(e)=>{
        e.preventDefault()
        if(info.name!=="" && info.surname!=="" && info.phone!=="" && info.message!==""){
       console.log(info)
        }else{
         warning.innerText=`Zəhmət olmasa xanaları düzgün şəkildə doldurun!`  
        }
        
    })
}
addInfo()





//admin paneli
function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Sadə yoxlama (realda backend olmalıdır!)
  if (username === "Allahveran" && password === "1998") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    error.textContent = "Yanlış istifadəçi adı və ya şifrə!";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "admin.html";
}

// Admin səhifəsini qorumaq üçün
if (window.location.pathname.includes("index.html")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "admin.html";
  }
}




 









