function sameCase(a, b) {
    if ((a.match(/[A-Z]/g) && b.match(/[A-Z]/g)) || (a.match(/[a-z]/g) && b.match(/[a-z]/g))) {
      console.log(1)

    } else if (!a.match(/[A-z]/g) || !b.match(/[A-z]/g)) {
      console.log(-1)

    } else {
      console.log(0)
    }
    
}

sameCase("d", "D")
sameCase("c", "w")
sameCase("F", "w")
sameCase("B", "B")
sameCase("1", "B")




function compareCase(a,b){
    let firstIsUpperCase = a.toUpperCase() === a;
    let secondIsUpperCase = b.toUpperCase() === b;
    return firstIsUpperCase === secondIsUpperCase
}

console.log(compareCase("f", "B"))