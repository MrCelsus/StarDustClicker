

const dustCounter =document.getElementById('Dust-counter'); 
const count=document.getElementsByClassName('count'); 



let numbStarDust = 0;
let clicksecond =50; 
let amountperclick = 1; 
let numbVacuum = 0; 
let numbFuelTank =0;
let numbWings =0;
let numbReactor=0;

//let count 

const counting =(amountperclick) => {
  numbStarDust=numbStarDust +amountperclick ;
  dustCounter.innerText = numbStarDust;
}

const reset = () => {
  numbStarDust = 0; 
  dustCounter.innerText = numbStarDust;   
}; 



const levelUpVaccum = () => {
    if (numbStarDust > 10) {
    amountperclick = amountperclick + 5;
    numbStarDust=numbStarDust-10; 
    numbVacuum++ ; 
    count[0].innerText = numbVacuum;   
    //console.log(numbVacuum);
    //console.log(count[0].innerText);
    dustCounter.innerText = numbStarDust;
  } else {
    prompt("Try to click harder"); 
  }
 }

const levelUpFuelTank = () => {
  if (numbStarDust > 25) {
  amountperclick = amountperclick+20;
  numbStarDust=numbStarDust-20;
  numbFuelTank++ ;
  count[1].innerText = numbFuelTank;
  dustCounter.innerText = numbStarDust;
}
else {
  prompt("Try to click harder"); 
}
}

const levelUpWings = () => {
  amountperclick = amountperclick+50;
    count[2].innerText = numbWings++;
}
  

const levelUpReactor = () => {
  amountperclick = amountperclick+100;
    count[3].innerText = numbReactor++;
}

const setInterval =() => {

}

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
console.log(shopObject); 
// ALED... Robin is lost

const  vaccumPrice=()=>{
  document.querySelector('#vaccum-price').innerText = shopObject[0].price +  " SD"
};
const  fuelTankPrice=()=>{
  document.querySelector('#fueltank-price').innerText = shopObject[1].price +  " SD"
};
const  wingsPrice=()=>{
  document.querySelector('#wings-price').innerText = shopObject[2].price +  " SD"
};
const  reactorPrice=()=>{
  document.querySelector('#reactor-price').innerText = shopObject[3].price +  " SD"
};

vaccumPrice();
fuelTankPrice();
wingsPrice();
reactorPrice()