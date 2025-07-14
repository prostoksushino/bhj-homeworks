const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let deadValue = Number(dead.textContent);
let lostValue = Number(lost.textContent);

function getHole(index) {
    return document.getElementById('hole' + index)
}

function resetGame() {
    deadValue = 0;
    lostValue = 0;
    dead.textContent = deadValue;
    lost.textContent = lostValue;
}

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);
    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            deadValue++;
            dead.textContent = deadValue;
        } else {
            lostValue++;
            lost.textContent = lostValue;
        }
        if (deadValue === 10) {
            alert('Победа!');
            resetGame();
        }
        if (lostValue === 5) {
            alert('Вы проиграли!');
            resetGame();
        }
    }

}