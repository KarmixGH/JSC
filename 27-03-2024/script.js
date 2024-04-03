const btn = document.getElementById("btn");



btn.addEventListener("click", async () => {
    const dataIncome = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataOutcome = await dataIncome.json();
    console.log(dataOutcome[63].body)
})