const tbody = document.querySelector("tbody");
const h1 = document.querySelector("h1");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

let interval;

function startAdding() {
    interval = setInterval(() => {
        let sec = parseInt(h1.innerText);
        h1.innerText = sec + 1;
    }, 1);
}

start.addEventListener("click", () => {
    startAdding();
});

stop.addEventListener("click", () => {
    clearInterval(interval);
});





const user={
    fName: "John",
    lName: "Doeh",
    detail: "Fr-Street 14,23"
}

const user2={
    fName: "Forte",
    lName: "Miguel",
    detail: "real"
}

const user3={
    fName: "Alves",
    lName: "Venyetti",
    detail: "300+ Yo"
}

const user4={
    fName: "Gorsen",
    lName: "Borealis",
    detail: "Miner"
}

const user5={
    fName: "Vera",
    lName: "Voss",
    detail: "teacher"
}

const user6={
    fName: "Zane",
    lName: "Nocturne",
    detail: "reincarnated"
}

const user7={
    fName: "Baraban",
    lName: "Fargoret",
    detail: "Blod"
}



const userList = [];



function addUser(users) {
    userList.push(...users);
}

const users = [user, user2, user3, user4, user5, user6, user7];

addUser(users);


function saveUser(array) {
    localStorage.setItem(`myUserList`, JSON.stringify(array))
}

saveUser(userList)


function logUsers(){
    JSON.parse(localStorage.getItem(userList))
    console.log("Users In LocalStorage:", userList)
}

logUsers()

function renderUsers() {
    const storedUsers = JSON.parse(localStorage.getItem("myUserList")); 
    tbody.innerHTML = ''; 

    storedUsers.forEach(user => {
        tbody.innerHTML += `
        <tr>
            <td>${user.fName}</td>
            <td>${user.lName}</td>
            <td>${user.detail}</td>
        </tr>`;
    });
}

renderUsers();