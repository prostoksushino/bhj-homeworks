const counter = document.getElementById('clicker__counter');

const cookie = document.getElementById('cookie');

let counterValue = Number(counter.textContent);


cookie.onclick = function () {
    counterValue++;
    counter.textContent = counterValue;
    if (cookie.width === 200) {
        cookie.width = 180
        cookie.height = 180
    } else {
        cookie.width = 200
        cookie.height = 200
    }
}