document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const rotatorCases = [...card.querySelectorAll('.rotator__case')];
        let index = 0;
        setInterval(() => {
            rotatorCases[index].classList.remove('rotator__case_active');
            index=(index+1)%rotatorCases.length;
            rotatorCases[index].classList.add('rotator__case_active');
        }, 1000)
    })
});