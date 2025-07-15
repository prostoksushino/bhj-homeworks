const dropDowns = document.querySelectorAll('.dropdown');

dropDowns.forEach(dropdown => {
    const dropDownValue = dropdown.querySelector('.dropdown__value');
    const dropDownList = dropdown.querySelector('.dropdown__list');
    const dropDownItems = [...dropdown.querySelectorAll('.dropdown__item')];
    dropDownValue.addEventListener('click', () => {
        dropDownList.classList.toggle('dropdown__list_active');
    })
    dropDownItems.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const link = item.querySelector('.dropdown__link');
            dropDownValue.textContent = link.textContent;
            dropDownList.classList.remove('dropdown__list_active');
        })
    })

})