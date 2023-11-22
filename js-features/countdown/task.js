
let timer = document.getElementById("timer");
const contest = setInterval(() => {
    timer.textContent -= 1
    if (timer.textContent <= 0){
        alert ("Вы победили в конкурсе!");
        // timer.textContent = 0;
        clearInterval(contest);
    }
}, 1000);