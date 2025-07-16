const book = document.getElementById('book');
const fonts = document.querySelectorAll('.font-size');

fonts.forEach(font => {
    font.addEventListener('click', event => {
        event.preventDefault();
        fonts.forEach(f => f.classList.remove('font-size_active'));
        font.classList.add('font-size_active');
        book.classList.remove('book_fs-big', 'book_fs-small');
        const size = font.dataset.size;
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    })
})