var buy,sell;
var api = "https://www.zebapi.com/api/v1/market/ticker/btc/inr";

const currencyComma = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

fetch(api, {method: 'get'})
.then((res) => res.json())
.then((response) =>{
    buy = currencyComma(response.buy);
    sell = currencyComma(response.sell);
    document.getElementById('price').innerHTML = `
    <p><b><i class="fa fa-btc" aria-hidden="true"></i>
     Buy Price</b> = 	&#8377; ${buy}<br>
    <b><i class="fa fa-btc" aria-hidden="true"></i>
     Sell Price</b> = 	&#8377; ${sell}<p>`      
});

