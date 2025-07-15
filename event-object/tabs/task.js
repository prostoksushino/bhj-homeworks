const tabs = document.querySelectorAll('.tabs');
tabs.forEach((tabBlock) => {
const tabs = [...tabBlock.querySelectorAll('.tab')];
const contents = [...tabBlock.querySelectorAll('.tab__content')];
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const index= tabs.indexOf(tab);
            tabs.forEach(t => t.classList.remove('tab_active'));
            contents.forEach(t => t.classList.remove('tab__content_active'));
            tab.classList.add('tab_active');
            contents[index].classList.add('tab__content_active');
        })
    })
})


