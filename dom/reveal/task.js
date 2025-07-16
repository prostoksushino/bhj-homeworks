const reveals = document.querySelectorAll('.reveal');

function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

function revealOnScroll() {
    reveals.forEach((el) => {
        if (isVisible(el)) {
            el.classList.add('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();