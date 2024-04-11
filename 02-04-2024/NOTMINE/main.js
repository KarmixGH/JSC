import { getCurrency, getSupported, renderOptions } from './service.js';
import { HtmlElement } from './domElements.js';

const loader = document.getElementById("loader")

let rate = null;
let currency1 = null;
let currency2 = null;
let amount_1 = 1;
let amount_2 = null;

async function handleConversion() {
    currency1 = HtmlElement.select_1.value;
    currency2 = HtmlElement.select_2.value;

    const currencies = await getCurrency(currency1);
    rate = currencies.rates[currency2];
    amount_2 = (rate * amount_1).toFixed(2);
    HtmlElement.amount_2.value = amount_2;
}

async function init() {
    const supportedCodes = await getSupported();
    renderOptions(supportedCodes);

    currency1 = HtmlElement.select_1.value;
    currency2 = HtmlElement.select_2.value;

    const currencies = await getCurrency(currency1);
    rate = currencies.rates[currency2];
    amount_2 = (rate * amount_1).toFixed(2);
    HtmlElement.amount_2.value = amount_2;
}

HtmlElement.amount_1.addEventListener('input', e => {
    amount_1 = e.target.value;
    handleConversion();
});

HtmlElement.select_1.addEventListener('change', handleConversion);
HtmlElement.select_2.addEventListener('change', handleConversion);


init();

HtmlElement.swapBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const temp = HtmlElement.select_1.value;
    HtmlElement.select_1.value = HtmlElement.select_2.value;
    HtmlElement.select_2.value = temp;

    handleConversion();
});