

document.getElementById("main-action-button").onclick =function (){
   document.getElementById("products").scrollIntoView({behavior:"smooth" } );
}
//медленный  .scrollIntoView({behavior:"smooth" } )  к заданному объекту

let links = document.querySelectorAll( ".menu-item > a"); //все что находим храним в переменном
for(let i=0;i<links.length;i++){ //    я указал начальное значение переменной i=0;
   links[i].onclick = function (){
      document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior:"smooth" } );

   }
}

let buttons = document.getElementsByClassName("product-button")    //все что находим храним в переменном
for(let i=0;i<buttons.length;i++){
   buttons[i].onclick = function (){
      document.getElementById("order").scrollIntoView({behavior:"smooth" } );

   }
}

let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone"); //храним в let
document.getElementById("order-action").onclick=function (){
   let hasError=false;
   [burger,name,phone].forEach(item=>{
      if(!item.value){
         item.parentElement.style.background="red";
         hasError=true;
      }else{
         item.parentElement.style.background="";

      }
   })
   if(!hasError){
      [burger,name,phone].forEach(item=>{
         item.value="";
      });
      alert("Спасибо за заказ!!!")
   }
}
let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
   let currentCurrency = e.target.innerText; // текущая валюта

   let newCurrency = "$";
   let coefficient = 1;
   if (currentCurrency === "$") {
      newCurrency = "₴";
      coefficient = 36;
   } else if (currentCurrency === "BVN") {
      newCurrency = "€";
      coefficient = 0.9;
   } else if (currentCurrency === "₽") {
      newCurrency = "BVN";
      coefficient = 3;
   } else if (currentCurrency === "€") {
      newCurrency = "¥";
      coefficient = 6.9;
   }
   e.target.innerText = newCurrency;
   for (let i = 0; i < prices.length; i++) {
      prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
   }
}


