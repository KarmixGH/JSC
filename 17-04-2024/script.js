//turned

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let SortedArray = array.sort((a, b) => b - a);
console.log(SortedArray);




//reduced

let sum = array.reduce((acc, value) => {
  return acc + value;
}, 0);

console.log(sum);




// Max Number

let MaxNumber = Math.max(...array);
console.log(MaxNumber);




//Only even numbers

let evenNumbers = array.reduce((acc, value) => {
  if (value % 2 === 0) {
    acc.push(value);
  }
  return acc;
}, []);

console.log(evenNumbers);




// merge arrays

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let MergedArray = array1.concat(array2);
console.log(MergedArray);




// counter function 

let arrayDup = [1, 2, 2, 3, 3, 3, 4, 7, 7, 7, 7, 7, 7, 7, 7];

function count(array, element) {
    let count = 0;
    for (let i = 0; i < arrayDup.length; i++) {
        if (arrayDup[i] === element) {
            count++;
        }
    }
    return count;
}

console.log(count(arrayDup, 7)); 




// remover

function removeDuplicates(array) {
    return [...new Set(array)];
}

console.log(removeDuplicates(arrayDup));





// multiply by two

function multiplyElements(array, multiplier) {
    return array.map(element => element * multiplier);
}

console.log(multiplyElements(array, 3));




// find both minimum and maximum values in array

function bothMinMax(arr){
    let minNumber = Math.min(...arr);
    let maxNumber = Math.max(...arr);
    let bothNumbers = [`Min: ${minNumber}`, `Max: ${maxNumber}`];
    return bothNumbers;
}

console.log(bothMinMax(array)); 





// flatten an array of arrays into a single array

function flatten(arr) {
    return [].concat(...arr);
}

let arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
console.log(flatten(arrayOfArrays));





// case with asked products


function suggestDrink(expr) {
  switch (expr.toLowerCase()) {

    case "jabroni":
      console.log("Patron Tequila");
      break;

    case "school counselor":
      console.log("Anything with Alcohol");
      break;

    case "programmer":
      console.log("Hipster Craft Beer");
      break;

    case "bike gang member":
      console.log("Moonshine");
      break;

    case "politician":
      console.log("Your tax dollars");
      break;

    case "rapper":
      console.log("Cristal");
      break;

    default:
      console.log("Beer");
      break;
      
  }
}

suggestDrink("Jabroni");
suggestDrink("ProGramMer");
suggestDrink("politician");