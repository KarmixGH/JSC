import {B_URL} from './keys.js'
import{HtmlElement} from './domElements.js'


async function getData(endPoint){
    const url = B_URL + endPoint;
    const data = await fetch(url);
    const result = await data.json();
    loader.style.display = "none";
    return result;   
}

export async function getCurrency(code){
    const endPoint=`latest/${code}`
    const res=await getData(endPoint)
    const result={
        base_code:res.base_code,
        rates:res.conversion_rates
    }
   return result
}

export async function getSupported(){
    const endPoint=`codes`
    const result=await getData(endPoint);
    return result.supported_codes
}


export function renderOptions(suportedCodeArray,currency1,currency2){
    suportedCodeArray.forEach(code => {
        HtmlElement.select_1.innerHTML+=`
        <option ${code[0]==currency1 ? 'selected':''} value="${code[0]}" title="${code[1]}">${code[0]}</option>
        `
        HtmlElement.select_2.innerHTML+=`
        <option ${code[0]==currency2 ? 'selected':''} value="${code[0]}" title="${code[1]}">${code[0]}</option>
        `
    });
}

