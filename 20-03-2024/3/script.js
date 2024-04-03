const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const tbody = document.querySelector("tbody");
const loader = document.getElementById("loader")


setTimeout(() => {
    loader.style.display = "none"; 
}, 100);


btn.addEventListener("click", async () => {
  const data = await fetch('https://valuto.ge/wp-json/rest-currency-list/v3/currencies');
  const result = await data.json();
  renderCurrencies(result.data.currencies);
  console.log(result.data.currencies)
});

let currentIndex = 0; 

function renderCurrencies(currencies) {
  tbody.innerHTML = "";
  const values = Object.values(currencies);
  if (currentIndex < values.length ) {
    const currency = values[currentIndex];
    tbody.innerHTML += 
      `<tr>
        <td>${currency.CcFrom}</td>
        <td>${currency.buy}</td>
        <td>${currency.sell}</td>
      </tr>`;
    currentIndex++;
  }

  const rows = document.querySelectorAll('tr');
  rows[rows.length - 1].classList.add('stop');
}

function renderCurrenciesAll(currencies) {
  tbody.innerHTML = "";
  const values = Object.values(currencies);
  values.forEach(currency => {
      if (currency.CcTo == "GEL") {
          tbody.innerHTML += 
          `<tr>
            <td>${currency.CcFrom}</td>
            <td>${currency.buy}</td>
            <td>${currency.sell}</td>
          </tr>`;
      }
  });
}

  btn2.addEventListener("click", async () => {
    const data = await fetch('https://valuto.ge/wp-json/rest-currency-list/v3/currencies');
    const result = await data.json();
    renderCurrenciesAll(result.data.currencies);
  });




const mySelector = document.getElementById("mySelector");
const countButton = document.getElementById("countButton");
const inputCurrency = document.getElementById("inputCurrency");
const outputCurrency = document.getElementById("outputCurrency");



countButton.addEventListener("click", function() {
  let inputValue = parseFloat(inputCurrency.value);
  const values = Object.values(currencies);
  if (!isNaN(inputValue)) {
      let outputValue;
      let selectedCurrency = mySelector.value;
      

      switch (selectedCurrency) {
          case "value1":
              outputValue = inputValue * currency.CcFrom;
              break;
          case "value2": 
              outputValue = inputValue * 3;
              break;
          case "value3": 
              outputValue = inputValue / 2;
              break;
          default:
              outputValue = "Invalid Currency";
              break;
      }
      
      outputCurrency.value = outputValue;
  } else {
      outputCurrency.value = "Enter The Amount!";
  }
});