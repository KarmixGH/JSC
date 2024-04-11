let spanWho = document.getElementById('spanWho')
let blockItem = document.querySelectorAll('.blockItem')
let spanWinner = document.getElementById('spanWinner')
let whosWinner = document.getElementById('whosWinner')
let btnNewGame = document.getElementById('btnNewGame')
let blockArea = document.getElementById('blockArea')



let step = "";
let winner = "";

const who = () => {
    if (step == 'O'){
        step = "X"
        spanWho.innerText = 'X'
        spanWho.style.color = "#45A29E"
    } else {
        step = 'O'
        spanWho.innerText = 'O'
        spanWho.style.color = "#F2B137"
    }
}

who()

let counter = 0;

blockItem.forEach((item) => {
    item.addEventListener('click', () => {
        if(!item.classList.contains('O') && !item.classList.contains('X')){
            item.classList.add(step)

            if (step == "X"){
                item.innerText = ""
            }

            if (step == "O"){
                item.innerText = ""
            }

        counter++;
        who()
        XWin()
        OWin()
        tie()

        }
    })
});

let winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let OWin = () => {
    for (let index = 0; index < winCombos.length; index++) {
        if (blockItem[winCombos[index][0]].classList.contains('O') &&
            blockItem[winCombos[index][1]].classList.contains('O') && 
            blockItem[winCombos[index][2]].classList.contains('O')
        ){
            blockItem[winCombos[index][0]].classList.add('winColor') 
            blockItem[winCombos[index][1]].classList.add('winColor') 
            blockItem[winCombos[index][2]].classList.add('winColor')

            winner = "O"
            endGame(winner)
            return 1
        }
    }
}

let XWin = () => {
    for (let index = 0; index < winCombos.length; index++) {
        if (blockItem[winCombos[index][0]].classList.contains('X') &&
            blockItem[winCombos[index][1]].classList.contains('X') && 
            blockItem[winCombos[index][2]].classList.contains('X')
        ){
            blockItem[winCombos[index][0]].classList.add('winColor') 
            blockItem[winCombos[index][1]].classList.add('winColor') 
            blockItem[winCombos[index][2]].classList.add('winColor')

            winner = "X"
            endGame(winner)
            return 1
        }
    }
}

let tie = () => {
    if (!XWin() && !OWin() && (counter >= 9)){
        winner = "Its a Tie"
        endGame(winner)
    }
}

let endGame = (winner)=>{
    blockArea.style.pointerEvents = 'none';
    spanWinner.innerText = "The Winner is: " + winner
    spanWho.innerText = "Game Has Ended"
}

btnNewGame.addEventListener('click', () => {
    document.location.reload()
})

