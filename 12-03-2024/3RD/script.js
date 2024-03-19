const myName = document.querySelector(".myName")
const myButton = document.querySelector(".btn")

function changeName(){
    myName.innerHTML="Babaxa"
}

myButton.addEventListener("click",()=>{
    changeName(myName)
    myName.style.color = "green"
})