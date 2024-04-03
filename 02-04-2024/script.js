import {getCurrency, getSupported, renderOptions} from "./functions.js"
import {HTMLElements} from "./HTMLElements.js";


const supportedCodes = await getSupported();
renderOptions(supportedCodes)


async function init(){
  const supportedCodes = await getSupported();
  renderOptions = await getCurrency("GEL");
  code1 = currencies.base_code;
  code2 = HTMLElements.select2.values;
  rate = currencies.rates(code2);
  HTMLElements.amount2.value=rate*1
}



init();
HTMLElements.select1.addEventListener("change", async (e) => {
  console.log(e.target.value)
  const code = e.target.value
  const data = await getCurrency(code);
  const code2 = HTMLElements.select2.value;
  console.log(code2)
})