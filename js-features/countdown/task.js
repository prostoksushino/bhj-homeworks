const timer = document.getElementById('timer');

let timerValue = Number(timer.textContent);

const interval = setInterval(() => {
    if (timerValue > 0) {
        timerValue = timerValue - 1
        timer.textContent = timerValue
    } else {
        clearInterval(interval)
        alert("Вы победили в конкурсе!")
    }
}, 1000);