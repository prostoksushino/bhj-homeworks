const products = document.querySelectorAll('.product');
const cartProducts = document.querySelectorAll('.cart__product');
const productsContainer = document.querySelector('.cart__products');

products.forEach(product => {
    const btnDec = product.querySelector('.product__quantity-control_dec');
    const btnInc = product.querySelector('.product__quantity-control_inc');
    const quantityValue = product.querySelector('.product__quantity-value');
    const addProduct = product.querySelector('.product__add');

    btnDec.addEventListener('click', () => {
        let count = Number(quantityValue.textContent);
        if (count > 1) {
            quantityValue.textContent = count - 1;
        }
    })

    btnInc.addEventListener('click', () => {
        let count = Number(quantityValue.textContent);
        quantityValue.textContent = count + 1;

    })

    addProduct.addEventListener('click', () => {
        const productId = product.dataset.id;
        let cartProduct = productsContainer.querySelector(`.cart__product[data-id="${productId}"]`);
        const addCount = Number(quantityValue.textContent);
        if (cartProduct) {
            const cartProductCount = cartProduct.querySelector('.cart__product-count');
            const cartProductValue = Number(cartProductCount.textContent);
            cartProductCount.textContent = cartProductValue + addCount;
        } else {
            const productImageSrc = product.querySelector('.product__image');

            const cartProductDiv = document.createElement('div');
            cartProductDiv.className = 'cart__product';
            cartProductDiv.dataset.id = productId;

            const image = document.createElement('img');
            image.className = 'cart__product-image';
            image.src = productImageSrc.src;

            const countDiv = document.createElement('div');
            countDiv.className = 'cart__product-count';
            countDiv.textContent = addCount;

            cartProductDiv.appendChild(image);
            cartProductDiv.appendChild(countDiv);

            productsContainer.appendChild(cartProductDiv);
        }

    })
})