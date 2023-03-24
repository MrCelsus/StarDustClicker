

const dustCounter =document.getElementById('Dust-counter');
const counterpersecond= document.getElementById('counter-per-second');
const count=document.getElementsByClassName('count'); 
const price=document.getElementsByClassName('price'); 



let numbStarDust = 0;
let clicksecond =50; 
let amountperclick = 1; 
let amountpersecond =10; 
let numbVacuum = 0; 
let numbFuelTank =0;
let numbWings =0;
let numbReactor=0;
let vacuumPrice=price[0]; 
let fuelTankPrice =price[1]; 
let wingsPrice=price[2]; 
let reactorPrice=price[3]; 


vacuumPrice.innerText=10; 
fuelTankPrice.innerHTML=50; 
wingsPrice.innerHTML=100; 
reactorPrice.innerHTML=500; 


const counting =(amountperclick) => {
  numbStarDust=numbStarDust +amountperclick ;
  dustCounter.innerText = numbStarDust;
}

const reset = () => {
  numbStarDust = 0; 
  dustCounter.innerText = numbStarDust;   
}; 



const levelUpVaccum = () => {
    if (numbStarDust >= vacuumPrice.innerText) {
    amountperclick = amountperclick + 5;
    numbStarDust=numbStarDust-vacuumPrice.innerText; 
    numbVacuum++ ; 
    count[0].innerText = numbVacuum;   
    vacuumPrice.innerText = (vacuumPrice.innerText)*5; 
    //console.log(numbVacuum);
    //console.log(price[0].innerText);s
    dustCounter.innerText = numbStarDust;
    amountpersecond=Math.round(amountpersecond*1.5); 

  } else {
    prompt("Click again"); 
  }
 }

const levelUpFuelTank = () => {
  if (numbStarDust >= fuelTankPrice.innerText) {
    amountperclick = amountperclick + 20;
    numbStarDust=numbStarDust-fuelTankPrice.innerText;
    numbFuelTank++ ;
    count[1].innerText = numbFuelTank;
    fuelTankPrice.innerText = (fuelTankPrice.innerText)*10;
    dustCounter.innerText = numbStarDust;
    amountpersecond=amountpersecond*2; 
}
else {
  prompt("Try to click harder"); 
}
}

const levelUpWings = () => {
  if (numbStarDust >= wingsPrice.innerText) {
    amountperclick = amountperclick+50;
    numbStarDust=numbStarDust - wingsPrice.innerText; 
    numbWings++; 
    count[2].innerText = numbWings;
    wingsPrice.innerText=(wingsPrice.innerText)*15; 
    dustCounter.innerText = numbStarDust;
    amountpersecond=Math.round(amountpersecond*2.5); 
}
else {
  prompt("Click again"); 
}
}

const levelUpReactor = () => {
  if (numbStarDust >= reactorPrice.innerText) {
    amountperclick = amountperclick+100;
    numbStarDust=numbStarDust - reactorPrice.innerText; 
    numbReactor++; 
    count[3].innerText = numbReactor;
    reactorPrice.innerText=(reactorPrice.innerText)*20; 
    dustCounter.innerText = numbStarDust;
    amountpersecond=amountpersecond*3; 
  }else {
  prompt("Click again"); 
}
}

setInterval(function () {
  numbStarDust=numbStarDust + amountpersecond; 
  dustCounter.innerText=numbStarDust; 
  counterpersecond.innerHTML= amountpersecond + " / second"
}, 1000);

//       FOR SHOP ==> Lucas
const shopObject =[
    booster1={
        name: "Vaccum",
        price: 10,
        property: 2,
        givePerClick : this.price / 4 * this.property,
    },
    booster2={
        name: "Fuel tank",
        price: 25,
        property: 0,
        givePerClick : this.price / 4 * this.property,
    },
    booster3={
        name: "Wings",
        price: 50,
        property: 0,
        givePerClick : this.price / 4 * this.property,
    },booster4={
        name: "Reactor",
        price: 100,
        property: 0,
        givePerClick : this.price / 4 * this.property,
    },
]
//console.log(shopObject); 
// ALED... Robin is lost

// const  vaccumPrice=()=>{
//   document.querySelector('#vaccum-price').innerText = shopObject[0].price +  " SD"
// };
// const  fuelTankPrice=()=>{
//   document.querySelector('#fueltank-price').innerText = shopObject[1].price +  " SD"
// };
// const  wingsPrice=()=>{
//   document.querySelector('#wings-price').innerText = shopObject[2].price +  " SD"
// };
// const  reactorPrice=()=>{
//   document.querySelector('#reactor-price').innerText = shopObject[3].price +  " SD"
// };

// vaccumPrice();
// fuelTankPrice();
// wingsPrice();
// reactorPrice()