//1 Max number from array



const array = [4,2,3,7,5,2,7,3,1,-6,-3,-10,10,30,-30]

console.log(Math.max(...array))



//1.2  Max number from array For loop



const array1 = [4, 2, 3, 7, 5, 2, 7, 3, 1, -6, -3, -10, 10, 30, -30];

let maxNumber = array1[0]; 

for (let i = 1; i < array1.length; i++) {
    if (array1[i] > maxNumber) {
        maxNumber = array1[i]; 
    }
}

console.log(maxNumber)



//2 For loop that shows odd and even numbers



for (let i = 0; i <= 15; i++) {
    if (i === 0) {
        console.log(i + " is even");
    }
    else if (i % 2 === 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }
} 



//3 array Sort



const array2 = [4,2,3,7,5,2,7,3,1,-6,-3,-10,10,30,-30]

const result2 = array2.sort((a,b) => a-b)

console.log(result2)



// 4 most frequent item in array



const arr1 = [3, 'a', 'b', 'b', 2, "b", 'a', 3, 'a', 2, "b", 9, 3];
const frequencyMap = {};
let mostFrequentItem;
let maxFrequency = 0;

for (let i = 0; i < arr1.length; i++) {
    const currentItem = arr1[i];
    frequencyMap[currentItem] = (frequencyMap[currentItem] || 0) + 1;
    if (frequencyMap[currentItem] > maxFrequency) {
        maxFrequency = frequencyMap[currentItem];
        mostFrequentItem = currentItem;
    }
}

console.log(mostFrequentItem);



// 5 elements of the following array



const a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
  ];

for (let i = 0; i < a.length; i++) {
    console.log(`"row ${i}"`);
    for (let j = 0; j < a[i].length; j++) {
      console.log(` ${a[i][j]}`);
    }
}



// 6 remove specific element from an array



let array3 = [1,2,3,4,5,6,7,8,9]

function remove_array_element(arr, element) {
    const i = arr.indexOf(element);
    if (i !== -1) {
        arr.splice(i, 1);
    }
    return arr;
}


console.log(remove_array_element(array3, 3))




// 7 alert showing width and height of a window



const btn2 = document.querySelector(".btnAlert")

btn2.addEventListener('click', () => {
    alert(`Window width: ${window.innerWidth}, Window height: ${window.innerHeight}, Running on: ${window.location}`);
})



// 8 button that refreshed a page



const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
    document.location.reload();
});
