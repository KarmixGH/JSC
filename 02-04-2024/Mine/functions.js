import { API_LINK } from "./KEYS.js";
import { HtmlElement } from "./HTMLElements.js";

export async function getData(endPoint) {
    const url = API_LINK + endPoint;
    const data = await fetch(url);
    const result = await data.json();
    return result;
}

export async function getCurrency(code) {
    const endPoint = `latest/${code}`;
    const res = await getData(endPoint);
    const result = {
        base_code: res.base_code,
        rates: res.conversion_rates
    };
    return result;
}

export async function getSupported() {
    const endPoint = `codes`;
    const result = await getData(endPoint);
    return result.supported_codes;
}

export function renderOptions(suportedCodeArray,currency1,currency2) {
    arr.forEach(code => {
        HTMLElements.select_1.innerHTML += `
            <option ${code[0] == currency1 ? 'selected' : ''} value="${code[0]}" title="${code[1]}">${code[0]}</option>
        `;
        HTMLElements.select_2.innerHTML += `
            <option ${code[0] == currency2 ? 'selected' : ''} value="${code[0]}" title="${code[1]}">${code[0]}</option>
        `;
    });
}