var zebpay = "https://www.zebapi.com/api/v1/market/ticker/btc/inr";
var coinsecure = "https://api.coinsecure.in/v1/exchange/ticker";
var coinDelta = "https://coindelta.com/api/v1/public/getticker/";

const currencyComma = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

function priceDisplay (buy,sell){
   return `
   <p>
    <b><i class="fa fa-btc" aria-hidden="true"></i> Buy Price</b> = &#8377; ${buy}
    <br>
    <b><i class="fa fa-btc" aria-hidden="true"></i> Sell Price</b> = &#8377; ${sell}
   <p>`;
}


//Coinsecure Logic

fetch(coinsecure, {method: 'get'})
.then((res) => res.json())
.then((response) =>{
    buy = currencyComma(response.message.bid/100);
    sell = currencyComma(response.message.ask/100);
    document.getElementById('coinsecure').innerHTML = priceDisplay(buy,sell);           
});

// Zebpay Logic
fetch(zebpay, {method: 'get'})
.then((res) => res.json())
.then((response) =>{
    buy = currencyComma(response.buy);
    sell = currencyComma(response.sell);
    document.getElementById('zebpay').innerHTML = priceDisplay(buy,sell);           
});

//CoinDelta Logic

fetch(coinDelta, {method: 'get'})
.then((res) => res.json())
.then((response) =>{
    buy = currencyComma(response[0].Bid);
    sell = currencyComma(response[0].Ask);
    document.getElementById('coinDelta').innerHTML = priceDisplay(buy,sell);           
});