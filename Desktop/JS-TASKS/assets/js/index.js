// let min=15
// let max=45
// console.log(Math.floor(Math.random()*(max-min +1)+min))

// let number= +prompt("hansısa rəqəm əlavə edin")
// console.log()
// console.log(window)

// //no1
// let min=10
// let max=50
// let x=Math.round(Math.sqrt(Math.floor(Math.random()*(max-min +1)+min)))
// console.log(x)

// //no2
// let y=5
// let q=y+6
// let w=q**2
// let e=w%5
// console.log(e)

// //no3
// let minNum=5
// let maxNum=20
// let u=Math.trunc(Math.sqrt(Math.floor(Math.random()*(maxNum-minNum +1)+minNum)))
// console.log(u)

// //no4
// let randNum=5.8
// let sqrtCeil=Math.sqrt(Math.ceil(randNum))
// let sqrtFloor=(Math.floor(sqrtCeil))
// console.log(sqrtFloor)

// //no5
// let number=17.999
// let numberTrunc=Math.floor(number)
// let i=numberTrunc%3
// console.log(i)

// //no6
// let yNumb=2
// ++yNumb
// yNumb++
// console.log(yNumb)
// let minY=1
// let maxY=3
// let xY=((Math.random()*(maxY-minY +1)+minY))
// console.log(yNumb+xY)

// //no10
// let b=15.75
// let bRound=Math.floor(b)
// console.log(bRound)
// let result=Math.floor(bRound/2)
// console.log(result%4)

// //no12
// let xSqrt=1
// let ySqrt=5
// let xRand=((Math.random()*(xSqrt-ySqrt+1)+ySqrt))
// let c=Math.round(Math.floor(xRand**2))
// console.log(c)

// //no2
// let min=1
// let max=6
// let x=Math.floor(Math.random()*(max-min +1)+min)
// let result=Math.floor(Math.max(x))
// console.log(result%4)

// //no3
// let y=-3
// let z=((Math.abs(y))**3)%7
// console.log(z)

// //no4
// let minNum=2
// let maxNum=4
// let resultNum=(Math.floor(Math.random()*(maxNum-minNum +1)+minNum))**1/5
// console.log(Math.trunc(resultNum))

// //no5
// let number=50
// let c=(number**1/3)%5
// console.log(c)

// //no6
// let p=-5
// let positive=(Math.abs(p))+1
// let minNumb=1
// let maxNumb=3
// let resultNumb=Math.floor(Math.random()*(maxNumb-minNumb +1)+minNumb)
// console.log(positive+resultNumb)

//no7
// let props=prompt("Bir ədəd daxil et")
// console.log(typeof(Math.round(props**1/4)))

// //no8
// let minimum=3
// let maximum=9
// let d=Math.floor(Math.random()*(maximum-minimum+1)+minimum)
// console.log((d+1)%4)

// //no9
// let num=-144
// let v=Math.sqrt(Math.sqrt(Math.abs(num)))
// console.log(Math.trunc(v))

// //no1
// let propsymin=prompt("Bir ədəd əlavə edin")
// let propsymax=prompt("Bir ədəd əlavə edin")

// let resultPropsy=Math.floor(Math.random()*(propsymax-propsymin+1)+propsymin)
// let l=((resultPropsy**2)**1/2)%3
// console.log()

// let a= +prompt("bir reqem yaz")
//    if (a%2===0){
//     console.log(a)
//    }else{

//    }

// let a =prompt("adinizi daxil edin")
// if(a===""){
//     console.log("qonaq")
//     alert(`salam + ${a}`)
// }

//no1

// let a=+prompt("bir reqem daxil edin")
// let b=+prompt("bir reqem daxil edin")

// if(a>b){
//     alert("birinci boyukdu")
// }
// else if(a<b){
//     alert("ikinci boyukdu")
// }
// else{
//     alert("beraberdi")
//  }

//no2

// let parol=1998
// let question=prompt("sifre daxil edin")

// if(parol===+question){
//     alert("ugurlu")
// }
// else if(question===null){
//     alert("legv edildi")
// }else{
//     alert("yalnish sifre")
// }

//no3
// let a=parseInt(prompt("bir reqem yaz"))
// for(let i=1;i<a;i++){
//     if(i%2===0){
//     console.log(i)
// }}

//no4

// let score = prompt("bir qiymet daxil et");
// if (score === NaN) {
//   alert("reqem daxil edin");
// } else {
//   if (score >=90 && score<=100) {
//     alert("ela");
//   }else if(score >=70 && score<=89){
//     alert("yaxsi")
//   }
//   else if(score >=50 && score<=69){
//     alert("kafi")
//   }
//   else if(score >=0 && score<=49){
//     alert("zeif")
//   }
//   else{
//     alert("bu eded daxil deyil")
//   }
// }

//no5
// let ad=prompt("adinizi yazin").trim()
// if(!ad){
//   ad="qonaq"
// }
// alert(`Salam, ${ad}!`)

// //no6
// let unknown=123456
// let a=parseInt(prompt("reqem teyin et"))

//no8

// let a=Number(prompt("birnci"))
// let b=Number(prompt("ikinci"))
// let c=Number(prompt("ucuncu"))
// if ((a&&a!==0)||
//     (b&&b!==0)||
// (c&&c!==0)){
// alert("duzgun daxil et")
// }
//  else if(a>b+c){
//     alert("bomba kimi reqemdir")
// }
// else if(a===b && b===c){
//     alert("reqemler eynidi")
// }
// else{
//     alert("siradan reqemler")
// }

//no9

// let a=Number(prompt("birnci"))
//  let b=Number(prompt("ikinci"))
// let c=Number(prompt("ucuncu"))
// if(a>b&&b>c){
//     alert("zencir tamamlandi")
// }
// else if(a<b&&b<c){
//     alert("tersine zencir")
// }
// else if(a===b||b===c||a===c){
//     alert("tekrar var")
// }else{
//     alert("Qarishiq siralama")

//no1
// function helloUser(name) {
//   console.log(`Hello, ${name}!`);
// }
// helloUser("Alik");

//no2
// const a= function(numOne,numTwo){
//     return +numOne + +numTwo
// }
// console.log(a(2,))

//no5
// function number(num) {
//   if (isNaN(num)) {
//     console.log("musbet reqem yaz");
//   } else {
//     if (num % 2 === 0) {
//       console.log("cut");
//     } else if (num % 2 !== 0) {
//       console.log("tek");
//     }
//   }
// }
// number("h");

//no6
// const maxNumber = (numOne, numTwo) => {
//   return Math.max(numOne, numTwo);
// };
// console.log(maxNumber(2, 12));

//no7
// function factorial(num) {
//   let result = 1;
//   for (let i = 1; i <=num; i++) {
//      result = result * i;
//   }

//   return result
// }
// console.log(factorial(5));

//no8 saitlerin sayini qaytaran funksiyan yazin
// function countVowel(word){
//     let vowel=["a","e","u","i","o",]
//     if(word.has)
// }

// ev tapsiriqi 3cu gun ucun

// no1
// let a = +prompt("bir reqem daxil et").trim();
// let b = +prompt(" yeniden bir reqem daxil et").trim();

// function numbers(a, b) {
//   if (isNaN(a) && isNaN(b)) {
//     return alert("yalniz reqemler yaz");
//   } else {
//     if (a > b) {
//       return alert("birinci boyukdur");
//     } else if (a < b) {
//       return alert("ikinci boyukdur");
//     } else if (a === b) {
//       return alert("beraber reqemler");
//     }
//   }
// }
// console.log(numbers(a, b));

// no2

// let a=1234
// let b=+prompt("sifre daxil edin")
// function parol(numbers){
//     if(numbers===a){
//         return alert("giris ugurlu")
//     }else if(!numbers){
//         return alert("emelliyat legv edildi")
//     }else{
//         return alert("yalnish sifre gosterildi")
//     }
// }
// console.log(parol(b))

// no3
// let questionNumber = Number(prompt("bir reqem daxil edin"));
// function question(num) {
//   for (let i = 1; i < num; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
// question(questionNumber);

// no4
// let scorePrompt = +prompt("0 - 100 arasi bir reqem daxil edin").trim();
// function scores(score) {
//   if (isNaN(score) || !score || score === null || score.trim() === "") {
//     alert("reqem yaz");
//   } else {
//     if (score >= 90 && score <= 100) {
//       alert("ela");
//     } else if (score >= 70 && score <= 89) {
//       alert("yaxsi");
//     } else if (score >= 50 && score <= 69) {
//       alert("kafi");
//     } else if (score >= 0 && score <= 49) {
//       alert("zeif");
//     } else if (score < 0 && score > 100) {
//       alert("bu eded daxil deyil");
//     }
//   }
// }
// console.log(scores(scorePrompt));

// no5

// let userName=prompt("adinizi qeyd edin")

// function  user(name){
//     if(!name ||name.trim()===""){
//       name="Qonaq"
//     }
//    return  alert(`Salam, ${name}`)
// }
// console.log(user(userName))

// no6

// let secretKey=10
// let attempts=0

// function findSecretNumber(){
//   attempts++
//   let num=Number(prompt("Reqem daxil edin"))

//   if(attempts<=5){
//     if(num===secretKey){
//       console.log(`Tebrikler,siz dogru tapdiniz ve ${attempts} cehde tapdiniz`)
//     }else{
//       console.log("Sehvdir,yeniden cehd edin")
//       findSecretNumber()
//     }
//   }else{
//     console.log("Teeesuf,oyun bitdi,limiti bitirdiz")
//   }
// }
// findSecretNumber()

// no7
// let weekPrompt =(prompt("1-7 arasi reqem yaz"));

// function weekDay(number) {
//   if (number < 1 || number > 7 || isNaN(number) || number.trim() === "") {
//     return "duzgun reqem daxil edin";
//   } else {
//     switch (number) {
//       case 1:
//         return "birinci gun";
//         break;
//       case 2:
//         return "ikinci gun";
//         break;
//       case 3:
//         return "ucuncu gun";
//         break;
//       case 4:
//         return "dorduncu gun";
//         break;
//       case 5:
//         return "beshinci gun";
//         break;
//       case 6:
//         return "altinci gun";
//         break;
//       case 7:
//         return "yeddinci gun";
//         break;
//       default:
//         return "yalniz hefteye uygun sayi qeyd et";
//     }
//   }
// }
// console.log(weekDay(weekPrompt));

// no8

// let a = +prompt("bir reqem daxil edin").trim();
// let b =+prompt("yeni bir  reqem daxil edin").trim();
// let c = +prompt("elave yeni reqem daxil edin").trim();
// let onlyNumbers=/^\d+$/

// function numbers(numberOne, numberTwo, numberThree) {
//   if (isNaN(numberOne, numberTwo, numberThree) ) {
//     return "reqem daxil edin";
//   } else {
//     if (a > b + c) {
//       return "bomba";
//     } else if (
//       numberOne === numberTwo &&
//       numberTwo === numberThree &&
//       numberOne === numberThree
//     ) {
//       return "eynidi";
//     } else if (
//       (!numberOne && numberOne === 0) ||
//       (!numberTwo && numberTwo === 0) ||
//       (!numberThree && numberThree === 0)
//     ) {
//       return "butun ededleri daxil edin";
//     } else {
//       return "sade siradan reqemler";
//     }
//   }
// }

// console.log(numbers(a, b, c));

// no9

// let a = +prompt("bir reqem daxil edin");
// let b = +prompt("bir reqem daxil edin");
// let c = +prompt("bir reqem daxil edin");

// function numbers(numberOne, numberTwo, numberThree) {
//   if (isNaN(numberOne, numberTwo, numberThree) ) {
//     return "reqem daxil edin";
//   } else {
//     if (numberOne > numberTwo && numberTwo > numberThree) {
//       return "zencir tamamlandi";
//     } else if (numberOne < numberTwo && numberTwo < numberThree) {
//       return "ters zencir";
//     } else if (
//       numberOne === numberTwo ||
//       numberTwo === numberThree ||
//       numberOne === numberThree
//     ) {
//       return "zencir pozuldu";
//     }else{
//         return ("qarishiq siralama")
//     }
//   }
// }
// console.log(numbers(a,b,c))

// no10

//extra tapsiriq

// let world = {
//   europa: "leftSide",
//   asia: {
//     central: "Kazakhstan",
//     caucasian: {
//       countries: "Azerbaijan",
//       cities: {
//         big: "Baku",
//         middle: "Shirvam",
//         findPlace:function place() {
//   for (let maintain in world) {
//     for (let side in asia) {
//       for (let region in caucasian) {
//         for (let city in cities) {
//         }
//         return city
//       }
//     }
//   }
// }
//       },
//     },
//   },
// }

// console.log(place())

let information = {
  name: "Alik",
  surname: "Mamedov",
  skills: {
    html: true,
    scss: true,
    javascript: {
      function: true,
      objects: true,
      dataTypes: {
        primitive: true,
        non_primitive: true,
      },
    },
  },
};
console.log(information.skills.javascript.dataTypes.non_primitive);

//obyekt tasklar

//no1
let info = {
  name: "Ali",
  age: 20,
};

info.age = 21;
console.log(info);

//no2

let bookShelf = {
  book: "1984",
  author: "George Orwell",
};

console.log("book" in bookShelf);

//no3

// let name=prompt("adinizi qeyd edin")
// let age=+prompt("yashinizi qeyd edin")
// let man={
//   name,
//   age
// }
// console.log(man)

//no4
let person = {
  name: "Alik",
  surName: "Mamedov",
  age: 26,
};

for (info in person) {
  console.log(`${info}: ${person[info]}`);
}

//no5
let sahe = {
  counter: 6,
  increases: function increase() {
    return ++this.counter;
  },
  decreases: function decrease() {
    return --this.counter;
  },
};

console.log(sahe.increases());

console.log(sahe.decreases());

//no6
// let  yearOfBirth=+prompt("tevelludunu yaz")
// let information = {
//   name: "Alik",
//   surNAme: "Mamedov",
//   age:function ageCounter(){
//     return new Date().getFullYear() - yearOfBirth
//   }
// };

// console.log(information.age());

//no7
// let salary=+prompt("qiymet yaz")
// let bonus=+prompt("qiymet yaz")
// let summary={
//   sum:function summaryPrize(){
//     return salary+bonus
//   }
// }
// console.log(summary.sum())

// let job = {
//   salary: 600,
//   bonus: 300,
// };

// let summary = job.salary + job.bonus;
// console.log(summary);

//no8
// let pricePrompt = +prompt("qiymet yaz");
// let discountPrompt = +prompt("qiymet yaz");
// let taxPrompt = +prompt("qiymet yaz");

// let something = {
//   price: pricePrompt,
//   discount: discountPrompt,
//   tax: taxPrompt,
//   realPrice: function realPrice() {
//     return pricePrompt - discountPrompt + taxPrompt;
//   },
// };
// console.log(something.realPrice());

//no9
// let a=+prompt("nece yashim var?")
// let b= prompt("adim nedir?")
// let c= prompt("soyadim nedi?")
// let count=0

// let myInfo={
//   ages:26,
//   names:"Alik",
//   surnames:"Mamedov",
//   yash:function age(){
//   if (this.ages===a) {
//    return ++count
//   }else{
//     return "sehv cavab"
//   }
// },
// ad:function name(){
//   if (this.names===b) {
//    return ++count
//   }else{
//     return "sehv cavab"
//   }
// },
// soyad:function surname(){
//   if (this.surnames===c){
//    return ++count
//   }else{
//     return "sehv cavab"
//   }
// }
// }
// console.log(myInfo.yash())
// console.log(myInfo.ad())
// console.log(myInfo.soyad())

// alert (` duzgun cavab sayi ${count}`)

//no10

// let a=+prompt("nece yashim var?")
// let b= prompt("adim nedir?")
// let c= prompt("soyadim nedi?")

// let student={
//   age:a,
//   name:b,
//   surname:c,
//   studentInfo: function info(){
//     return  `Menim yashim ${this,age}, adim ${this.name}, soyadim ${this.surname}`
//   }
// }
// console.log(student.studentInfo())

//no11 ev tapshiriq
// let number = +prompt("eded daxil edin");
// let count = 0;

// function numb(num) {
//   if (num < 0 && !Number.isInteger(num)) {
//     return count + (String(num)).length - 2;
//   } else if (num < 0 || !Number.isInteger(num)) {
//     return count + (String(num)).length - 1;
//   } else {
//     return count + (String(num)).length;
//   }
// }
// console.log(numb(number));

//no12

// let score=+prompt("qiymeti qeyd edin")

// function scoreStudednt(scores){
//   if(scores<=100 && score>80){
//     return "ela"
//   } else if(scores<=80 && score>50){
//     return "orta"
//   }
//   else if(scores<=50 && score>=0){
//     return "pis"
//   }else{
//    return  "dogru reqem qeyd edin"
//   }
// }
// console.log(scoreStudednt(score))

//no13
// const user = {
//   name: "",
//   password: "",
// };

// function register() {
//   alert("Qeydiyyatdan kecin");
//   let name = prompt("adinizi daxil edin");
//   let password = prompt("sifrenizi daxil edin");
//   if (name) user.name = name;
//   if (password) user.password = password;
//   console.log(user);
// }

// register();

// function login() {
//   alert("Girish edin");

//   let count = 3;
//   while (count > 0) {
//     let name = prompt("adinizi daxil edin");
//     let password = prompt("sifrenizi daxil edin");
//     if (name === user.name && password === user.password) {
//       alert("Ugurla girish etdiniz!");
//       return;
//     } else {
//       count = count - 1;
//       if( count > 0 ) {
//         alert(`Yalnis melumatlar daxil etdiniz. ${count} cehdiniz qaldi`);
//       } else {
//         alert(`Yalnis melumatlar daxil etdiniz. Cehdiniz bitdi. Sagolun!`);
//       }
//     }
//   }
// }

// login();

//no1 23 iyul

// let sentences= prompt("bir cumle yaz")
// function sentenceFind(sentence){
//    return   alert((sentence.split()).length)
// }
// console.log(sentenceFind(sentences))

//no2
// let a=+prompt("bir eded yaz")
// let b=+prompt("bir eded yaz")

// function integers(a,b){
//   return parseInt(a,b)
// }
// console.log(integers(a,b))

//no5
// let word=prompt("soz yaz")
// function findTrim(words){
//   return  words.trimEnd()
// }
// console.log(findTrim(word))

// //no6
// let num=+prompt("onluq eded yaz")
// function round(number){
//   return Math.ceil(number)
// }
// console.log(round(num))

// let numTwo=+prompt("onluq eded yaz")
// function round(number){
//   return Math.ceil(number)
// }
// console.log(round(numTwo))

//no7

//8
let letters = "azerbaijan";
let capitalCase =
  letters.slice(0, 1).toUpperCase() + "" + letters.slice(1).toLowerCase();
console.log(capitalCase);

//no9
let a = "alman";
let b = "orqan";
let x = a.at(0);
let y = a.at(-1);

let c = b.at(0);
let v = b.at(-1);

console.log(x + "" + b.slice(1, -1) + "" + y);
console.log(c + "" + a.slice(1, -1) + "" + v);

//ev tapsiriqlari 24 iyul

//no1
let informationCountry = "Azerbaijan  Democratic Respublic";
console.log(informationCountry.split(" ").length);

//no1.1
let numOne = 12.5;
let numTwo = 23.4;
console.log(parseInt(numOne));
console.log(parseInt(numTwo));

//no2
let letter = "salam,menimadim allahveren";
console.log(letter.toLocaleUpperCase("az"));

//no2.2
let numb = 25;
console.log(Math.sqrt(numb));

//no3
let book = "   kitab   ";
console.log(book.trimEnd());

//no3.3
let roundNumb = 12.7;
console.log(Math.ceil(roundNumb));
console.log(Math.floor(roundNumb));

//no4?
let sentence = "alatava";
let letterFind = "a";
console.log(sentence.split(letterFind).length);

//no4.4
let firstNumber = 15.6;
let secondNumber = 23.52;
let multiply = parseInt(firstNumber + secondNumber);
console.log(multiply);

//no5
let car = "elantra";
let capitalCaseCar = car.at(0).toUpperCase().concat(car.slice(1));
console.log(capitalCaseCar);

//no5.5
let stringNumber = "34";
console.log(typeof parseInt(stringNumber));

//no6
let pen = "qelem";
console.log(pen.repeat(3));

//no6.6
let numberLength = 1235677;
console.log(String(numberLength).length);

//no7
let firstWord = "banan";
let secondWord = "ananas";
console.log(firstWord.at(0) + secondWord.slice(1, -1) + firstWord.at(-1));
console.log(secondWord.at(0) + firstWord.slice(1, -1) + secondWord.at(-1));

//no7.7
let radnomNumber = 1.2344455;
console.log(radnomNumber.toFixed(2));

//no8
let empty = "    Kamal   ";
console.log(empty.trim());

//no8.8
let n = 24;
let m = 35;
console.log(Math.max(n, m));

//no9
let symbol = "Allahveran";
console.log(symbol.at(2));

//no9.9
let neqativeNumber = -23;
console.log(Math.abs(neqativeNumber));

//no10
let first = "Menim 26";
let second = " yasim var";
console.log(first.concat(second));

//no10.10

let number = 34;
console.log(typeof String(number));

//tasks
//no10
// let sentencePrompt=prompt("bir cumle yaz")

// function sentences(words){
//   let sentence=[]
//     words.split("")

//      words.at(0).toUpperCase()+(words.slice(1).toLowerCase())
//      return words.push(sentence)
//  }

// console.log(sentences(sentencePrompt))

// let sentencePrompt=prompt("bir cumle yaz")

// function sentences(sentence){
//     sentence.split("")
//    for(words of sentence){
//     return words.map((word)=> word.at(0).toUpperCase()+(word.slice(1).toLowerCase()))
//  }

// }
// console.log(sentences(sentencePrompt))

//no12
// let firstPrompt=prompt("cumle yaz")
// let secondPrompt=prompt("cumle yaz")
//  function strings(stringOne,stringTwo){
//    return stringOne.length>stringTwo.length ? alert("birinci boyukdu") : alert("ikinci boyukdu")
//  }
//  console.log(strings(firstPrompt,secondPrompt))

// function wordsLength() {
//   let sentencePrompt = prompt("bir cumle yaz");
//   let max = "";
//   let sozler = sentencePrompt.split();
//   for (let i = 0; i < sozler.length; i++) {
//     let soz = sozler[i];
//     if (soz.length > max.length) {
//       max = soz;
//     }
//   }
//   console.log("en uzun soz:" + max);
// }
// wordsLength();

//no12

// let promptWord=prompt("adinizi qeyd edin")
//  function letterss(letter){
//   let b=("AOUEI")
//   if (b.includes(letter.at(0))){
//     return alert("xos gelmisen")
//   }else{
//     return alert("adini yeniden yoxla")
//   }
//  }
//  console.log(letterss(promptWord))

// let words=prompt("soz yazin")
//  function palindroms(word){
//   let palindrom= word.split("").reverse().join("")
//   if(palindrom===word){
//     return alert("palindrom tapildi")
//   }else{
//     return alert(palindrom)
//   }

//  }
//  console.log(palindroms(words))

// let promptWord=prompt("nese yaz")
// let bb=prompt("yoxla")

//  function letterss(letter){

//   if (letter.includes(bb)){
//     return alert("true")
//   }else{
//     return alert("false")
//   }
//  }
//  console.log(letterss(promptWord))

//no14
let salary = {
  balans: 2000,
  showBalance: function showbalance(show) {
    return console.log(salary.balans);
  },
  addMoney: function addmoney(balance) {
    const resultBalance = balance + this.balans;
    this.balans = resultBalance;
    return console.log(
      `${balance} elave edildi,umumi mebleg: ${resultBalance}`
    );
  },
  withdraw: function withdraw(money) {
    if (money < this.balans) {
      return console.log(`${this.balans - money} `);
    } else {
      console.log("balansinizda kifayet qeder balans yoxdur");
    }
  },
};
salary.showBalance();
salary.addMoney(200);
salary.withdraw(10);

//ev tapshiriqi

function compareObjects(objOne, objTwo) {
  let keyOne = Object.keys(objOne);
  let keyTwo = Object.keys(objTwo);
  let valueOne = Object.values(objOne);
  let valueTwo = Object.values(objTwo);
  if (keyOne === keyTwo && valueOne === valueTwo) {
    return true;
  } else {
    return false;
  }
}
console.log(
  compareObjects(
    { name: "Alik", surname: "Mamedov" },
    { surname: "Mamedov", name: "Alik" }
  )
);

// let num4=Math.random()*51
// console.log(Math.floor(num4)+200)

//forEach asan
//no1
// let massiv=[1,4,6,0]
// let massivWhole=massiv.forEach((item,index,arr)=>{
//   console.log(item)
// })

//no2
// let massiv=[1,4,6,0]
// let massivWhole=massiv.forEach(item=> {
//   console.log(item+2)
// })

//no3
// let massiv=[1,-4,6,0,-6]
// let massivWhole=massiv.forEach(item=> {
//   if(item>0){
//     console.log(item)
//   }
// })

//no4
// let massivs=["ananas","kitab"]
// let upperMassiv=massivs.forEach(item=> console.log(item.toUpperCase()))

//no5
// let infoMassiv=[{name:"alik",age:26},{name:"malik",age:27}]
// let nameMassiv=infoMassiv.forEach(item=> console.log(item.name))

//no1 orta
// let massiv=[1,4,6,0]
// let zero=0
// let plasuMassiv=massiv.forEach(number=> zero+=number)
// console.log(zero)

//no2

// let massiv=[1,-4,-6,0,2]
// let nothing=[]
// let neqativeNumbers=massiv.forEach(num=> {
//   if (num<0){
//     nothing.push(num)
//   }
// })
// console.log(nothing.length)

//no3
// let massivs=["ananas","kitab"]
// let massivLength=massivs.forEach(item=> console.log(item.length))

//no4
// let infoMassiv=[{name:"alik",age:26},{name:"malik",age:27}]
// let change=infoMassiv.forEach(item=>{
//   if(item.surname="insan"){
//     console.log(item)
//   }
// } )

//no5
// let massiv=[1,-4,-6,0,2,3,5,3,5,2]
// let count={}
// let repeat=massiv.forEach(function(item){
//   if(count[item]){
//     count[item]++
//   }else{ count[item]=1}
// })
// console.log(count)

//no1 cetin

// let infoMassiv=[{name:"alik",age:26,price:23},{name:"malik",age:27,price:34}]
// let price=infoMassiv.forEach(item=>{
//   console.log(item.price)
// })

//no2
// let massiv=[1,-4,-6,0,[3,45,7,8,[34,7,8]]]
// let flat=massiv.flat(2)
// console.log(flat)

//no3
//  let massiv=[1,-4,-6,0,2,3,5,3,5,2]
//  let zero=[]
//  massiv.forEach(item=>{
//   if(!zero.includes(item)){
//     zero.push(item)
//   }
//  })
//  console.log(zero)

//no4
// let massivs = ["ananas", "kitab"];
// let reverse = massivs.map((item) => item.split("").reverse().join(""));
// console.log(reverse);

//no5
// let massiv=[1,-4,-6,0,"a","B"]
// massiv.forEach(number=>{
//   if(!isNaN(number)){
// console.log(number)
//   }
// })

//no1 map metodu asan
// let numbers=[2,4,7]
//  let square=numbers.map(number=>number**2)
//  console.log(square)

//no2
//  let massiv=[1,-4,-6,0,[3,45,7,8,[34,7,8]]]
//  let flat=massiv.flat(2)
//  console.log(flat)

//no3
//  let infoMassiv=[{name:"alik",age:26},{name:"malik",age:27}]
//  let newMassiv=[]
//  infoMassiv.map(item=>  newMassiv.push(item.name))
//  console.log(newMassiv)

//no4
// let numbers=[2,4,7]
//  let square=numbers.map(number=>number*10)
//  console.log(square)

//no5
// let messMassiv=["e",3,{name:"alik"},[3,5]]
// let knowing=messMassiv.map(item=> typeof(item))
// console.log(knowing)

//no1 orta
// let numbers=[2,4,7]
// let string=numbers.map(str=>String(str))
// console.log(string)

//no2
// let infoMassiv=[{name:"alik",age:26,surname:"malokov"},{name:"malik",age:27,surname:"malokov"}]
//   let newMassiv=[]
//   infoMassiv.map(item=> newMassiv.push(item.name,item.age))
//  console.log(newMassiv)

//no3
// let numbers=[2,4,7]
// let index=numbers.map((value,index)=>{
//   return `index:${index},value:${value}`
// })
// console.log(index)

//no4
// let massivs = ["ananas", "kitab"];
// let uppercase=massivs.map(item=> (item.at(0).toUpperCase())+""+(item.slice(1)))
// console.log(uppercase)

//no5
// let numbers=[2.3,3.5,4,7]
// let roundNumbers=numbers.map(num=>Math.round(num))
// console.log(roundNumbers)

//no1 cetin
//  let massiv=[1,-4,-6,0,[3,45,7,8,[34,7,8]]]
//  let nested=massiv.flat(1)
//  console.log(nested)

//no2
// let infoMassiv=[{name:"alik",age:26,surname:"malokov"},{name:"malik",age:27,surname:"malokov"}]
//  infoMassiv.forEach(key=> key.age+=20)
//  console.log(infoMassiv)

//no3
// let massivs = ["ananaologiyas", "kitabologiya"];
// let cut=massivs.map(item=>{
//   if(item.length>5){
//      return item.slice(0,5)
//   }
// })
// console.log(cut)

//no4
// let numbers=[2,4,7,-4,-5]
// let positive=[]
// let positiveNumber=numbers.map(num=> {
//  if( num>=0){
//   positive.push(num)
//  }})
// console.log(positive)

//no5 lazim deyil

// filter asan
//no1
// let numbers=[2,4,7,-4,-5]
// let positiveNumbers=numbers.filter(number=>number>0)
// console.log(positiveNumbers)

//no2
// let numbers=[2,4,7,-4,-5,"a","b"]
// let positiveNumbers=numbers.filter(number=>typeof(number)==="string")
// console.log(positiveNumbers)

//no3
// let numbers=[2,4,7,-4,-5]
// let positiveNumbers=numbers.filter(number=>number>0 && number<5)
// console.log(positiveNumbers)

//no4
// let massivs = ["ananaologiyas", "kitabologiya","insan","ad"];
// let length=massivs.filter(item=> item.length>5)
// console.log(length)

//no5
// let numbers=[2,4,7,4,5]
// let positiveNumbers=numbers.filter(number=>number%2===0)
// console.log(positiveNumbers)

//no1 orta
// let numbers=[2,4,7,-4,-5]
// let positiveNumbers=numbers.filter(number=>number<0)
// console.log(positiveNumbers)

//no2
// let infoMassiv=[{name:"alik",age:16,surname:"malokov"},{name:"malik",age:27,surname:"malokov"}]
// let zero=[]
// let findMassiv=infoMassiv.filter(ages=> {
//   if(ages.age>18){
//     zero.push(ages)
//   }
// })
// console.log(zero)

//no3
// let numbers=[2,4,7,-4,-5,"a",undefined]
// let zero=[]
// let find=numbers.filter(num=>{
//   if(num!==undefined){
//     zero.push(num)
//   }
// })
// console.log(zero)

//no4
// let massivs = ["ananaologiyas", "kitabologiya","insan","ad"];
// let prefiks=massivs.filter(letter=> letter.at(0)==="a")
// console.log(prefiks)

//no5
// let massivs = ["ananaologiyas", "kitabologiya","insan","ad"];
// let prefiks=massivs.filter((item,index)=> index%2===0)
// console.log(prefiks)

//no1 cetin
// let numbers=[2,4,7,-4,-5,5,7,3,2]
// let zero=[]
// numbers.filter(number=> {
//   if(!zero.includes(number)){
//      return zero.push(number)
//   }
// })
// console.log(zero)

//no4
// let numbers=[2,4,7,-4,-5,"a",undefined]
// let onlyNumbers=numbers.filter(num=> typeof(num)==="number")
// console.log(onlyNumbers)

//no5
// let checkingPalindrom=["ana","kitab","oxu","kelem"]
// let palindrom=checkingPalindrom.filter(item=> item.split("").reverse().join("")===item)
// console.log(palindrom)

//find asan
//no1
//  let numbers=[2,4,7,-4,-5,5,7,3,2]
//  let firstPositiveNumber=numbers.find(num=>num>0)
//  console.log(firstPositiveNumber)

//no2
//  let numbers=[2,4,7,"a",-4,-5,5,7,3,"b",2]
//  let firstPositiveNumber=numbers.find(num=>typeof(num)==="string")
//  console.log(firstPositiveNumber)

//no3
// let numbers=[2,4,7,-4,-5,5,7,12,14,3,2]
//   let firstPositiveNumber=numbers.find(num=>num>10)
//  console.log(firstPositiveNumber)

//no4
//  let numbers=[2,4,7,"a",-4,undefined,-5,5,7,3,undefined,"b",2]
//  let firstPositiveNumber=numbers.find(num=>typeof(num)===undefined)
//  console.log(firstPositiveNumber)

//no5
// let numbers=[2,4,7,-4,-5,5,7,12,14,3,2]
// let firstPositiveNumber=numbers.find(num=>num%2===0)
// console.log(firstPositiveNumber)

//no1 orta
// let numbers=[2,4,7,-4,-5,5,7,12,14,3,2]
// let firstPositiveNumber=numbers.find(num=>num<0)
// console.log(firstPositiveNumber)

//no2
// let infoMassiv=[{ownname:"alik",age:16,surname:"malokov"},{name:"malik",age:27,surname:"malokov"}]
// let find=infoMassiv.find(item=> "name" in item)
// console.log(find)

//no3
// let massivs = ["ananaologiyas", "kitabologiya", "insan", "ad"];
// let prefiks = massivs.find((letter) => letter.at(0) === "a");
// console.log(prefiks);

//no5
// let nested=["a","c",[undefined,null,[1,3,5]]]
// let findNumber=nested.flat(2).find(item=> typeof(item)==="number")
// console.log(findNumber)

//no1 cetin
// let massivs = ["ananaologiyas", "ad", "kitabologiya", "insan", "ad"];
// let repeatItem = massivs.find((item, index, arr) => {
//   return arr.indexOf(item) !== index;
// });
// console.log(repeatItem);

//no2

// let infoMassiv=[{name:"alik",age:16,surname:"malokov"},{name:"malik",age:27,surname:"malokov"}]
// let find=infoMassiv.find(item=> item.name==="alik" && item.age<20)
// console.log(find)

//no3
//  let nested=["a","c",[undefined,null,[1,3,5]]]
//  let find=nested.flat(2).find((item,index,arr)=>index===4 )
//  console.log(find)

//no4
//  let infoMassiv=[{name:"alik",age:16,surname:"malokov"},{name:"malik",age:27,surname:"malokov"}]
//  let find=infoMassiv.find(item=> Math.min(item.age))
//  console.log(find)

//no5
// let checkingPalindrom=["ana","kitab","oxu","kelem","ata"]
// let palindrom=checkingPalindrom.find(item=> item.split("").reverse().join("")===item)
// console.log(palindrom)

//every asan
//no1
// let numbers=[2,4,7,-4,-5,5,7,12,14,3,2]
// let positiveNumbers=numbers.every(number=> number>0)
// console.log(positiveNumbers)

//no2
// let string=["a","b","c"]
// let every=string.every(str=> typeof(str)==="string")
// console.log(every)

//no3
// let numbers=[2,4,7,4,5,5,7,12,14,3,2]
// let firstPositiveNumber=numbers.every(num=>num>10)
// console.log(firstPositiveNumber)

//no4
// let massivs = ["ananaologiyas","ad","kitabologiya","insan","ad"];
// let length=massivs.every(item=> item.length>2)
// console.log(length)

//no5
// let numbers=[2,4,7,3.3]
// let checked=numbers.every(num=> Math.round(num)===num)
// console.log(checked)

//no1 orta
// let infoMassiv=[{name:"alik",age:16,surname:"malokov"},{name:"malik",age:27,surname:"malokov"}]
// let every=infoMassiv.every(item=> item.age)
// console.log(every)

//no2
// let numbers=[2,4]
// let checked=numbers.every(num=> num%2===0)
// console.log(checked)

//no3
// let numbers=[2,4,7,4,5,5,7,12,14,3,2]
// let unique=numbers.some((item,index,arr)=>{
//    return arr.indexOf(item)===arr.lastIndexOf(item)
// })
// console.log(unique)

//no4
// let massivs = ["ananaologiyas","ad","ad"];
// let start=massivs.every(item=> item.startsWith("a"))
// console.log(start)

//no4 cetin
// let numbers=[2,4,6,8,"e"]
// let sample=numbers[0]
// let same=numbers.every(item=> typeof(item)===typeof(sample))
// console.log(same)

//no5  bunu tamamla
// let infoMassiv=[{name:"alik",age:16,surname:"malokov"},{name:"alik",age:16,surname:"malokov"}]
// let unique=infoMassiv.every((item,index,arr)=>{
//   return arr.findIndex(obj=> obj.name===item.name)===index
// })
// console.log(unique)

//sort
//no1 asan
// let numbers=[2,4,1,6,8,5]
// let bigger=numbers.sort((a,b)=> a-b)
// console.log(bigger)

//no2
// let numbers=[2,4,1,6,8,5]
// let bigger=numbers.sort((a,b)=> b-a)
// console.log(bigger)

//no3
// let words=["alik","kamal","leman","davud"]
// console.log(words.sort())

//no4
// let words=["alik","kamalli","leman","davudovic"]
// let length=words.sort((a,b)=> a.length-b.length)
// console.log(length)

//no5
// let numbers=[2,-4,1,6,-8,5]
// let bigger=numbers.sort((a,b)=> Math.abs(a)-Math.abs(b))
// console.log(bigger)

//no1 orta

// let infor=[{name:"alik",age:26},{name:"malik",age:28},{name:"orxan",age:36}]
// let older=infor.sort((a,b)=> a.age-b.age)
// console.log(older)

//no2
// let numbers=[2,4,1,6,8,5]
//  let bigger=numbers.sort((a,b)=>{
//   if(a%2===0 && b%2!==0){
//     return -1
//   }else if(a%2!==0 && b%2===0){
//     return 1
//   }else{
//     return a-b
//   }
//  } )
//  console.log(bigger)

//no3
// let numbers=[2,-4,1,-6,8,-5]
// let positive=numbers.filter(number=>number>0).sort()
// let negative=numbers.filter(number=>number<0).sort()
// console.log(positive)
// console.log(negative)

//no5
//  let words=["aliz","kamalli","leman","davudovic"]
//  words.sort((a,b)=>{
//   let lastA=a.at(-1)
//   let lastB=b.at(-1)
//   return lastA.localeCompare(lastB)
//  })
//  console.log(words)

//no1 cetin
// let numbers=[2,-4,1,-6,8,-5,[2,4,6,[2,4,8,9]]]
// let change=numbers.flat(2).sort((a,b)=> a-b)
// console.log(change)

//no2
// let infos=[{category:"jeans",price:"233"},{category:"alto",price:"33"}]
//  let compareOne=infos.sort((a,b)=> a.category.localeCompare(b.category,"az"))
// let compareTwo=infos.sort((a,b)=> a.price - b.price)
//  console.log(compareOne)
// console.log(compareTwo)

//no4
// let numbers=[3,5,8,,11,14,16]
// let modul=numbers.sort((a,b)=> (a%3)-(b%3))
// console.log(modul)

//reduce
//no1 asan
// let numbers=[2,4,6,9,-2,-4,-6]
// let reduceNumbers=numbers.reduce((acc,cur)=> acc+cur,0)
// console.log(reduceNumbers)

//no2
// let massiv=[2,4,"a",{name:"alik"},[1,3]]
// let one=massiv.flat().reduce((acc,words)=> {
//   acc.push(words)
//   return acc
//   },[] )
// console.log(one)

//no3
// let numbers=[2,4,6,9,-2,-4,-6]
// let max=numbers.reduce((acc,num)=> Math.max(acc,num))
// console.log(max)

//no4
// let infoObject=[{category:"jeans",price:"233"},{category:"alto",price:"33"}]
// let price=infoObject.reduce((acc,key)=>{
//   acc.push(key.price)
//   return acc
// },[])
// console.log(price)

//no5
// let numbers=[2,4,6,9,-2,-4,-6]
// let square=numbers.reduce((acc,num)=> acc*=num,1)
// console.log(square)

//no1 orta
// let numbers=[2,4,6,9,-2,-4,-6,2,4,6]
// let repeat=numbers.reduce((acc,num)=>{
//   acc[num]=(acc[num] ||0)+1
//   return acc
// },{})
// console.log(repeat)

//no2
// let numbers=[2,4,6,9,-2,-4,-6,2,4,6]
// let min=numbers.reduce((acc,num)=> Math.min(acc,num))
// console.log(min)

//no3
// let infoObject=[{category:"jeans",price:"233"},{category:"alto",price:"33"}]
// let whole=infoObject.reduce((acc,obj)=> [...acc, obj.price],[])
// console.log(whole)

//no4
// let strings=["alma","gilas"]
// let length=strings.reduce((acc,str)=> acc+=str.length,0)
// console.log(length)

//no5
//  let numbers=[2,4,6,9,-2,-4,-6,2,4,6]
//  let min=numbers.reduce((acc,num)=> {
//   if (num>0){
//     acc+=num
//   }
//   return acc
//  },0)
//  console.log(min)

//no1 cetin
// let strings=[["alma","gilas",[3,4,6,9]]]
// let nested=strings.reduce((acc,nest)=> {
//   acc.push(nest.flat(2))
//   return acc
// },[])
// console.log(nested)

//no2
// let numbers=[2,4,6,9,-2,-4,-6,2,4,6]
// let repeat=numbers.reduce((acc,num)=>{
//   acc[num]=(acc[num]||0)+1
//   return acc
// },{})
// console.log(repeat)

//no3
// let infoObject=[{category:"jeans",price:"233"},{category:"alto",price:"33"}]
// let price=infoObject.reduce((acc,obj)=> {
//   acc.push(obj.price)
//   return acc
// },[])
// console.log(price)

//no5
//  let infoObject=[{category:"jeans",price:"233"},{category:"alto",price:"33"}]
//  let value=infoObject.reduce((acc,obj)=>{
//   acc.push(Object.values(obj))
//   return acc
//  },[])
//  console.log(value)

// ev tapsiriqi,27 iyul
//no1
function onlyFullNumber(arr) {
  return arr.filter(
    (num) => typeof num === "number" && num >= 0 && Math.round(num) === num
  );
}
console.log(onlyFullNumber([2, 4, 6, "a", "c", -2, -1.3]));

//no2
function minMax(numbers) {
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  return [min, max];
}
console.log(minMax([2, 4, 6, 9, 78]));

//no3
function spreadFunction(arrOne, arrTwo) {
  let spreadArray = [...arrOne, ...arrTwo];
  return spreadArray.sort((a, b) => a - b);
}
console.log(spreadFunction([2, 5, 8], [45, 2, 67, 4]));

//no4
function cbrt(arr) {
  return arr.reduce((acc, cur) => (acc += cur ** 3), 0);
}
console.log(cbrt([2, 3]));

//no5
function modul(arr) {
  return arr.reduce((acc, cur) => (acc += Math.abs(cur)));
}
console.log(modul([2, 4, 6, -4, -6]));

//no6
function pow(arr) {
  return arr.reduce((acc, cur) => {
    acc.push(cur ** 2);
    return acc;
  }, []);
}
console.log(pow([1, 3, 5]));

//no7
function boolean(arr) {
  let count = 0;
  arr.filter((item) => {
    if (item === true) {
      return console.log(++count);
    }
  });
}
boolean([true, true, false, true]);

//no8
function evenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(evenNumbers([2, 4, 6, 8, 6, 4, 5, 3, 7, 79]));

//no9
function change(arr) {
  return arr.map((item) => String(item));
}
console.log(change([2, 4, 6, true]));

//no10
function arifmetic(arr) {
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum / arr.length;
}
console.log(arifmetic([2, 3, 5]));

//no1
let contact = new Map();
contact.set("Senan", "+994705096400");
contact.set("Orxan", "+994705096300");
contact.set("Alik:", "+994705096500");
console.log(contact);
if (contact.has("name")) {
  contact.delete("name");
}
console.log(contact);
console.log(contact.clear());

//no2
function notRepeat(arr) {
  return Array.from(new Set(arr));
}
console.log(notRepeat(["a", "b", "c", "a"]));

//no3
let monthList = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avqust",
  "sentyabr",
  "oktyabr",
  "noyabr",
  "dekabr",
];
let date = new Date();
let month = date.getMonth();
console.log(month);
let year = date.getFullYear();
let day = date.getDate();
console.log(day, monthList[month], year);

//29 iyul
//no1
function numbers(a, b) {
  let qismet = Math.round(a / b);
  let qaliq = a % b;
  return console.log(`Qismet:${qismet},Qaliq:${qaliq}`);
}
numbers(21, 4);

//no2
let now = new Date();
let future = new Date("09-30-2025 10:06");
let minus = future.getTime() - now.getTime();
let dayMinus = Math.round(minus / 1000 / 60 / 60 / 24);
let hoursMinus = Math.round((minus / 1000 / 60 / 60) % 24);
let minuteMinus = Math.round((minus / 1000 / 60) % 60);
let seconds = Math.round((minus / 1000) % 60);

console.log(
  `${dayMinus} gun, ${hoursMinus} saat, ${minuteMinus} deqiqe,${seconds} saniye`
);

//no3
function sum(lab, dvm, freeWork, exercise, examine) {
  let summary = lab + dvm + freeWork + exercise + exercise + examine;
  if (
    lab > 0 &&
    dvm > 0 &&
    freeWork > 0 &&
    exercise > 0 &&
    examine > 0 &&
    dvm > 6 &&
    lab + dvm + freeWork + exercise > 17 &&
    examine > 51
  ) {
    return console.log(`kecdiniz:) toplam baliniz:${summary}`);
  } else {
    return console.log("kesildiniz");
  }
}
sum(7, 7, 7, 5, 52);

//no4
// let ad=prompt("adinizi qeyd edin")
// let muraciet=confirm('kishisinizmi') ? "bey" : "xanim"
// let saat=new Date().getHours()
// let salam=""
// if(saat<6){
//   salam="sabahiniz xeyr"
// } else if(saat<12){
//   salam="sabahiniz xeyr"
// }else if(saat<18){
//   salam="gunortaniz xeyr"
// }else{
// salam="axshaminiz xeyr"
// }
// console.log(`${salam},${ad} ${muraciet}`)

//no6
function numbers(a, b, c) {
  let max = Math.max(a, b, c);
  let min = Math.min(a, b, c);
  let arifmetic = (a + b + c) / 3;
  console.log(max);
  console.log(min);
  console.log(arifmetic);
}
numbers(2, 4, 6);

//no7
function repeat(arr) {
  let arrRepeat = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  return arrRepeat;
}
console.log(repeat([2, 3, 4, 5, 5, 5, 6, 6, 6, 6, 7, 8, 9]));

//1 avqust
//no1
// const timerElement = document.getElementById("time");
// let minute = 0;
// let sekond = 0;

// let timer = setInterval(show, 100, 1, 23);
// function show(minutess, seconds) {
//   if (minute < 59) {
//     second++;
//   } else {
//     minute++;
//     second = 0;
//   }
//   timerElement.innerHTML = `${minute}:${sekond}`;
//   if (minute == minutess && sekond == seconds) {
//     clearInterval(timer);
//   }
// }



// const timerElement = document.getElementById("timer");

// let minutes = 0;
// let sekonds = 0;

// const interval = setInterval(() => {
//   // Zaman formatla və göstər
//   const formattedMinutes = String(minutes).padStart(2, '0');
//   const formattedSeconds = String(sekonds).padStart(2, '0');
//   timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;

//   // Bitmə nöqtəsinə çatdısa dayandır
//   if (minutes === 1 && sekonds === 17) {
//     clearInterval(interval);
//   }

//   // Saniyələri artır
//   sekonds++;
//   if (sekonds === 60) {
//     sekonds = 0;
//     minutes++;
//   }
// }, 100);
