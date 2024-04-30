function Flicker(arr) {
    let res = [];
    let switcher = true;
    
    for (let i of arr) {
        if (i === 'flick') {
            if (switcher) {
                switcher = false;
            } else {
                switcher = true;
            }
        }

        res.push(switcher);
    }
    return res;
}


console.log(Flicker(['codewars', 'flick', 'code', 'wars'])); 
console.log(Flicker(['flick', 'chocolate', 'adventure', 'sunshine'])); 
console.log(Flicker(['bicycle', 'jarmony', 'sheep', 'flick', 'jarmony', 'jarmony' , 'flick' , 'jarmony', 'jarmony', 'jarmony']));
