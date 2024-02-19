document.addEventListener('DOMContentLoaded', () => {
    const productTitles = document.querySelectorAll('.product__title');
    productTitles.forEach(title => {
        console.log(title.innerText);
    });
    const productPrices = document.querySelectorAll('.price-item.price-item--regular');
    productPrices.forEach(price => {
        console.log('Price:', price.innerText.trim());
    });
});
