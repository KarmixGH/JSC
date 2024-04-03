import {API_LINK} from "./KEYS.js"
import {HTMLElements} from "./HTMLElements.js";

export async function getData(endPoint) {
  const url = API_LINK + endPoint;
  const data = await fetch(url);
  const result = await data.json();
  return result;
}

export async function getCurrency(code) {
  const endPoint = `latest/${code}`;
  const result = await getData(endPoint);
  return result;
}

export async function getSupported() {
  const endPoint = `codes`;
  const result = await getData(endPoint);
  return result.supported_codes;
}

export function renderOptions(Arr){
    Arr.forEach(code => {
      HTMLElements.select1.innerHTML+=
      `<option ${code[0] == "GEL" ? "selected" : ""}  value = ${code[0]} "title =${code[1]}"> ${code[0]} </option>`
  
      HTMLElements.select2.innerHTML+=
      `<option value = ${code[0]} "title =${code[1]}"> ${code[0]} </option>`
    });
  }
  