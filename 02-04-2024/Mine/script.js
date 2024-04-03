import { getCurrency, getSupported, renderOpsions } from "./functions.js";
import { HTMLElements } from "./HTMLElements.js";

let rate = null;
let currency1 = 'GEL';
let currency2 = 'USD';
let amount_1 = 1;
let amount_2 = null;
let currencies = null;
const supportedCodes = await getSupported();

HTMLElements.amount_1.addEventListener('input', e => amount_1 = e.target.value);
HTMLElements.btn.addEventListener('click', (e) => {
    e.preventDefault();
    amount_2 = rate * amount_1;
    HTMLElements.amount_2.value = amount_2;
});

async function init(){
  renderOpsions(suportedCodes,currency1,currency2);
  curencies=await getCurrency(currency1);
  rate=curencies.rates[currency2];  
  amount_2=rate*amount_1;
  HtmlElement.amount_2.value=amount_2;   
}

await init();